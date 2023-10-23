import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Todos from '../views/Todos.vue'
import Weather from '../views/Weather.vue'
import Profile from '../views/Profile.vue'
import NotFound from '../views/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/todos',
    name: 'todo',
    component: Todos
  },
  {
    path: '/weather',
    name: 'weather',
    component: Weather
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/:catchAll(.*)',
    name: 'Notfound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
