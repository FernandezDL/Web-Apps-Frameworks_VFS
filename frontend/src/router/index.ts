import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import LandingPage from "@/views/LandingPage.vue";
import AboutPage from "@/views/AboutPage.vue";

const routes: RouteRecordRaw[] = [
    {path: "/", name:"Landing", component: LandingPage},
    {path: "/about", name:"About this", component: AboutPage},
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
