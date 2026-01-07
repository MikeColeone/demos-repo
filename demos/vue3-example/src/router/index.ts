import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  type RouteRecordRaw
} from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/example01/experiment01.vue')
  },
  {
    path: '/example03_01',
    component: () => import('@/views/example03/example03_01.vue')
  },
  {
    path: '/example03_02',
    component: () => import('@/views/example03/example03_02.vue')
  },
  {
    path: '/example03_03',
    component: () => import('@/views/example03/example03_03.vue')
  },
  {
    path: '/example04/students/:sid/homework/:hid',
    component: () => import('@/views/example04/example04_01.vue')
  },
  {
    path: '/experiment02',
    component: () => import('@/views/experiment02/experiment02.vue')
  },
  {
    path: '/experiment03',
    component: () => import('@/views/experiment03/indexView.vue'),
    children: [
      {
        path: 'location',
        component: () => import('@/views/experiment03/location.vue')
      },
      {
        path: 'food',
        component: () => import('@/views/experiment03/food.vue')
      },
      {
        path: 'run',
        component: () => import('@/views/experiment03/run.vue')
      }
    ]
  },
  {
    path: '/example02_01',
    component: () => import('@/views/example02/experiment02_01.vue')
  },
  {
    path: '/example02_02',
    component: () => import('@/views/example02/example02_02.vue')
  },
  {
    path: '/example02_03',
    component: () => import('@/views/example02/example02_03.vue')
  },
  {
    path: '/example02_04',
    component: () => import('@/views/example02/example02_04.vue')
  },
  {
    path: '/example05_01',
    component: () => import('@/views/example05/example05_01.vue')
  },
  {
    path: '/example05_02',
    component: () => import('@/views/example05/example05_02.vue')
  },
  {
    path: '/example06_01',
    component: () => import('@/views/example06/example06_01.vue')
  },
  {
    path: '/example06_02',
    component: () => import('@/views/example06/example06_02.vue')
  },
  {
    path: '/example07_01',
    component: () => import('@/views/example07/example07_01.vue')
  },
  {
    path: '/example07_02',
    component: () => import('@/views/example07/example07_02.vue')
  },
  {
    path: '/example07_03',
    component: () => import('@/views/example07/example07_03.vue')
  },
  {
    path: '/example07_04',
    component: () => import('@/views/example07/example07_04.vue')
  },
  {
    path: '/example13_01',
    component: () => import('@/views/example13/example13_01.vue')
  },
  {
    path: '/homework01',
    component: () => import('@/views/homework01/indexUsers.vue')
  },
  {
    path: '/homework02',
    component: () => import('@/views/homework02/indexView.vue')
  },
  {
    path: '/homework03',
    component: () => import('@/views/homework03/indexView.vue')
  },
  {
    path: '/homework04',
    component: () => import('@/views/homework04/indexView.vue')
  },
  {
    path: '/practice',
    component: () => import('@/views/practice/example01.vue')
  },
  {
    path: '/homework05',
    component: () => import('@/views/homework05/indexView.vue')
  },
  {
    path: '/example16_01',
    component: () => import('@/views/example16/example16_01.vue')
  },
  {
    path: '/timer',
    component: () => import('@/views/timer/timerView.vue')
  },
  {
    path: '/myproxy',
    component: () => import('@/views/proxy/indexView.vue')
  },
  {
    path: '/example19',
    component: () => import('@/views/example19/indexView.vue')
  },
  {
    path: '/rrweb',
    component: () => import('@/views/rrweb/indexView.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
