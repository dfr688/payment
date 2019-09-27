import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/reset.scss'
import './assets/js/rem'

Vue.config.productionTip = false

import { Button } from 'vant';
Vue.use(Button);

import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
