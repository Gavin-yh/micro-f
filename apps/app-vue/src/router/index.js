import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
    path: "/vue/home",
    title: "vue 首页",
    component: Home
  },
  {
    path: "/vue/about",
    title: "关于页",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // 运行在主应用中时，添加路由命名空间 /vue
  base: window.__POWERED_BY_QIANKUN__ ? "/vue" : "/",
});

export default () => router
