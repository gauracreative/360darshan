import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DarshanView from '../views/DarshanView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/of/:slug',
      name: 'darshan',
      component: DarshanView
    },
    {
      path: '/dhamas',
      name: 'dhamas',
      component: HomeView
    },
    {
      path: '/vr',
      name: 'vr',
      component: HomeView
    },
    {
      path: '/vr/meta-quest-app',
      name: 'meta quest app',
      component: HomeView
    },
    {
      path: '/help',
      name: 'help',
      component: HomeView
    }
  ]
})

export default router
