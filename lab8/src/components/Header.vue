<script setup>
defineProps(["lang"]);
</script>

<template>
  <header class="hero">
    <div class="hero-text">
      <p class="hero-label">
        {{ lang === "uk" ? "Student Portfolio" : "Student Portfolio" }}
      </p>

      <h1>{{ lang === "uk" ? "Катерина" : "Kateryna"}}</h1>

      <p class="hero-subtitle">
        {{ lang === "uk"
          ? "Front-end студент • Дизайн • Креатив"
          : "Front-end student • Design • Creative" }}
      </p>

      <router-link to="/contacts" class="btn">
        {{ lang === "uk" ? "Зв’язатися" : "Contact me" }}
      </router-link>
    </div>

    <img src="/lab8/img/me.jpg" class="hero-img">
  </header>
</template>
