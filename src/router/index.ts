import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
// @ts-expect-error 引入错误
import Home from '@/views/helloA.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // @ts-expect-error 引入错误
    component: async () => await import('@/views/worldA.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
