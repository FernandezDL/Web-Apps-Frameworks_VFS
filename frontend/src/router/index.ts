import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import LandingPage from "@/views/LandingPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ContactUsPage from "@/views/ContactUsPage.vue";
import Leaderboard from '@/views/LeaderboardPage.vue';

const routes: RouteRecordRaw[] = [
    {path: "/", name:"Landing", component: LandingPage},
    {path: "/about", name:"About this", component: AboutPage},
    {path: "/leaderboard", name:"Leaderboard", component: Leaderboard},
    {path: "/contact-us", name:"Contact Us", component: ContactUsPage},
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
