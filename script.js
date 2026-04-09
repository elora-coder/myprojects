document.addEventListener("DOMContentLoaded", () => {

    // ====== ТЕМА ======
    const themeToggle = document.getElementById("themeToggle");

    // зчитування теми з localStorage
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });


    // ====== ДАНІ ПРОЄКТІВ ======
   const projects = [
    {
        title: "Портфоліо",
        category: "design",
        description: "Головна сторінка портфоліо",
        repo: "https://github.com/elora-coder/myprojects/tree/main/portfolio_main",
        site: "https://elora-coder.github.io/myprojects/portfolio_main/"
    },
    {
        title: "Портфоліо 2.0",
        category: "js",
        description: "Портфоліо зі змінами",
        repo: "https://github.com/elora-coder/myprojects/tree/main/portfolio",
        site: "https://elora-coder.github.io/myprojects/portfolio/"
    },
    {
        title: "Лабораторна №3",
        category: "js",
        description: "Використання JavaScript у клієнтських сценаріях",
        repo: "https://github.com/elora-coder/myprojects/tree/main/film",
        site: "https://elora-coder.github.io/myprojects/film/"
    },
    {
        title: "Лабораторна №5",
        category: "js",
        description: "Веб-сервіс, що визначає ймовірний вік людини за її ім’ям за допомогою публічного API.",
        repo: "https://github.com/elora-coder/myprojects/tree/main/agify",
        site: "https://elora-coder.github.io/myprojects/agify/"
    },
    {
        title: "Лабораторна №6",
        category: "js",
        description: "Веб-застосунок на TypeScript, який отримує передбачений вік користувача за його ім’ям за допомогою API Agify та відображає результат у браузері.",
        repo: "https://github.com/elora-coder/myprojects/tree/main/lab6",
        site: "https://elora-coder.github.io/myprojects/lab6/"
    }
];


    // ====== РЕНДЕР ======
    const container = document.getElementById("projectsContainer");
    const searchInput = document.getElementById("search");
    const filterSelect = document.getElementById("filter");
    

    function renderProjects() {
        let search = searchInput.value.toLowerCase();
        let filter = filterSelect.value;

        container.innerHTML = "";

        let filtered = projects.filter(p => {
            let matchText = p.title.toLowerCase().includes(search);
            let matchCategory = filter === "all" || p.category === filter;
            return matchText && matchCategory;
        });

        filtered.forEach(p => {
            let card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h2>${p.title}</h2>
                <p>${p.description}</p>
                <a href="${p.repo}" target="_blank">Репозиторій</a>
                <a href="${p.site}" target="_blank">Сайт</a>
            `;

            container.appendChild(card);
        });
    }

    searchInput.addEventListener("input", renderProjects);
    filterSelect.addEventListener("change", renderProjects);

    renderProjects();
    

  searchInput.addEventListener("input", renderMovies);
  genreSelect.addEventListener("change", renderMovies);

  // ------------------
  //  Перемикач теми
  // ------------------
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
  });
});
