import {createRouter, createWebHistory}from 'vue-router'
import Login from "/src/pages/login/Login.vue"
const Application = () => import("/src/pages/application/Application.vue")
const Dashboard = () => import("/src/pages/dashboard/Dashboard.vue")
const Applicants = () => import("/src/pages/applicants/Applicants.vue")
const Jobs = () => import("/src/pages/jobs/Jobs.vue")
const Calendar = () => import("/src/pages/calendar/Calendar.vue")
const Main = () => import("/src/pages/main.vue")

const routes = [
    {
        path:"/",
        component: Main, 
        children: [
            {
                path:"/dashboard",
                component: Dashboard,
                meta: {
                    header: "Dashboard"
                }
            },
            {
                path:"/applicants",
                component: Applicants,
                meta: {
                    header: "Applicants"
                }
            },
            {
                path:"/calendar",
                component: Calendar,
                meta: {
                    header: "Calendar"
                }
            },
            {
                path:"/jobs",
                component: Jobs,
                meta: {
                    header: "Jobs"
                }
            }
        ]
    },
    {
        path:"/login",
        component: Login
    },
    {
        path:"/application_forms",
        component: Application
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;