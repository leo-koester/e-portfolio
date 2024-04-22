import { createRouter, createWebHashHistory } from 'vue-router';

//
//
export default createRouter({

    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHashHistory(),

    scrollBehavior() {
        return { top: 0, left: 0 }
    },

    routes: [

        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue')
        },

        {
            path: '/projects',
            name: 'projects',
            component: () => import('@/views/ProjectsView.vue')
        },

        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/AboutView.vue')
        },

        {
            path: '/contact',
            name: 'contact',
            component: () => import('@/views/ContactView.vue')
        }
    ]

});