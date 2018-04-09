import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    paramdatas : [], // 存储实时数据
  },

  actions: {
    userLogged ({commit}, user) {
      commit('USER_LOGGED', user)
    }
  },
  mutations: {
    USER_LOGGED (state, user) {
      state.user = user
    },
    // 
    PARAM_CHANGE (state, paramDataArray){ // 实时数据监听方法
      state.paramdatas = paramDataArray;
    },

  },
});