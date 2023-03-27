import{createRouter ,createWebHistory} from "vue-router"
import NewPage from "../views/NewPage.vue"
import Home from "../views/Home.vue"
import Confirmation from "../views/Confirmation.vue"

const routes =[

    {
        path:'/',
        name:"Home",
        component:Home
    },

    {
        path:'/newpage',
        name:"Newpage",
        component:NewPage
    },
    {
        path:'/confirmation',
        name:"Confirmation",
        component:Confirmation
    }
]


const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:routes
})
export default router