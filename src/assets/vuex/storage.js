import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    paramsbattery : [], // 存储储能实时数据
    paramscab : [], // 控制柜实时数据
    warningbms : [], // BMS告警显示
    binarysyswarning : [], // 系统故障
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
    },
    PARAM_CTRLCAB_CHANGE (state, cabParamData){     // 控制柜实时数据
      state.paramscab = cabParamData;
    },
    WARNING_BMS_CHANGE (state, BMSWarningData){     // BMS告警信息显示
      state.warningbms = BMSWarningData;
    },
    WARNING_SYS_CHANGE (state, binaryWarningData){  // 系统告警二进制数据
      state.binarysyswarning = binaryWarningData;
    }
  },
  getters: {
    paramsBattery: (state) => {
      return state.paramsbattery;
    },
    paramsCab: (state) => {
      return state.paramscab;
    },
    warningBMS : (state) => {
      return state.warningbms;
    },
    warningSysBinary : (state) => {
      return state.binarysyswarning;
    }

  }


});