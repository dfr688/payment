import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/home/Home')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('./views/my/My')
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: () => import('./views/withdraw/Withdraw')
    },
    {
      path: '/record',
      name: 'record',
      component: () => import('./views/withdraw/Record')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login/Login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/login/Register')
    },
    {
      path: '/dealrecord',
      name: 'dealrecord',
      component: () => import('./views/my/DealRecord')
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('./views/withdraw/Success')
    },
    {
      path: '/apply',
      name: 'apply',
      component: () => import('./views/withdraw/Apply')
    },
    {
      path: '/identify',
      name: 'identify',
      component: () => import('./views/my/Identify')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('./views/my/Card')
    },
    {
      path: '/addcard',
      name: 'addcard',
      component: () => import('./views/my/AddCard')
    },
    {
      path: '/modify',
      name: 'modify',
      component: () => import('./views/my/Modify')
    },
    {
      path: '/receivecode',
      name: 'receivecode',
      component: () => import('./views/home/ReceiveCode')
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
