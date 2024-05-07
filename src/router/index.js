import {createRouter, createWebHistory}from 'vue-router'
import Login from "/src/pages/login/Login.vue"
const Application_Forms = () => import("/src/pages/application/Application_Forms.vue")

const routes = [
    {
        path:"/",
        component: Login
    },
    {
        path:"/application_forms",
        component: Application_Forms
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;