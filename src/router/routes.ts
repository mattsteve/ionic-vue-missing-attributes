import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/:catchAll(.*)',
        redirect: {
            name: 'login'
        }
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'Login'
        },
        component: () => import('../views/login-test.vue')
    }
];

export default routes;
