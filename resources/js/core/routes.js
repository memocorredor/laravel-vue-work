import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// WEB GENERAL
import Home from "@/views/Home";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;