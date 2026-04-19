<script setup>
defineProps(["lang"]);
</script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">{{ lang === "uk" ? "Головна" : "Home" }}</router-link></li>
      
      <li><router-link :to="{ path: '/', hash: '#about' }">{{ lang === "uk" ? "Про мене" : "About" }}</router-link></li>
      <li><router-link :to="{ path: '/', hash: '#skills' }">{{ lang === "uk" ? "Навички" : "Skills" }}</router-link></li>
      <li><router-link :to="{ path: '/', hash: '#education' }">{{ lang === "uk" ? "Освіта" : "Education" }}</router-link></li>
      
      <li><router-link to="/contacts">{{ lang === "uk" ? "Контакти" : "Contacts" }}</router-link></li>
      <li><a href="/myprojects/index.html">{{ lang === "uk" ? "Проєкти" : "Project" }}</a></li>
    </ul>
  </nav>
</template>