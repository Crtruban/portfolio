import { createRouter, createWebHistory } from 'vue-router'
import eduView from './../components/Views/Education/eduView.vue'
import hbyView from './../components/Views/Hobby/hbyView.vue'
import homeDash from './../components/Views/Home/homeDash.vue'
import pjView from './../components/Views/Projects/pjView.vue'
import skView from './../components/Views/Skills/skView.vue'
import whView from './../components/Views/WorkHistory/whView.vue'

const routes = [
    {
        path: '/',
        name: `Home`,
        component: homeDash
    },
    {
        path: '/pj',
        name: `Projects`,
        component: pjView
    },
    {
        path: '/edu',
        name: `Education`,
        component: eduView
    },
    {
        path: '/hby',
        name: `Hobbies`,
        component: hbyView
    },
    {
        path: '/skl',
        name: `Skills`,
        component: skView
    },
    {
        path: '/wh',
        name: `Work History`,
        component: whView
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router