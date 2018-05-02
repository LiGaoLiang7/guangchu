import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    tabindex : 1,  // 页面打开的index
    user: {},
    paramsbattery : [], // 实时数据 ： 存储储能实时数据
    paramscab : [], // 实时数据 ： 控制柜实时数据
    warningbms : [], // 告警数据 : BMS告警显示
    binarysyswarning : [], // 告警数据 : 系统故障
    switchFlag : null,    // 控制命令 1 开关机控制
    settingData : [],     // 参数设置数据
    connData : {
      ip : "",
      port : 0,
    }
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
    TAB_INDEX_CHANGE (state, index){
      state.tabindex = index;
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
    },
    CTRL_SWITCH_CHANGE (state, flag){               // 开关机状态变化
      state.switchFlag = flag;
    },
    CTRL_PARAMETER_CHANGE (state, settingData){    // 设置参数
      state.settingData = settingData;
    },
    CONN_DATA_CHANGE (state, obj){
      state.connData = obj;
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
    },
    ctrlSysSwitch : (state) => {
      return state.switchFlag;
    },
    tabIndex : (state) => {
      return state.tabindex;
    }
  }
});