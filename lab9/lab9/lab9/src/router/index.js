import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Contacts from "../pages/Contacts.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/contacts", component: Contacts },
];

const router = createRouter({
  history: createWebHashHistory("/myprojects/lab8/"),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  },
});

export default router;