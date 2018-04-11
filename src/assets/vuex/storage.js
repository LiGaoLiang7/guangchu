import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    paramsbattery : [], // 存储储能实时数据
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
    PARAM_BATTERY_CHANGE (state, batteryParamData){ // 储能电池实时数据
      state.paramsbattery = batteryParamData;
    }

  },
  getters: {
    paramsBattery: state => {
      return state.paramsbattery;
    }
  }


});