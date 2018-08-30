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
    },
    connected: 0,//服务连接状态
    runningStatusData: [], // 设备运行状态数据
    // PCUdata
    binaryPCUData : null,

    //DSPdata
    binaryDSPData1 : null,
    binaryDSPData2 : null,
    // 工作模式参数设置 包含工作模式和时段电价
    workingModeData : [],

    // 自定义模式的flag
    customeModeData : [],

    //Total_Power
    TotalPowerData : null,
    //History_Power
    HistoryPowerData : null,
    //总告警标志位
    WarningState: false,
    //上传按钮默认禁用
    IsDisabled: true

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
      state.paramsbattery = null;
      state.paramsbattery = batteryParamData;
    },
    PARAM_CTRLCAB_CHANGE (state, cabParamData){     // 控制柜实时数据
      state.paramscab = null;
      state.paramscab = cabParamData;
    },
    WARNING_BMS_CHANGE (state, BMSWarningData){     // BMS告警信息显示
      state.warningbms = null;
      state.warningbms = BMSWarningData;
    },
    WARNING_SYS_CHANGE (state, binaryWarningData){  // 系统告警二进制数据
      state.binarysyswarning = null;
      state.binarysyswarning = binaryWarningData;
    },
    CTRL_SWITCH_CHANGE (state, flag){               // 开关机状态变化
      state.switchFlag = flag;
    },
    CTRL_PARAMETER_CHANGE (state, settingData){    // 设置参数
      state.settingData = settingData;
    },
    CONN_DATA_CHANGE (state, obj){ // 连接的数据 IP 和端口
      state.connData = obj;
    },
    STATUS_SYS_CHANGE (state, statusArray){ // 系统运行状态数据
      state.runningStatusData = statusArray;
      // this.$f7.dialog.alert(JSON.stringify(statusArray, " ", 4));
    },

    PCUData_CHANGE(state, PCUData) {
      state.binaryPCUData = PCUData;
    },

    DSPData_1_CHANGE(state, DSPData1) {
      state.binaryDSPData1 = DSPData1;
    },

    DSPData_2_CHANGE(state, DSPData2) {
      state.binaryDSPData2 = DSPData2;
    },

    WORKINGMODE_PARAMETER_CHANGE(state, workingModeParameter){
      state.workingModeData = null;
      state.workingModeData = workingModeParameter;
    },

    CUSTOMEINGMODE_PARAMETER_CHANGE(state, customeModeFlag){
      state.customeModeData = customeModeFlag;
    },

    TOTAL_POWER_CHANGE(state, TotalPowerData) {//总功率数据
      state.TotalPowerData = TotalPowerData;
    },

    HISTORY_POWER_CHANGE(state, HistoryPowerData) {//总功率数据
      state.HistoryPowerData = HistoryPowerData;
    },

    CONNECTED_STATE_CHANGE(state, ConnectedState){//服务连接状态
      state.connected = ConnectedState;
    },

    WARNING_STATE_CHANGE(state, WarningState){
      state.WarningState = WarningState;
    },
    DISABLED_STATE_CHANGE(state, DisabledState){
      state.IsDisabled = DisabledState;
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
    },
    RunningStatusData : (state) =>{
     return state.runningStatusData;
    }
  }
});
