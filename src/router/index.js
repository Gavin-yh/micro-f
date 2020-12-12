import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

import createMenu from "@/helper/menu";

const { menus } = createMenu([
  {
    path: "/home",
    name: "Home",
    title: "首页",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    title: "为引用",
    component: About
  }
]);

// const routes = [
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => {
//       return import(/* webpackChunkName: "about" */ "../views/About.vue");
//     }
//   }
// ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: menus
});

export default router;
