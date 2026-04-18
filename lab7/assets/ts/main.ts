import type { Todo, TodoFilter } from "./types.js";

declare const rxjs: any;
const { BehaviorSubject, fromEvent, combineLatest, map } = rxjs;

// ---------- DOM ----------
const todoForm = document.getElementById("todo-form") as HTMLFormElement;
const todoInput = document.getElementById("todo-input") as HTMLInputElement;
const todoList = document.getElementById("todo-list") as HTMLUListElement;
const filterButtons = document.getElementById("filters") as HTMLDivElement;

// ---------- STATE ----------
const todos$ = new BehaviorSubject([]);
const filter$ = new BehaviorSubject("all");

// ---------- INIT ----------
function init(): void {
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
function bindAddTodo(): void {
  fromEvent(todoForm, "submit")
    .pipe(
      map((e) => {
        e.preventDefault();
        return todoInput.value.trim();
      })
    )
    .subscribe((text) => {
      if (!text) return;

      const newTodo: Todo = {
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
function bindFilters(): void {
  fromEvent(filterButtons, "click")
    .pipe(
      map((e) => {
        const target = e.target as HTMLElement;
        const btn = target.closest("button"); // Шукаємо саме КНОПКУ
        
        // Якщо клікнули по чомусь, що не є кнопкою (наприклад, по нашому посиланню), 
        // просто ігноруємо цей клік для фільтрації
        if (!btn) return null; 
        
        return btn.dataset.filter as TodoFilter;
      })
    )
    .subscribe((filter) => {
      if (!filter) return;
      filter$.next(filter);
    });
}

// ---------- ACTIONS ----------
function bindActions(): void {
  fromEvent(todoList, "click")
    .pipe(
      map((e) => {
        const target = e.target as HTMLElement;
        const li = target.closest("li");
        const id = li?.dataset.id;

        if (!id) return null;

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
      })
    )
    .subscribe((action) => {
      if (!action) return;

      let todos = todos$.getValue();

      if (action.type === "delete") {
        todos = todos.filter(t => t.id !== action.id);
      }

      if (action.type === "toggle") {
        todos = todos.map(t =>
          t.id === action.id ? { ...t, completed: !t.completed } : t
        );
      }

      if (action.type === "edit") {
        const text = prompt("Новий текст:");
        if (!text) return;

        todos = todos.map(t =>
          t.id === action.id ? { ...t, text } : t
        );
      }

      todos$.next(todos);
    });
}

// ---------- RENDER ----------
function bindRender(): void {
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
function generateId(): string {
  return Date.now().toString() + Math.random().toString(16).slice(2);
}

function escape(str: string): string {
  return str.replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[m]!));
}