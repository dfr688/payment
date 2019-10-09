import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todayIncome: "", //今日收入
    balance: "", //可提现金额
    amount: "" //累计收款金额
  },
  mutations: {
    changeInfo(state,value) {
      state.todayIncome = value.todayIncome;
      state.balance = value.balance;
      state.amount = value.amount;
    }
  },
  actions: {
    changeInfo(context,value){
      context.commit("changeInfo",value);
    }
  }
})
