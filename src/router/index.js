import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import login from '@/components/account/login'
import register from '@/components/account/register'
import findpwd from '@/components/account/findpwd'
import invite from '@/components/invite/invite'
import guide from '@/components/guide/guideIndex'
import sell from '@/components/sellList/sell'
import lotteryRecord from '@/components/lotteryRecord/list'
import winnerDetail from '@/components/lotteryRecord/detail'

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
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/findpwd',
      name: 'findpwd',
      component: findpwd
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
    },
    {
      path: '/sell',
      name: 'sell',
      component: sell
    },
    {
      path: '/winner/list',
      name: 'lotteryRecord',
      component: lotteryRecord
    },
    {
      path: '/winner/detail/:id',
      name: 'winnerDetail',
      component: winnerDetail
    }
  ]
})
