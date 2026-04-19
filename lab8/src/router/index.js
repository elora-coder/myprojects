import { createRouter, createWebHashHistory } from "vue-router"; // 1. Змінили тут
import Home from "../pages/Home.vue";
import Contacts from "../pages/Contacts.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/contacts", component: Contacts },
];

export default createRouter({
  // 2. Змінили на HashHistory і додали базовий шлях
  history: createWebHashHistory("/myprojects/lab8/"), 
  routes,
});