const { BehaviorSubject, fromEvent, combineLatest, map } = rxjs;
// ---------- DOM ----------
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const filterButtons = document.getElementById("filters");
// ---------- STATE ----------
const todos$ = new BehaviorSubject([]);
const filter$ = new BehaviorSubject("all");
// ---------- INIT ----------
function init() {
    if (!todoForm || !todoInput || !todoList || !filterButtons) {
        console.error("DOM не знайдено");
        return;
    }
    bindAddTodo();
    bindFilters();
    bindActions();
    bindRender();
}
init();
// ---------- ADD ----------
function bindAddTodo() {
    fromEvent(todoForm, "submit")
        .pipe(map((e) => {
        e.preventDefault();
        return todoInput.value.trim();
    }))
        .subscribe((text) => {
        if (!text)
            return;
        const newTodo = {
            id: generateId(),
            text,
            completed: false,
            createdAt: Date.now()
        };
        todos$.next([...todos$.getValue(), newTodo]);
        todoInput.value = "";
    });
}
// ---------- FILTER ----------
function bindFilters() {
    fromEvent(filterButtons, "click")
        .pipe(map((e) => {
        const target = e.target;
        const btn = target.closest("button");
        return btn === null || btn === void 0 ? void 0 : btn.dataset.filter;
    }))
        .subscribe((filter) => {
        if (!filter)
            return;
        filter$.next(filter);
    });
}
// ---------- ACTIONS ----------
function bindActions() {
    fromEvent(todoList, "click")
        .pipe(map((e) => {
        const target = e.target;
        const li = target.closest("li");
        const id = li === null || li === void 0 ? void 0 : li.dataset.id;
        if (!id)
            return null;
        if (target.classList.contains("delete")) {
            return { type: "delete", id };
        }
        if (target.classList.contains("toggle")) {
            return { type: "toggle", id };
        }
        if (target.classList.contains("edit")) {
            return { type: "edit", id };
        }
        return null;
    }))
        .subscribe((action) => {
        if (!action)
            return;
        let todos = todos$.getValue();
        if (action.type === "delete") {
            todos = todos.filter(t => t.id !== action.id);
        }
        if (action.type === "toggle") {
            todos = todos.map(t => t.id === action.id ? Object.assign(Object.assign({}, t), { completed: !t.completed }) : t);
        }
        if (action.type === "edit") {
            const text = prompt("Новий текст:");
            if (!text)
                return;
            todos = todos.map(t => t.id === action.id ? Object.assign(Object.assign({}, t), { text }) : t);
        }
        todos$.next(todos);
    });
}
// ---------- RENDER ----------
function bindRender() {
    combineLatest([todos$, filter$]).subscribe(([todos, filter]) => {
        let result = todos;
        if (filter === "active") {
            result = todos.filter(t => !t.completed);
        }
        if (filter === "completed") {
            result = todos.filter(t => t.completed);
        }
        todoList.innerHTML = result.map(todo => `
        <li data-id="${todo.id}" class="${todo.completed ? "completed" : ""}">
            <div style="display: flex; align-items: center;">
            ${todo.completed ? `<span class="done-label">Виконано</span>` : ""}
            <span>${escape(todo.text)}</span>
            </div>
            <div class="actions">
            <button class="toggle" title="Виконано">✔</button>
            <button class="edit" title="Редагувати">✎</button>
            <button class="delete" title="Видалити">✖</button>
            </div>
        </li>
        `).join("");
    });
}
// ---------- HELPERS ----------
function generateId() {
    return Date.now().toString() + Math.random().toString(16).slice(2);
}
function escape(str) {
    return str.replace(/[&<>"']/g, (m) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#039;"
    }[m]));
}
export {};
