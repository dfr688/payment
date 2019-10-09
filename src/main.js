import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/reset.scss'
import './assets/js/rem'

Vue.config.productionTip = false

// 把封装的axios挂载到原型上
import baseJS from './api'
Vue.prototype.baseJs = baseJS

import { Button } from 'vant';
Vue.use(Button);

import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

import { Popup } from 'vant';
Vue.use(Popup);

import { Toast } from 'vant';
Vue.use(Toast);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
