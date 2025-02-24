import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'
import Dashboard from '@/views/auth/Dashboard.vue'
import { useAuthStore } from '@/store/auth'

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
      component: Register,
      meta: { requiresGuest: true },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresGuest: true },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  if(to.matched.some((record) => record.meta.requiresAuth) && !auth.isLoggedIn) next({ name: 'login' })
  else if(
    to.matched.some((record) => record.meta.requiresGuest) && auth.isLoggedIn
  )
    next({ name: 'dashboard' })
  else next();
})

export default router
