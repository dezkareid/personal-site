import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Frontend from '@/components/Frontend'
import Backend from '@/components/Backend'
import Mobile from '@/components/Mobile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/frontend',
      name: 'frontend',
      component: Frontend
    },
    {
      path: '/backend',
      name: 'backend',
      component: Backend
    },
    {
      path: '/mobile',
      name: 'mobile',
      component: Mobile
    }
  ]
})
