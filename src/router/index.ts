import FloatingGallery from '@/views/FloatingGallery.vue'
import HomePage from '@/views/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import InfiniteText from '../views/InfiniteText.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    { path: '/infinite-text', name: 'Infinite text', component: InfiniteText },
    { path: '/floating-gallery', name: 'Floating gallery', component: FloatingGallery }
  ]
})

export default router
