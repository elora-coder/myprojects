<script setup>
import { ref } from 'vue';
defineProps(["lang"]);
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <nav class="navbar">
    
    <div class="container">
      <!-- бургер -->
      <button class="burger-btn" @click="toggleMenu">☰</button>
    </div>

    <!-- overlay -->
    <div v-if="isMenuOpen" class="overlay" @click="closeMenu"></div>

    <!-- меню -->
    <ul :class="['nav-links', { open: isMenuOpen }]">
      <button class="close-btn" @click="closeMenu">✕</button>

      <li><router-link @click="closeMenu" to="/">Головна</router-link></li>
      <li><router-link @click="closeMenu" :to="{path:'/', hash:'#about'}">Про мене</router-link></li>
      <li><router-link @click="closeMenu" :to="{path:'/', hash:'#skills'}">Навички</router-link></li>
      <li><router-link @click="closeMenu" :to="{path:'/', hash:'#education'}">Освіта</router-link></li>
      <li><router-link @click="closeMenu" to="/contacts">Контакти</router-link></li>
      <li><a @click="closeMenu" href="/myprojects/index.html">Проєкти</a></li>

    </ul>
  </nav>
</template>

