<script setup>
import { ref, onMounted, watch } from "vue";

import Header from "./components/Header.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

//  ТЕМА
const theme = ref(localStorage.getItem("theme") || "light");

//  МОВА
const lang = ref(localStorage.getItem("lang") || "uk");

// застосування теми
watch(theme, (newTheme) => {
  document.body.className = newTheme;
  localStorage.setItem("theme", newTheme);
});

// при завантаженні
onMounted(() => {
  document.body.className = theme.value;
});

// перемикач теми
function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
}

// перемикач мови
function changeLang(l) {
  lang.value = l;
  localStorage.setItem("lang", l);
}
</script>

<template>
  <!-- КНОПКИ -->
  <div class="controls">
    <button @click="toggleTheme">🌓</button>
    <button @click="changeLang('uk')">UA</button>
    <button @click="changeLang('en')">EN</button>
  </div>

  <Header :lang="lang" />
  <NavBar :lang="lang" />

  <router-view :lang="lang" />

  <Footer :lang="lang" />
</template>