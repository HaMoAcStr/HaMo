import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import Home from '@/views/helloA.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePage',
    redirect: '/home'
  },
  {
    path: '/layout',
    name: 'layout',
    component: async () => await import('@/layouts/index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: async () => await import('@/views/worldA.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
