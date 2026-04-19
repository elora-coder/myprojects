<script setup>
defineProps(["lang"]);
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" exact-active-class="active-link">Головна</router-link>
      </li>

      <li><router-link :to="{ path: '/', hash: '#about' }">Про мене</router-link></li>
      <li><router-link :to="{ path: '/', hash: '#skills' }">Навички</router-link></li>
      <li><router-link :to="{ path: '/', hash: '#education' }">Освіта</router-link></li>

      <li>
        <router-link to="/contacts" active-class="active-link">Контакти</router-link>
      </li>
      
      <li><a href="/myprojects/index.html">{{ lang === "uk" ? "Проєкти" : "Project" }}</a></li>
    </ul>
  </nav>
</template>