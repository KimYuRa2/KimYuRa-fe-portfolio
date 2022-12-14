import {createRouter, createWebHistory} from 'vue-router';
import routes from './route.js';

const router = createRouter({
    history : createWebHistory(),
    linkActiveClass : 'active',
    routes
})

export default router;