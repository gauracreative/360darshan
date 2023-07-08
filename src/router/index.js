import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DarshanView from '../views/DarshanView.vue'
import DarshanVrView from '../views/DarshanVrView.vue'
import DhamasView from '../views/DhamasView.vue'
import DhamaView from '../views/DhamaView.vue'
import VrView from '../views/VrView.vue'
import AppView from '../views/AppView.vue'
import HelpView from '../views/HelpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dhamas',
      name: 'dhamas',
      component: DhamasView
    },
    {
      path: '/vr',
      name: 'vr',
      component: VrView
    },
    {
      path: '/vr/meta-quest-app',
      name: 'meta quest app',
      component: AppView
    },
    {
      path: '/help',
      name: 'help',
      component: HelpView
    },
    {
      path: '/of/:slug',
      name: 'darshan',
      component: DarshanView
    },
    {
      path: '/vr/of/:slug',
      name: 'darshan-vr',
      component: DarshanVrView
    },
    {
      path: '/:slug',
      name: 'dhama',
      component: DhamaView
    },
  ]
})

export default router
