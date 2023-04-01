/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import App from '../App.vue'
import LogInView from '../views/LogInView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/login',
      name: 'login',
      component: LogInView
    }
  ]
})

export default router
