import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Timer from '../views/Timer.vue'
import ListUsers from '../views/ListUsers.vue'

const routes = [
  {
    path: '/',
    name: '',
    component: Index
  },
  {
    path: '/Timer',
    name: 'Timer',
    component: Timer
  },
  {
    path: '/ListUsers',
    name: 'ListUsers',
    component: ListUsers
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router