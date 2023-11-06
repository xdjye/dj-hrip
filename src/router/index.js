import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/message", component: () => import("@/views/message/index.vue") },
    { path: "/order", component: () => import("@/views/order/index.vue") },
    { path: "/my", component: () => import("@/views/myInfo/index.vue") },
    { path: "/home", component: () => import("@/views/home/index.vue") },
    { path: "/city", component: () => import("@/views/city/index.vue"), meta: { isHideTabBar: true} },
  ]
});

export default router