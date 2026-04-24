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

      <li><router-link @click="closeMenu" to="/">{{ lang === "uk" ? "Головна" : "Home" }}</router-link></li>
      <li><router-link @click="closeMenu" :to="{path:'/', hash:'#about'}">{{ lang === "uk" ? "Про мене" : "About me" }}</router-link></li>
      <li><router-link @click="closeMenu" :to="{path:'/', hash:'#skills'}">{{ lang === "uk" ? "Навички" : "Skills" }}</router-link></li>
      <li><router-link @click="closeMenu" :to="{path:'/', hash:'#education'}">{{ lang === "uk" ? "Освіта" : "Education" }}</router-link></li>
      <li><router-link @click="closeMenu" to="/contacts">{{ lang === "uk" ? "Контакти" : "Contacts" }}</router-link></li>
      <li><a @click="closeMenu" href="/myprojects/index.html">{{ lang === "uk" ? "Проєкти" : "Project" }}</a></li>

    </ul>
  </nav>
</template>

<style coped>
@media (max-width: 1024px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }
  .hero img {
    margin-top: 1.25rem; /* 20px */
  }
}

@media (max-width: 768px) {
  body.dark .burger-btn {
    background: #1d1d1d;
    color: white;
  }
  body.dark .nav-links {
    background: #1d1d1dec;
    color: white;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2rem;
    margin: 0.3125rem 0; /* 5px */
  }

  .hero img {
    width: 17.5rem;
    height: auto;
    margin-top: 1.25rem; /* 20px */
    border-radius: 9.375rem; /* 150px */
    object-fit: cover;
  }

  #education h3 {
    font-size: 1rem;
    line-height: 1.3;
  }

  #education p,
  #education li {
    font-size: 1rem;
  }

  article {
    padding: 1.5rem;
  }
  h1 {
    font-size: 1.5rem;
    text-align: center;
  }
  h2 {
    font-size: 1.5rem;
  }
}

.burger-btn,
.close-btn,
.overlay {
  display: none;
}

.nav-links {
  display: flex;
  gap: 0.9375rem; /* 15px */
  list-style: none;
}

.container {
  width: 100%;
  max-width: 75rem; /* 1200px */
  margin: 0 auto;
  padding: 0 1rem; /* 16px */
}

@media (max-width: 768px) {
  .navbar {
    background: transparent;
    padding: 0;
    border: none;
    width: 100%;
    position: fixed;
  }
  .burger-btn {
    display: block;
    position: fixed;
    top: 2.5rem; /* 40px */
    right: 1.375rem; /* 22px */
    width: 2.8125rem; /* 45px */
    height: 2.8125rem; /* 45px */
    font-size: 1.5rem; /* 24px */
    border-radius: 0.625rem; /* 10px */
    border: 0.0625rem solid rgba(0, 0, 0, 0.19); /* 1px */
    background: rgb(255, 255, 255);
    z-index: 1001;
    cursor: pointer;
    box-shadow: 0 0.125rem 0.625rem rgba(0, 0, 0, 0.1); /* 2px 10px */
  }
  
  .overlay {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
    backdrop-filter: blur(0.125rem); /* 2px */
  }

  .nav-links {
    position: fixed;
    top: 5.625rem; /* 90px */
    right: 1.25rem; /* 20px */
    left: auto;
    transform: translateY(-1.25rem); /* -20px */
    width: 8.5rem;
    background: white;
    border-radius: 0.9375rem; /* 15px */
    padding: 1.875rem 0.3125rem; /* 30px 5px */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0 0.625rem 1.875rem rgba(0, 0, 0, 0.15); /* 10px 30px */
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
  }

  .nav-links.open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }

  .nav-links li {
    margin: 0.5rem 0; /* 8px */
    padding-left: 0.9375rem; /* 15px */
    width: 100%;
  }
  .nav-links a {
    font-size: 1rem; /* 16px */
    font-weight: 500;
    color: #2c3e50;
    display: block;
    transition: color 0.2s;
    padding: 0.3125rem 0.3125rem; /* 5px */
    width: 100%;
  }
  .nav-links a:active {
    color: #3498db;
  }

  .close-btn {
    display: block;
    position: absolute;
    top: 0.9375rem; /* 15px */
    right: 0.9375rem; /* 15px */
    font-size: 1.375rem; /* 22px */
    border: none;
    background: none;
    cursor: pointer;
  }
}

.contacts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
  gap: 1.5rem;
}
</style>