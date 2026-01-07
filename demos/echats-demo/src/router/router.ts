


import { createRouter, createWebHistory } from 'vue-router';
// import { defineAsyncComponent } from 'vue';
// import Task from '../views/Task/index.vue';
// import Tasks from '../views/Tasks/index.vue';

// 路由配置
// const routes = [
//     {
//         path: '/',
//         name: 'tasks',
//         component: Tasks
//     },{
//         path: '/task/:id',
//         name: 'task',
//         component: Task
//     }
// ];

// 路由配置
const routes = [
    {
        path: '/',
        name: 'tasks',
        component: () => import('../views/Tasks/index.vue')
    },{
        path: '/task/:id',
        name: 'task',
        component: () => import('../views/Task/index.vue')
    },
    {
        path: '/charts',
        name: 'charts',
        component: () => import('../views/Charts/index.vue')
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;


console.log('Router initialized');