import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'
import Dashboard from '@/views/auth/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: () => Register,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => Dashboard,
    },
    {
      path: '/login',
      name: 'login',
      component: () => Login,
    },
  ],
})

export default router
