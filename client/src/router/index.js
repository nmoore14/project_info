import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/admin/Admin.vue'),
      children: [
        {
          path: 'dashboard',
          component: () => import('@/views/admin/pages/Dashboard.vue'),
        },
        {
          path: 'layouts',
          component: () => import('@/views/admin/pages/Layouts.vue'),
        },
        {
          path: 'pages',
          component: () => import('@/views/admin/pages/Pages.vue'),
        },
        {
          path: 'pageEditor/:id?',
          component: () => import('@/views/admin/pages/PageEditor.vue'),
        },
        {
          path: 'users',
          component: () => import('@/views/admin/pages/Users.vue'),
        },
      ],
    },
  ],
})
