document.addEventListener("DOMContentLoaded", () => {
  const movieList = document.getElementById("movieList");
  const loadMoreBtn = document.getElementById("loadMore");
  const searchInput = document.getElementById("search");
  const genreSelect = document.getElementById("genreSelect");
  const themeToggle = document.getElementById("themeToggle");

  // ------------------
  //  Дані (масив фільмів)
  // ------------------
  const movies = [
    { title: "Inception", genre: "Sci-Fi", year: 2010, poster: "img/inception.jpg" },
    { title: "Interstellar", genre: "Sci-Fi", year: 2014, poster: "img/interstellar.jpg" },
    { title: "The Dark Knight", genre: "Action", year: 2008, poster: "img/darkknight.jpg" },
    { title: "Joker", genre: "Drama", year: 2019, poster: "img/Joker.jpg" },
    { title: "Avatar", genre: "Sci-Fi", year: 2009, poster: "img/avatar.jpg" },
    { title: "John Wick", genre: "Action", year: 2014, poster: "img/johnwick.jpg" },
    { title: "Deadpool", genre: "Comedy", year: 2016, poster: "img/Deadpool.jpg" },
    { title: "Forrest Gump", genre: "Drama", year: 1994, poster: "img/forrestgump.jpg" },
    { title: "The Matrix", genre: "Sci-Fi", year: 1999, poster: "img/matrix.jpeg" },
    { title: "Titanic", genre: "Drama", year: 1997, poster: "img/titanic.jpg" },
    { title: "Harry Potter", genre: "Fantasy", year: 2001, poster: "img/potter.jpg" },
    { title: "Dune", genre: "Sci-Fi", year: 2021, poster: "img/dune.jpg" }
  ];

  let shown = 4;

  // ------------------
  //   Рендер фільмів
  // ------------------
  function renderMovies() {
    movieList.innerHTML = "";

    const filtered = movies.filter(m => {
      const matchText = m.title.toLowerCase().includes(searchInput.value.toLowerCase());
      const matchGenre = genreSelect.value === "all" || genreSelect.value === m.genre;
      return matchText && matchGenre;
    });

    filtered.slice(0, shown).forEach(m => {
      movieList.innerHTML += `
        <div class="movie-card">
          <img src="${m.poster}">
          <h3>${m.title}</h3>
          <p>${m.genre} • ${m.year}</p>
        </div>
      `;
    });

    if (shown >= filtered.length) loadMoreBtn.style.display = "none";
    else loadMoreBtn.style.display = "block";
  }

  renderMovies();

  // ------------------
  //   Події
  // ------------------
  loadMoreBtn.addEventListener("click", () => {
    shown += 4;
    renderMovies();
  });

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
