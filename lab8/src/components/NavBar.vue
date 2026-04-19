<script setup>
defineProps(["lang"]);
</script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">{{ lang === "uk" ? "Головна" : "Home" }}</router-link></li>
      <li><a href="#about">{{ lang === "uk" ? "Про мене" : "About" }}</a></li>
      <li><a href="#skills">{{ lang === "uk" ? "Навички" : "Skills" }}</a></li>
      <li><a href="#education">{{ lang === "uk" ? "Освіта" : "Education" }}</a></li>
      <li><router-link to="/contacts">{{ lang === "uk" ? "Контакти" : "Contacts" }}</router-link></li>
      <li><a href="/myprojects/index.html">{{ lang === "uk" ? "Проєкти" : "Project" }}</a></li>
    </ul>
  </nav>
</template>
