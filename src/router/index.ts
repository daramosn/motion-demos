import { createRouter, createWebHistory } from 'vue-router'
import InfiniteText from '../views/InfiniteText.vue'
import HomePage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    { path: '/infinite-text', name: 'Infinite text', component: InfiniteText }
  ]
})

export default router
