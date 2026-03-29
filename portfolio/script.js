// --- Theme toggle ---
const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const newTheme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
});


// --- Language system ---
const langButtons = document.querySelectorAll(".lang-btn");
let currentLang = localStorage.getItem("lang") || "uk";

loadLanguage(currentLang);

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const selected = btn.dataset.lang;
    loadLanguage(selected);
    localStorage.setItem("lang", selected);
  });
});

function loadLanguage(lang) {
  fetch("lang.json")
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.dataset.key;
        if (data[lang][key]) {
          el.textContent = data[lang][key];
        }
      });
    });
}
і