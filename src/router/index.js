import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/LoginPage.vue";
import Messages from "@/views/MessagesPage.vue";
import CreateMessage from "@/views/CreateMessagePage.vue";

const routes = [
    { path: "/", component: Login },
    { path: "/messages", component: Messages },
    { path: "/create-message", component: CreateMessage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
