import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import login from '@/components/account/login.vue'
import invite from '@/components/invite/invite'
import guide from '@/components/guide/guideIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/invite',
      name: 'invite',
      component: invite
    },
    {
      path: '/guide',
      name: 'guide',
      component: guide
    }
  ]
})
