import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Contacts from "../pages/Contacts.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/contacts", component: Contacts },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});