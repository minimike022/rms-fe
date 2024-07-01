import {createRouter, createWebHistory}from 'vue-router'
import Login from "/src/pages/login/Login.vue"
const Application = () => import("/src/pages/application/Application.vue")
const Dashboard = () => import("/src/pages/dashboard/Dashboard.vue")
const ApplicantsData = () => import("/src/pages/applicant/data/ApplicantsData.vue")
const ApplicationStatus = () => import("/src/pages/applicant/status/ApplicationStatus.vue")
const Applicants = () => import("/src/pages/applicant/Applicants.vue")
const Jobs = () => import("/src/pages/jobs/Jobs.vue")
const Calendar = () => import("/src/pages/calendar/Calendar.vue")
const Main = () => import("/src/pages/main.vue")

const DashboardScheduled = () => import("/src/components/dashboard_components/DashboardScheduled.vue")
const DashboardApplicants = () => import("/src/components/dashboard_components/DashboardApplicants.vue")

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
                },
                children: [
                    {
                        path: "/scheduled",
                        component: DashboardScheduled,
                    },
                    {
                        path: "/new_applicant",
                        component: DashboardApplicants,
                    }
                ]
            },
            {
                path:"/applications",
                component: Applicants,
                meta: {
                    header: "Applicants"
                },
                children: [
                    {
                        path: "/applicants_data/:id",
                        component: ApplicantsData,
                        props: true,
                    },
                    {
                        path: "/applicants_status",
                        component: ApplicationStatus,
                    },
                ]
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