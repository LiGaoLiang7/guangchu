<template>
    <!-- App -->
    <div id="app">
        <f7-statusbar></f7-statusbar>
        <f7-panel left cover>
            <f7-view url="/panel-left/" links-view=".view-main"/>
        </f7-panel>
        <f7-view url="/" :main="true" class="ios-edges"></f7-view>
        <f7-toolbar tabbar labels bottom class="app-main">
            <f7-link icon="iconfont icon-shouye" class="toolicon" href="/" text="首页" :class="{active : tabindex == 1}" @click="tabindex = 1"></f7-link>
            <f7-link icon="iconfont icon-canshu1" class="toolicon" href="/params/" text="参数" :class="{active : tabindex == 2}" @click="tabindex = 2"></f7-link>
            <f7-link icon="iconfont icon-gaojing " class="toolicon" href="/warning/" text="告警" :class="{active : tabindex == 3}" @click="tabindex = 3"></f7-link>
             <f7-link icon="iconfont icon-shezhi" class="toolicon" href="/setting/" text="设置" :class="{active : tabindex == 4}" @click="tabindex = 4"></f7-link>
        </f7-toolbar>
    </div>
</template>
<script>

import './assets/css/normalize.css'
import './assets/css/common.css'
import './assets/css/iconfont.css'

export default {
    mounted() {
      console.log(this);
        // console.log(this.$device);
    },
    data (){
        return{
            tabindex : 1,
            // wssstring : "192.168.0.171",
            wssstring : "10.10.100.102",
            // port : 9001, 
            port : 8899, 
            app : null,
            socketclient : null,
            params : [],

            // 储能电池实时数据
            params_battery : [
              { paramName : "电池电压",              paramValue : 0, byte : 2, unit : "V"  },
              { paramName : "电池电流",              paramValue : 0, byte : 2, unit : "A"  },
              { paramName : "温度",                  paramValue : 0, byte : 2, unit : "℃" },
              { paramName : "SOC",                   paramValue : 0, byte : 2, unit : "%"  },
              { paramName : "SOH",                   paramValue : 0, byte : 2, unit : "%"  },
              { paramName : "充放电状态",            paramValue : 0, byte : 2, unit : "", format : function(num){
                  if(num == 0x11) return "充电";
                  if(num == 0x22) return "放电";
                  if(num == 0x33) return "待机";
                  return Number(num).toString(16);
              }},
            ],
            // 控制柜实时数据
            params_ctrlcab : [
              { paramName : "PV1电压",              paramValue : 0, byte : 2, unit : "V"  , resolution : 10  },
              { paramName : "PV1电流",              paramValue : 0, byte : 2, unit : "A"  , resolution : 100 },
              { paramName : "PVI功率",              paramValue : 0, byte : 2, unit : "W"  , resolution : 1   },
              { paramName : "PV2电压",              paramValue : 0, byte : 2, unit : "V"  , resolution : 10  },
              { paramName : "PV2电流",              paramValue : 0, byte : 2, unit : "A"  , resolution : 100 },
              { paramName : "PV2功率",              paramValue : 0, byte : 2, unit : "W"  , resolution : 1   },
              { paramName : "逆变A相电压",          paramValue : 0, byte : 2, unit : "V"  , resolution : 10  },
              { paramName : "逆变A相电流",          paramValue : 0, byte : 2, unit : "A"  , resolution : 100 },
              { paramName : "电网A相电压",          paramValue : 0, byte : 2, unit : "V"  , resolution : 10  },
              { paramName : "电网AB线电压",         paramValue : 0, byte : 2, unit : "V"  , resolution : 10  },
              { paramName : "电网A相电流",          paramValue : 0, byte : 2, unit : "A"  , resolution : 100 },
              { paramName : "逆变B相电压",          paramValue : 0, byte : 2, unit : "V"  , resolution : 10  },
              { paramName : "逆变B相电流",          paramValue : 0, byte : 2, unit : "A"  , resolution : 100 },
              { paramName : "电网B相电压",          paramValue : 0, byte : 2, unit : "V"  , resolution : 10  },
              { paramName : "电网BC线电压",         paramValue : 0, byte : 2, unit : "V"  , resolution : 10  },
              { paramName : "电网B相电流",          paramValue : 0, byte : 2, unit : "A"  , resolution : 100 },
              { paramName : "逆变C相电压",          paramValue : 0, byte : 2, unit : "V"  , resolution : 10  },
              { paramName : "逆变C相电流",          paramValue : 0, byte : 2, unit : "A"  , resolution : 100 },
              { paramName : "电网C相电压",          paramValue : 0, byte : 2, unit : "V"  , resolution : 10  },
              { paramName : "电网CA线电压",         paramValue : 0, byte : 2, unit : "V"  , resolution : 10  },
              { paramName : "电网C相电流",          paramValue : 0, byte : 2, unit : "A"  , resolution : 100 },
              { paramName : "电网频率",             paramValue : 0, byte : 2, unit : "Hz" , resolution : 100 },
              { paramName : "功率因数",             paramValue : 0, byte : 2, unit :  ""  , resolution : 1000},
              { paramName : "系统有功功率",         paramValue : 0, byte : 2, unit : "VA" , resolution : 1   },
              { paramName : "系统无功功率",         paramValue : 0, byte : 2, unit : "W"  , resolution : 1   },
              { paramName : "系统视在功率",         paramValue : 0, byte : 2, unit : "Var", resolution : 1   },
              { paramName : "电池电流",             paramValue : 0, byte : 2, unit : "A"  , resolution : 10  },
              { paramName : "电池电压",             paramValue : 0, byte : 2, unit : "V"  , resolution : 10  },
              { paramName : "直流正母线电压",       paramValue : 0, byte : 2, unit : "V"  , resolution : 10  },
              { paramName : "直流负母线电压",       paramValue : 0, byte : 2, unit : "V"  , resolution : 10  },
              { paramName : "直流双边母线电压",     paramValue : 0, byte : 2, unit : "V"  , resolution : 10  },
              { paramName : "直流功率",             paramValue : 0, byte : 2, unit : "W"  , resolution : 1   },
              { paramName : "环境温度",             paramValue : 0, byte : 2, unit : "℃" , resolution : 100 },
              { paramName : "铅酸电池剩余容量",     paramValue : 0, byte : 2, unit : "%"  , resolution : 1   },
              { paramName : "铅酸电池剩余备电时间", paramValue : 0, byte : 2, unit : "Min", resolution : 1   },
              { paramName : "设备类型编码",         paramValue : 0, byte : 2, unit : ""   , resolution : 1   },
              { paramName : "软件版本号高位",       paramValue : 0, byte : 2, unit : ""   , resolution : 1   },
              { paramName : "软件版本号低位",       paramValue : 0, byte : 2, unit : ""   , resolution : 1   },
              { paramName : "并机地址",             paramValue : 0, byte : 2, unit : ""   , resolution : 1   },
              { paramName : "工作效率",             paramValue : 0, byte : 2, unit : ""   , resolution : 1   },
              { paramName : "充电次数",             paramValue : 0, byte : 2, unit : ""   , resolution : 1   },
              { paramName : "放电次数",             paramValue : 0, byte : 2, unit : ""   , resolution : 1   },
              { paramName : "模块A1 温度",          paramValue : 0, byte : 2, unit : "℃" , resolution : 10  },
              { paramName : "模块B1 温度",          paramValue : 0, byte : 2, unit : "℃" , resolution : 10  },
              { paramName : "模块C1 温度",          paramValue : 0, byte : 2, unit : "℃" , resolution : 10  },
              { paramName : "Backup输出A相电压",    paramValue : 0, byte : 2, unit : "V"  , resolution : 10  },
              { paramName : "Backup输出B相电压",    paramValue : 0, byte : 2, unit : "V"  , resolution : 10  },
              { paramName : "Backup输出C相电压",    paramValue : 0, byte : 2, unit : "V"  , resolution : 10  },
              { paramName : "Backup输出频率",       paramValue : 0, byte : 2, unit : "Hz" , resolution : 100 },
              { paramName : "Backup输出A相电流",    paramValue : 0, byte : 2, unit : "A" ,  resolution : 10  },
              { paramName : "Backup输出B相电流",    paramValue : 0, byte : 2, unit : "A" ,  resolution : 10  },
              { paramName : "Backup输出C相电流",    paramValue : 0, byte : 2, unit : "A" ,  resolution : 10  },
              { paramName : "Backup输出功率因数",   paramValue : 0, byte : 2, unit : "" ,   resolution : 1000},
              { paramName : "Backup输出有功功率",   paramValue : 0, byte : 2, unit : "VA",  resolution : 1   },
              { paramName : "Backup输出无功功率",   paramValue : 0, byte : 2, unit : "Var", resolution : 1   },
              { paramName : "Backup输出视在功率",   paramValue : 0, byte : 2, unit : "W" ,  resolution : 1   }
            ],

            // BMS告警信息 0表示无告警 1表示有告警
            warning_bms : [ 
              { paramName : "电池放电电流过高",     paramValue : 0, byte : 1, unit : "", isshow : 1},
              { paramName : "电池充电电流过高",     paramValue : 0, byte : 1, unit : "", isshow : 1},
              { paramName : "电池温度过低",         paramValue : 0, byte : 1, unit : "", isshow : 1},
              { paramName : "电池温度过高",         paramValue : 0, byte : 1, unit : "", isshow : 1},
              { paramName : "电池电压过低",         paramValue : 0, byte : 1, unit : "", isshow : 1},
              { paramName : "电池电压过高",         paramValue : 0, byte : 1, unit : "", isshow : 1},
            ],

            // 设备运行状态字
            running_status : [
              { paramName : "设备运行状态字1",     paramValue : 0, byte : 2, unit : "", isshow : 0},
              { paramName : "设备运行状态字2",     paramValue : 0, byte : 2, unit : "", isshow : 0},
            ],

            // 设备运行二进制编码
            binary_running_status : [], 

            // 设备运行状态字解析
            running_status_mean : [
              // 运行状态字 1 
              { paramName : "预留",                paramValue : 0, bit : 1, unit : "", isshow : 0},
              { paramName : "预留",                paramValue : 0, bit : 1, unit : "", isshow : 0},
              { paramName : "降额",                paramValue : 0, bit : 1, unit : "", isshow : 0},
              { paramName : "单/并机标志",         paramValue : 0, bit : 1, unit : "", isshow : 0},
              { paramName : "主/从机标志",         paramValue : 0, bit : 1, unit : "", isshow : 0},
              { paramName : "主/被动模式",         paramValue : 0, bit : 1, unit : "", isshow : 0},
              { paramName : "电池状态",            paramValue : 0, bit : 2, unit : "", isshow : 0},
              { paramName : "系统状态",            paramValue : 0, bit : 3, unit : "", isshow : 0},
              { paramName : "全范围 MPPT",         paramValue : 0, bit : 1, unit : "", isshow : 0},
              { paramName : "工作模式",            paramValue : 0, bit : 3, unit : "", isshow : 0},
              { paramName : "开关机状态",          paramValue : 0, bit : 1, unit : "", isshow : 0},
              // 运行状态字 2
            ],

            // 设备故障状态字
            warning_status : [
              {paramName : "故障状态字1",     paramValue : 0, byte : 2, unit : "", isshow : 0},
              {paramName : "故障状态字2",     paramValue : 0, byte : 2, unit : "", isshow : 0},
              {paramName : "故障状态字3",     paramValue : 0, byte : 2, unit : "", isshow : 0},
              {paramName : "故障状态字4",     paramValue : 0, byte : 2, unit : "", isshow : 0},
            ],
            // 故障状态字二进制编码
            binary_warning_status : [],
            // 系统信息
            system_info : [
              {paramName : "协议版本号",        paramValue : 0, byte : 2, unit : "", isshow : 0},
              {paramName : "电池厂商号",        paramValue : 0, byte : 2, unit : "", isshow : 0},
              {paramName : "Wifi SSID",         paramValue : 0, byte : 2, unit : "", isshow : 0},
              {paramName : "Wifi password",     paramValue : 0, byte : 2, unit : "", isshow : 0},
            ],

        }
    },
    computed : {
      // 全局的tabIndex
      tabIndex : function(){
        return this.$store.getters.tabIndex;
      },
      ctrlflag : function(){
        // 从store中获取参数
        return this.$store.getters.ctrlSysSwitch;  // 从getters中获取
      },
      // 全局的
      settingParamsters : function(){
        // 从store中获取参数
        return this.$store.state.settingData.slice(0);  // 从state中获取
      },
      conndata : function(){
        return this.$store.state.connData;
      }
    },
    watch : {
      tabIndex : function(){
        this.tabindex = this.tabIndex;
      },
      ctrlflag : function(){   // 设置 - 参数设置 开关机指令
        this.sendSwitchFlagCommand(this.ctrlflag);
      },
      settingParamsters : function(){ //设置 - 下发运行参数设置
        this.sendDeviceRunningParameters();
      },

      // 连接数据
      conndata : function(){
        // 关闭socket连接
        // this.socketclient.close();
        this.socketclient = new Socket();
        this.connectServirce(this.conndata.ip, this.conndata.port);
      }
    },
    methods : {
      // 初始化socket
      initSocket : function(){
          // this.connWebsocket("ws://" + this.wssstring);
          var _this = this;
          document.addEventListener('deviceready', function () {  
              _this.socketclient = new Socket();
              // _this.connectServirce();
          }, false);
      },
      // 连接socket
      connectServirce : function(wssstring, port){
        var theport = Number(port);
          var _this = this;
          this.socketclient.onData = function(data) {
              // _this.$f7.dialog.alert(typeof data);
              // _this.$f7.dialog.alert(JSON.stringify(data));
              var uint8View = new DataView(data.buffer);
              _this.praseData(uint8View);
          };
        this.socketclient.onError = function(errorMessage) {
            _this.$f7.dialog.alert("服务出错"+errorMessage, "提示");
        };
        this.socketclient.onClose = function(hasError) {
          // invoked after connection close
          this.$f7.dialog.alert("连接关闭", "提示");
        };

        this.socketclient.open(
          wssstring,
          theport,
          function() {
            _this.$f7.dialog.alert("连接服务成功", "提示");
          },
          function(errorMessage) {
            _this.$f7.dialog.alert("连接服务失败"+errorMessage, "提示");
          });
          
      },
      // 解析二进制 batearray 数据
      praseData : function(dataview){
          if(dataview.byteLength > 0){
              var start       =  dataview.getUint16(0,false);  // 起始帧   2字节
              var start_addr  =  dataview.getUint8(2,false);   // 起始地址 1字节
              var target_addr =  dataview.getUint8(3,false);   // 目标地址 1字节
              var command     =  dataview.getUint8(4,false);   // 命令字 1字节
              // this.$f7.dialog.alert('start : ' + start + "start_addr : " + start_addr + "target_addr : " + target_addr + "command : " + command);
              if(Number(start) == 0xFE55){   //    包起始帧 0xFE 0x55

                  if(start_addr == 0x14 && target_addr == 0x64){ // PCU->APP 起始地址为0X14，目标地址0x64
                      var length = dataview.getInt16(5,false);
                      if(dataview.getUint8(7 + length + 1, false) == 0xAE){ // 数据包完整 有结束
                        // this.$f7.dialog.alert("数据包完整");
                        switch (command) {
                          case 0x0A: // 储能电池信息 
                            this.praseBatteryData(dataview, 7, length); // 数据从6开始 截止是6+length
                            // console.log(JSON.stringify(this.params_battery, " ", 4));
                            // this.$f7.dialog.alert(JSON.stringify(this.params_battery, " ", 4));
                            this.$store.commit('PARAM_BATTERY_CHANGE', this.params_battery);
                            break;
                          case 0x0B: // 控制柜信息
                            // this.$f7.dialog.alert("控制柜信息");
                            this.prasCtrlcabData(dataview, 7, length);
                            this.$store.commit('PARAM_CTRLCAB_CHANGE', this.params_ctrlcab);
                            // console.log(JSON.stringify(this.params_ctrlcab," ", 2));
                            break;
                          case 0x1E: // BMS告警信息 warning_bms
                            // this.$f7.dialog.alert("BMS告警信息");
                            this.prasBMSWarningData(dataview, 7, length);
                            // console.log(JSON.stringify(this.warning_bms, " ", 4));
                            this.$store.commit('WARNING_BMS_CHANGE', this.warning_bms);
                            break;
                          case 0x0C: // 设备运行状态信息 4个字节 
                            // this.$f7.dialog.alert("设备运行状态信息");
                            this.prasDeviceRunningStatus(dataview, 7, length);
                            
                            // 将数据解析成二进制位
                            this.binary_running_status = [];
                            for(var i = 0; i < this.running_status.length; i++){
                              this.binary_running_status.push(this.parseVauleToBinary(this.running_status[i]));
                            }

                            // 将二进制报文转化为对象
                            this.getRunningStatus(this.binary_running_status);

                            console.log(JSON.stringify(this.binary_running_status, " ", 4));
                            console.log(JSON.stringify(this.running_status_mean, " ", 4));
                            break;
                          case 0x1F: // 系统故障状态显示 8个字节 
                            // this.$f7.dialog.alert("系统故障状态显示");
                            this.prasDeviceWarningStatus(dataview, 7, length);
                            // 将数据解析成二进制位
                            this.binary_warning_status = [];
                            for(var i = 0; i < this.warning_status.length; i++){
                              this.binary_warning_status.push(this.parseVauleToBinary(this.warning_status[i]));
                            }
                            this.$store.commit('WARNING_SYS_CHANGE', this.binary_warning_status);
                            break;
                          case 0x98: // 系统信息
                            this.prasSystemData(dataview, 7, length);
                            // this.$store.commit('PARAM_SYS_CHANGE', this.system_info);
                            console.log(JSON.stringify(this.system_info," ", 2));
                            break;
                          default:
                            // statements_def
                            break;
                        }
                        // 解析完成
                        // console.log(JSON.stringify(this.params_battery, 4, " "));
                      }
                  }
                  if(start_addr == 0x64 && target_addr == 0x14){ // APP->PCU 起始地址为0x64，目标地址0X14
                  }
              }
              else{
                // 丢弃数据包
              }
          }
      }, 

      // 解析电池数据段
      praseBatteryData : function(datalist, start, length){
        var offset = 0;
        for(var i = 0; i < this.params_battery.length; i++){

          if(this.params_battery[i].byte == 2){ // 2个字节的数据

            this.params_battery[i].paramValue = datalist.getUint16(start + offset, false);
            offset += 2;
          }else{ // 1个字节的数据

            this.params_battery[i].paramValue = datalist.getUint8(start + offset, false);
            offset += 1;
          }
        }
      },

      // 解析控制柜数据
      prasCtrlcabData : function(datalist, start, length){
        var offset = 0;
        for(var i = 0; i < this.params_ctrlcab.length; i++){

          if(this.params_ctrlcab[i].byte == 2){ // 2个字节的数据

            this.params_ctrlcab[i].paramValue = datalist.getUint16(start + offset, false);
            offset += 2;
          }else{ // 1个字节的数据

            this.params_ctrlcab[i].paramValue = datalist.getUint8(start + offset, false);
            offset += 1;
          }
        }
      },

      // 解析系统基础信息
      prasSystemData : function(datalist, start, length){
          var offset = 0;
          for(var i = 0; i < this.system_info.length; i++){

          if(this.system_info[i].byte == 2){ // 2个字节的数据

            this.system_info[i].paramValue = datalist.getUint16(start + offset, false).toString(16);
            offset += 2;
          }else{ // 1个字节的数据

            this.system_info[i].paramValue = datalist.getUint8(start + offset, false).toString(16);
            offset += 1;
          }
        }
      },
      // 解析电池BMS告警信息
      prasBMSWarningData : function(datalist, start, length){

        var offset = 0;
        for(var i = 0; i < this.warning_bms.length; i++){

          if(this.warning_bms[i].byte == 2){ // 2个字节的数据

            this.warning_bms[i].paramValue = datalist.getUint16(start + offset, false);
            offset += 2;
          }else{ // 1个字节的数据

            this.warning_bms[i].paramValue = datalist.getUint8(start + offset, false);
            offset += 1;
          }
        }

      },

      // 解析设备运行状态信息 两个字节
      prasDeviceRunningStatus : function(datalist, start, length){

        var offset = 0;
        for(var i = 0; i < this.running_status.length; i++){
          if(this.running_status[i].byte == 2){ // 2个字节的数据

            this.running_status[i].paramValue = datalist.getUint16(start + offset, false);
            offset += 2;
          }else{ // 1个字节的数据

            this.running_status[i].paramValue = datalist.getUint8(start + offset, false);
            offset += 1;
          }
        }
      },

      // 解析系统设备故障状态
      prasDeviceWarningStatus : function(datalist, start, length){

        var offset = 0;
        for(var i = 0; i < this.warning_status.length; i++){
          if(this.warning_status[i].byte == 2){ // 2个字节的数据

            this.warning_status[i].paramValue = datalist.getUint16(start + offset, false);
            offset += 2;
          }else{ // 1个字节的数据

            this.warning_status[i].paramValue = datalist.getUint8(start + offset, false);
            offset += 1;
          }
        }

      },
      // 解析数字成为二进制数组
      // 例如一个字节 16 =>  00010000
      // 例如两个字节 16 =>  00000000 00010000
      // running_status : [
      //   { paramName : "设备运行状态字1",     paramValue : 0, byte : 2, unit : "", isshow : 0},
      // ],
      parseVauleToBinary : function(object){
        var result = object.byte == 2 ? "0000000000000000" : "00000000";
        var value = Number(object.paramValue).toString(2);
        return  result.substring(0, result.length - value.length) + value;
      },

      getRunningStatus : function(binaryarray){
        var pos = 0;
        for(var i = 0; i < this.running_status_mean.length; i++){
          this.running_status_mean[i].paramValue = parseInt(String(binaryarray[0]).substring(pos, pos + this.running_status_mean[i].bit), 2);
          pos = pos + this.running_status_mean[i].bit;
        }

      },

      // 将开关机的指令下发给设备PCU
      sendSwitchFlagCommand : function(flag){
          var message = "";
          // 加工二进制的 bytearray 发送控制命令 COMMOND 0x64
          // PcuOnOff Wifi    change  Wifi SSID Wifi password
          //  1 byte  1 byte  2 byte  2byte
          var data = new Uint8Array(15);
            data[0] = 0xfe;
            data[1] = 0x55;
            data[2] = 0x64;
            data[3] = 0x14;
            data[4] = 0x64;
            data[5] = 0x00;
            data[6] = 0x06;
            if(flag){
              data[7] = 0x55;
              message = "开机指令已下发";
            }else{
              data[7] = 0xAA;
              message = "开机指令已下发";
            }
            data[8] = 0x01;
            data[9] = 0x01;
            data[10] = 0x01;
            data[11] = 0x01;
            data[12] = 0x01;
            data[13] = 0x12;
            data[14] = 0xAE;
          this.socketclient.write(data);
          this.$f7.dialog.alert(message,"提示");
      },

      sendDeviceRunningParameters : function(){
          // 获取 datalength
          let datalength = 0;
          // console.log(JSON.stringify(this.settingParamsters, " ", 4));
          for(var i = 0; i < this.settingParamsters.length; i++){
              datalength += this.settingParamsters[i].byte;
          }
          var data = new Uint8Array(datalength + 9 + 4); // 数据长度+9  +4是2两个位解析的字节

          data[0] = 0xfe;
          data[1] = 0x55;
          data[2] = 0x64;
          data[3] = 0x14;
          data[4] = 0x65;

          if(datalength + 4 <= 255){
              data[5] =  0x00;
              data[6] =  Number(datalength + 4);
            }else{
              data[5] =   Number(datalength + 4)>>8;
              data[6] =   Number(datalength + 4)&255;
            }
          // this.$f7.dialog.alert(datalength + 4);

          var offset = 0, bitBuffer = [];

          for(i = 0; i < this.settingParamsters.length; i++){   // 数据区

            if(this.settingParamsters[i].byte == 1){  // 一个字节的

                data[7 + offset] =  this.settingParamsters[i].paramValue;
                offset += this.settingParamsters[i].byte;

            }else if(this.settingParamsters[i].byte == 2){ // 两个字节的

                if(this.settingParamsters[i].paramValue <= 255){
                  data[7 + offset] =  0x00;
                  data[8 + offset] =  this.settingParamsters[i].paramValue;
                }else{
                  data[7 + offset] =  this.settingParamsters[i].paramValue>>8;
                  data[8 + offset] =  this.settingParamsters[i].paramValue&255;
                }
                offset += this.settingParamsters[i].byte;
            }else{ // 按位
                bitBuffer.push(this.settingParamsters[i].paramValue);
                if(bitBuffer.length == 8){
                  data[7 + offset] = 0x00; 
                  data[8 + offset] = parseInt(bitBuffer.join(""), 2); 
                  offset += 2;
                  bitBuffer = [];
                }
            }
          }

          data[7 + offset] =  0x12;  // 校验位
          data[8 + offset] =  0xAE;  // 结束位

          // console.log(data);
          this.socketclient.write(data);
          this.$f7.dialog.alert("参数设置已下发","提示");
      }
    },

    created : function(){
      // 连接socket
      console.log("create");
      setTimeout(this.initSocket(), 5000);
    }

}
</script>


<style lang="scss">
  @import "./assets/sass/publicSize";
  .page-content::-webkit-scrollbar {
    display: none;
    }
  .ios .tabbar, .ios .app-main.tabbar-labels{
    background-color: $base-mainbackground-color;
  }
  .ios .app-main.navbar{
    background-color: $base-mainbackground-color;
  }
  .md .tabbar-labels a.link {
    padding-top: 0px;
    padding-bottom: 12px;
  }
  .md .toolbar a.link i + span{
    margin-left: 0;
  }
  .filter{
      right: 3%;
      top: 9%;
  }
  .help{
      right: 3%;
      top: calc(9% + 50px);
  }
  .overlink{
      display: block;
      width: 40px;
      height: 40px;
      border: 1px solid $base-mainborder-color;
      background-color: $secondlybackground-color !important;
    }
  .overlink span{
      font-size: 12px;
      display: block;
      line-height: 15px;
      text-align: center;
      margin-left: 0 !important;
  }
  .filter span{
    color: $base-active-color;
  }
  .filter .icon.iconfont{
    color: $base-active-color;
  }
  .overlink .icon.iconfont{
    vertical-align: top;
  }
  .ios .tabbar i.icon, .ios .tabbar-labels i.icon {
    font-size: 34px;
  }
  .ios .tabbar-labels i.icon.icon-gaojing {
    font-size: 22px;
  }
  .ios .toolbar a.link {
      line-height: 22px;
      height: 44px;
  }
  .ios .tabbar-labels a {
    color : $base-normal-color;
  }
  .md .navbar {
    height: 56px;
    background: #ffffff;
    color: #000;
    font-size: 20px;
    font-weight: 100;
  }
  .md .icon-back{
   background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'24'%20height%3D'24'%20viewBox%3D'0%200%2024%2024'%3E%3Cpath%20d%3D'M20%2011H7.83l5.59-5.59L12%204l-8%208%208%208%201.41-1.41L7.83%2013H20v-2z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E");
  }
  .md .button.button-outline {
    border: 1px solid $base-active-color;
  }
  .md .button {
    color: $base-active-color;
  }
  .md .navbar .title {
    margin: 0 !important;
    font-weight: 100;
  }
</style>
<style lang="scss" scoped>
  @import "./assets/sass/publicSize";
   .containter{
        width: 100%;
        height: 100%;
    }
    .amap-demo {
      height: 300px;
    }
    .toolicon{
      font-size: 14px;
    }
    .toolicon.active-state, 
    .toolicon.active{
      color: $base-active-color;
    }
    // 只有该界面中的视图高度是计算的
    .views, .view {
        height: calc(100% - 53px) !important;
    }
</style>
