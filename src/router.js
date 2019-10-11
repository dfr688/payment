import Vue from 'vue'
import Router from 'vue-router'

// 解决vue router 报错： Uncaught (in promise) 
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/home/Home'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('./views/my/My'),
      meta: {
        requiresAuth: true
      }
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
      path: '/paymentcode',
      name: 'paymentcode',
      component: () => import('./views/home/PaymentCode')
    },
    {
      path: '/dealpsw',
      name: 'dealpsw',
      component: () => import('./views/my/DealPsw')
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('./views/login/Privacy')
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
});
import { Toast } from 'vant';
//  路由权限控制 进入my组件时候 需要登录状态
router.beforeEach((to,from,next) => {
  // console.log(to.meta.requiresAuth)
  if(to.meta.requiresAuth){
    // 如果不为空 说明已经登录 直接放行
   // console.log(localStorage.getItem("token"));
    if(localStorage.getItem("token")!= null){
      next();
    }else{
     Toast({
        message: '请先登录！',
        duration: 1000
      });
      next({path: "/login"});
    }
  }else{
    next();
  }
   });

export default router;
