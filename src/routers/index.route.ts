import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages//home.page.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/admin',
      component: () => import('@/admin/index.admin.vue'),
    },
  ],
})
