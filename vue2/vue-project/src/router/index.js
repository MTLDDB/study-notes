// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../components/MainLayout.vue';
import LoginView from '../views/Login.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'MainLayout',
        redirect: '/home',
        component: MainLayout,
        children:[
            {
                path: '/home',
                name: 'Home',
                component: ()=>import('../views/HomeView.vue')
            }, {
                path: '/for',
                name: 'MyFor',
                component: ()=>import('../views/MyFor.vue')
            },
            {
                path: '/products',
                name: 'ProductList',
                component: ()=>import('../views/ProductListView.vue')
            }, {
                path: '/about',
                name: 'About',
                component: ()=>import('../views/About.vue')
            }, {
                path: '/product/:id',
                name: 'ProductDetail',
                component: ()=>import('../views/ProductDetailView.vue')
            },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/:catchAll(.*)', // 捕获所有未匹配的路由
        component: NotFound,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('userToken'); // 替换为实际认证逻辑
    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
        next({ path: '/login' });
    } else {
        next();
    }
});
export default router;
