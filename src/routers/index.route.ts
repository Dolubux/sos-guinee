import { createRouter, createWebHistory } from 'vue-router'
import Home from './../pages/home.page.vue'
import Actualite from './../pages/actualite.page.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/actualite/:id',
      name: 'Actualite',
      component: Actualite,
    },
    
    {
      path: '/admin',
      component: () => import('./../admin/index.admin.vue'),
    },
  ],
})
