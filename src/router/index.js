import less from 'less'
import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/main'
import Mortgage from '@/components/mortgage'
import Assets from '@/components/assets'
import Me from '@/components/me'

Vue.use(less)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/mortgage',
      name: 'Mortgage',
      component: Mortgage
    },
    {
      path: '/assets',
      name: 'assets',
      component: Assets
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})
