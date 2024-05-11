import {createRouter, createWebHistory, useRouter} from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView

      },
      {
        path: '/profile',
        name: 'about',
        component: () => import('../views/ProfileView.vue')
      }
    ]
  })

