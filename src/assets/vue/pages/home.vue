<template>
    <f7-page>
       <f7-navbar>
            <f7-nav-left>
                <f7-link class="panel-open" open-panel="left" icon="fa fa-bars"></f7-link>
            </f7-nav-left>
            <div class="title">首页</div>
        </f7-navbar>
          <button class="button button-outline cusbutton">工作状态     NA</button>
        <f7-block class="relt systopology">
              <!-- 连线 -->
              <svg id="图层_1" data-name="图层 1" class="svg svg1 absCV" :class="{path2 : isdeviceactive[0] == 1}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.75 144.83"><defs></defs><title>line</title><polyline class="cls-1" points="0.5 0 0.5 144.33 150.75 144.33" fill="none" stroke="#3b55e6" stroke-miterlimit="10" stroke-width="4"/><path class="cls-1" d="M-172.25,7" transform="translate(214.83 114.33)"/></svg>

              <svg id="图层_1" data-name="图层 1" class="svg svg2 absCV" :class="{path2 : isdeviceactive[1] == 1}"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.75 144.83"><defs></defs><title>line3</title><polyline points="150.25 0 150.25 144.33 0 144.33" fill="none" stroke="#3b55e6" stroke-miterlimit="10" stroke-width="4"/></svg>

              <svg id="图层_1" data-name="图层 1" class="svg svg3 absCV" :class="{path2 : isdeviceactive[3] == 1}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.75 144.83"><defs></defs><title>line</title><polyline class="cls-1" points="0.5 0 0.5 144.33 150.75 144.33" fill="none" stroke="#3b55e6" stroke-miterlimit="10" stroke-width="4"/><path class="cls-1" d="M-172.25,7" transform="translate(214.83 114.33)"/></svg>

              <svg id="图层_1" data-name="图层 1" class="svg svg4 absCV" :class="{path2 : isdeviceactive[5] == 1}"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.75 144.83"><defs></defs><title>line3</title><polyline points="150.25 0 150.25 144.33 0 144.33" fill="none" stroke="#3b55e6" stroke-miterlimit="10" stroke-width="4"/></svg>

              <svg id="图层_1" data-name="图层 1" class="path svg svg5 absCV" :class="{path4 : isdeviceactive[4] == 1}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 50"><defs></defs><title>line142</title><line class="cls-1" x1="0.5" x2="0.5" y2="50" fill="none" stroke="#3b55e6" stroke-miterlimit="10" stroke-width="10"/></svg>
              
              <!-- 设备图标 -->
              <div class="iconitem abs absCV iconitem1">
              <a href="/photovoltaic/">
                <img v-if="isdeviceactive[0] == 1" src="../../images/solar@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
                <img v-if="isdeviceactive[0] == 0" src="../../images/solar_gray@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
              </a>
              </div>
              <div class="iconitem abs absCV iconitem2">
              <a href="/output/">
                <img v-if="isdeviceactive[1] == 1" src="../../images/elect@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
                <img v-if="isdeviceactive[1] == 0" src="../../images/elect_gray@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
              </a>
              </div>
              <div class="iconitem abs absCV iconitem3">
              <a href="/params/">
                <img v-if="isdeviceactive[2] == 1" src="../../images/backuo@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
                <img v-if="isdeviceactive[2] == 0" src="../../images/backuo_gray@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
              </a>  
              </div>
              <div class="iconitem abs absCV iconitem4">
              <a href="/battery/">
                <img v-if="isdeviceactive[3] == 1" src="../../images/battery@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
                <img v-if="isdeviceactive[3] == 0" src="../../images/battery_gray@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
              </a>
              </div>
              <div class="iconitem abs absCV iconitem5">
              <a href="/load/">
                <img v-if="isdeviceactive[4] == 1" src="../../images/fuzai@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
                <img v-if="isdeviceactive[4] == 0" src="../../images/fuzai_gray@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
              </a>
              </div>
              <div class="iconitem abs absCV iconitem6">
              <a href="/load/">
                <img v-if="isdeviceactive[5] == 1" src="../../images/ongrid@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
                <img v-if="isdeviceactive[5] == 0" src="../../images/ongrid_gray@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
              </a>
              </div>
              
              <!--  参数信息显示 -->
              <span class="statustext statustext1 abs absCV">NA</span>
              <span class="statustext statustext2 abs absCV">NA</span>
              <span class="statustext statustext3 abs absCV">NA</span>
              <span class="statustext statustext4 abs absCV">NA</span>
              <span class="statustext statustext5 abs absCV">NA</span>

        </f7-block>
    </f7-page>
</template>
<script>
export default {
    data (){
        return{
            message : "",
            // wssstring : "echo.websocket.org", 
            wssstring : "10.211.4.137:9001", 
            // wssstring : "10.211.4.132:31337", 
            app : null,
            params : [
            ],
            // 储能电池实时数据
            params_battery : [
              { paramName : "电池电压",              paramValue : 0, byte : 2, unit : "V"  },
              { paramName : "电池电流",              paramValue : 0, byte : 2, unit : "A"  },
              { paramName : "温度",                  paramValue : 0, byte : 2, unit : "℃" },
              { paramName : "SOC",                   paramValue : 0, byte : 2, unit : "%"  },
              { paramName : "SOH",                   paramValue : 0, byte : 2, unit : "%"  },
              { paramName : "充放电状态",            paramValue : 0, byte : 1, unit : ""   }
            ],
            // 控制柜实时数据
            params_ctrlcab : [
              { paramName : "PV1电压",              paramValue : 0, byte : 2, unit : "V"  },
              { paramName : "PV1电流",              paramValue : 0, byte : 2, unit : "A"  },
              { paramName : "PVI功率",              paramValue : 0, byte : 2, unit : "W"  },
              { paramName : "PV2电压",              paramValue : 0, byte : 2, unit : "V"  },
              { paramName : "PV2电流",              paramValue : 0, byte : 2, unit : "A"  },
              { paramName : "PV2功率",              paramValue : 0, byte : 2, unit : "W"  },
              { paramName : "逆变A相电压",          paramValue : 0, byte : 2, unit : "V"  },
              { paramName : "逆变A相电流",          paramValue : 0, byte : 2, unit : "A"  },
              { paramName : "电网A相电压",          paramValue : 0, byte : 2, unit : "V"  },
              { paramName : "电网AB线电压",         paramValue : 0, byte : 2, unit : "V"  },
              { paramName : "电网A相电流",          paramValue : 0, byte : 2, unit : "A"  },
              { paramName : "逆变B相电压",          paramValue : 0, byte : 2, unit : "V"  },
              { paramName : "逆变B相电流",          paramValue : 0, byte : 2, unit : "A"  },
              { paramName : "电网B相电压",          paramValue : 0, byte : 2, unit : "V"  },
              { paramName : "电网BC线电压",         paramValue : 0, byte : 2, unit : "V"  },
              { paramName : "电网B相电流",          paramValue : 0, byte : 2, unit : "A"  },
              { paramName : "逆变C相电压",          paramValue : 0, byte : 2, unit : "V"  },
              { paramName : "逆变C相电流",          paramValue : 0, byte : 2, unit : "A"  },
              { paramName : "电网C相电压",          paramValue : 0, byte : 2, unit : "V"  },
              { paramName : "电网CA线电压",         paramValue : 0, byte : 2, unit : "V"  },
              { paramName : "电网C相电流",          paramValue : 0, byte : 2, unit : "A"  },
              { paramName : "电网频率",             paramValue : 0, byte : 2, unit : "Hz" },
              { paramName : "功率因数",             paramValue : 0, byte : 2, unit :  ""  },
              { paramName : "系统有功功率",         paramValue : 0, byte : 2, unit : "VA" },
              { paramName : "系统无功功率",         paramValue : 0, byte : 2, unit : "W"  },
              { paramName : "系统视在功率",         paramValue : 0, byte : 2, unit : "Var"},
              { paramName : "电池电流",             paramValue : 0, byte : 2, unit : "A"  },
              { paramName : "电池电压",             paramValue : 0, byte : 2, unit : "V"  },
              { paramName : "直流正母线电压",       paramValue : 0, byte : 2, unit : "V"  },
              { paramName : "直流负母线电压",       paramValue : 0, byte : 2, unit : "V"  },
              { paramName : "直流双边母线电压",     paramValue : 0, byte : 2, unit : "V"  },
              { paramName : "直流功率",             paramValue : 0, byte : 2, unit : "W"  },
              { paramName : "环境温度",             paramValue : 0, byte : 2, unit : "℃" },
              { paramName : "铅酸电池剩余容量",     paramValue : 0, byte : 2, unit : "%"  },
              { paramName : "铅酸电池剩余备电时间", paramValue : 0, byte : 2, unit : "Min"},
              { paramName : "设备类型编码",         paramValue : 0, byte : 2, unit : ""   },
              { paramName : "软件版本号高位",       paramValue : 0, byte : 2, unit : ""   },
              { paramName : "软件版本号低位",       paramValue : 0, byte : 2, unit : ""   },
              { paramName : "并机地址",             paramValue : 0, byte : 2, unit : ""   },
              { paramName : "工作效率",             paramValue : 0, byte : 2, unit : ""   },
              { paramName : "充电次数",             paramValue : 0, byte : 2, unit : ""   },
              { paramName : "放电次数",             paramValue : 0, byte : 2, unit : ""   },
              { paramName : "模块A1 温度",          paramValue : 0, byte : 2, unit : "℃" },
              { paramName : "模块B1 温度",          paramValue : 0, byte : 2, unit : "℃" },
              { paramName : "模块C1 温度",          paramValue : 0, byte : 2, unit : "℃" }
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


            // 设备故障状态字
            warning_status : [
              {paramName : "故障状态字1",     paramValue : 0, byte : 2, unit : "", isshow : 0},
              {paramName : "故障状态字2",     paramValue : 0, byte : 2, unit : "", isshow : 0},
              {paramName : "故障状态字3",     paramValue : 0, byte : 2, unit : "", isshow : 0},
              {paramName : "故障状态字4",     paramValue : 0, byte : 2, unit : "", isshow : 0},
            ],

            // 故障状态字儿进制编码
            binary_warning_status : [],

            active : "",


            // isdeviceactive 设备是否在使用中
            isdeviceactive : [1,1,1,1,1,0],
        }
    },
    computed : {
    },
    methods : {
        initSocket : function(){
          this.connWebsocket("ws://" + this.wssstring);
        },

        // 把数据提交到状态管理中
        pushDataIntoStore : function(){
          this.$store.commit('PARAM_CHANGE', this.params);
        },
        connWebsocket : function(socketurl){
          var _this = this;

          var count = 0;

          console.log(socketurl);

          var  ws = new WebSocket(socketurl);
          ws.onopen = function(evt) {
            ws.binaryType = 'arraybuffer';
            ws.send("Hello WebSockets!");
          };

          ws.onmessage = function(evt) {
            console.log( "Received Message: " + evt.data);
            // var dv = new DataView(evt.data);
            // 造假数据
            var buffer = new ArrayBuffer(98);
            var uint8View = new DataView(buffer);

            // 手动设置dataview
            //byteOffset   表示从内存的哪个字节开始
            //value           该对应字节将被设置的值
            //littleEndian  字节序，true为小端字节序，false或者不填为大端字节序
            // uint8View.setUint8(0, 0xfe);  // sum = 19
            // uint8View.setUint8(1, 0x55); 
            // uint8View.setUint8(2, 0x14); 
            // uint8View.setUint8(3, 0x64); 
            // uint8View.setUint8(4, 0x0a); 
            // uint8View.setUint8(5, 0x0b); 
            // uint8View.setUint8(6, 0x01); 
            // uint8View.setUint8(7, 0xF4); 
            // uint8View.setUint8(8, 0x00); 
            // uint8View.setUint8(9, 0x64); 
            // uint8View.setUint8(10, 0x00); 
            // uint8View.setUint8(11, 0x32); 
            // uint8View.setUint8(12, 0x00); 
            // uint8View.setUint8(13, 0x50); 
            // uint8View.setUint8(14, 0x00); 
            // uint8View.setUint8(15, 0x64); 
            // uint8View.setUint8(16, 0x11); 
            // uint8View.setUint8(17, 0x12); 
            // uint8View.setUint8(18, 0xAE);
          
            // 控制柜信息
            // uint8View.setUint8(0, 0xfe); // sum = 98
            // uint8View.setUint8(1, 0x55); 
            // uint8View.setUint8(2, 0x14); 
            // uint8View.setUint8(3, 0x64); 
            // uint8View.setUint8(4, 0x0b); 
            // uint8View.setUint8(5, 0x5a); // 90 byte
            // uint8View.setUint8(6, 0x01); 
            // uint8View.setUint8(7, 0xF4); 
            // uint8View.setUint8(8, 0x00); 
            // uint8View.setUint8(9, 0x64); 
            // uint8View.setUint8(10, 0x00); 
            // uint8View.setUint8(11, 0x32); 
            // uint8View.setUint8(12, 0x00); 
            // uint8View.setUint8(13, 0x50); 
            // uint8View.setUint8(14, 0x00); 
            // uint8View.setUint8(15, 0x64);
            // uint8View.setUint8(16, 0x01); 
            // uint8View.setUint8(17, 0xF4); 
            // uint8View.setUint8(18, 0x00); 
            // uint8View.setUint8(19, 0x64); 
            // uint8View.setUint8(20, 0x00); 
            // uint8View.setUint8(21, 0x32); 
            // uint8View.setUint8(22, 0x00); 
            // uint8View.setUint8(23, 0x50); 
            // uint8View.setUint8(24, 0x00); 
            // uint8View.setUint8(25, 0x64); 
            // uint8View.setUint8(26, 0x01); 
            // uint8View.setUint8(27, 0xF4); 
            // uint8View.setUint8(28, 0x00); 
            // uint8View.setUint8(29, 0x64); 
            // uint8View.setUint8(30, 0x00); 
            // uint8View.setUint8(31, 0x32); 
            // uint8View.setUint8(32, 0x00); 
            // uint8View.setUint8(33, 0x50); 
            // uint8View.setUint8(34, 0x00); 
            // uint8View.setUint8(35, 0x64); 
            // uint8View.setUint8(36, 0x01); 
            // uint8View.setUint8(37, 0xF4); 
            // uint8View.setUint8(38, 0x00); 
            // uint8View.setUint8(39, 0x64); 
            // uint8View.setUint8(40, 0x00); 
            // uint8View.setUint8(41, 0x32); 
            // uint8View.setUint8(42, 0x00); 
            // uint8View.setUint8(43, 0x50); 
            // uint8View.setUint8(44, 0x00); 
            // uint8View.setUint8(45, 0x64); 
            // uint8View.setUint8(46, 0x01); 
            // uint8View.setUint8(47, 0xF4); 
            // uint8View.setUint8(48, 0x00); 
            // uint8View.setUint8(49, 0x64); 
            // uint8View.setUint8(50, 0x00); 
            // uint8View.setUint8(51, 0x32); 
            // uint8View.setUint8(52, 0x00); 
            // uint8View.setUint8(53, 0x50); 
            // uint8View.setUint8(54, 0x00); 
            // uint8View.setUint8(55, 0x64); 
            // uint8View.setUint8(56, 0x01); 
            // uint8View.setUint8(57, 0xF4); 
            // uint8View.setUint8(58, 0x00); 
            // uint8View.setUint8(59, 0x64); 
            // uint8View.setUint8(60, 0x00); 
            // uint8View.setUint8(61, 0x32); 
            // uint8View.setUint8(62, 0x00); 
            // uint8View.setUint8(63, 0x50); 
            // uint8View.setUint8(64, 0x00); 
            // uint8View.setUint8(65, 0x64); 
            // uint8View.setUint8(66, 0x01); 
            // uint8View.setUint8(67, 0xF4); 
            // uint8View.setUint8(68, 0x00); 
            // uint8View.setUint8(69, 0x64); 
            // uint8View.setUint8(70, 0x00); 
            // uint8View.setUint8(71, 0x32); 
            // uint8View.setUint8(72, 0x00); 
            // uint8View.setUint8(73, 0x50); 
            // uint8View.setUint8(74, 0x00); 
            // uint8View.setUint8(75, 0x64); 
            // uint8View.setUint8(76, 0x01); 
            // uint8View.setUint8(77, 0xF4); 
            // uint8View.setUint8(78, 0x00); 
            // uint8View.setUint8(79, 0x64); 
            // uint8View.setUint8(80, 0x00); 
            // uint8View.setUint8(81, 0x32); 
            // uint8View.setUint8(82, 0x00); 
            // uint8View.setUint8(83, 0x50); 
            // uint8View.setUint8(84, 0x00); 
            // uint8View.setUint8(85, 0x64); 
            // uint8View.setUint8(86, 0x01); 
            // uint8View.setUint8(87, 0xF4); 
            // uint8View.setUint8(88, 0x00); 
            // uint8View.setUint8(89, 0x64); 
            // uint8View.setUint8(90, 0x00); 
            // uint8View.setUint8(91, 0x32); 
            // uint8View.setUint8(92, 0x00); 
            // uint8View.setUint8(93, 0x50); 
            // uint8View.setUint8(94, 0x00); 
            // uint8View.setUint8(95, 0x64); 
            // uint8View.setUint8(96, 0x12); 
            // uint8View.setUint8(97, 0xAE);

            // BMS告警信息
            // uint8View.setUint8(0, 0xfe);
            // uint8View.setUint8(1, 0x55); 
            // uint8View.setUint8(2, 0x14); 
            // uint8View.setUint8(3, 0x64); 
            // uint8View.setUint8(4, 0x1E);  
            // uint8View.setUint8(5, 0x06); 
            // uint8View.setUint8(6, 0x01); 
            // uint8View.setUint8(7, 0x01); 
            // uint8View.setUint8(8, 0x01); 
            // uint8View.setUint8(9, 0x01); 
            // uint8View.setUint8(10, 0x01); 
            // uint8View.setUint8(11, 0x01); 
            // uint8View.setUint8(12, 0x12); 
            // uint8View.setUint8(13, 0xAE);
             
            // 系统故障状态显示
            // uint8View.setUint8(0, 0xfe);
            // uint8View.setUint8(1, 0x55); 
            // uint8View.setUint8(2, 0x14); 
            // uint8View.setUint8(3, 0x64); 
            // uint8View.setUint8(4, 0x1F); // COMMOND  
            // uint8View.setUint8(5, 0x08);  
            // uint8View.setUint8(6, 0x01); 
            // uint8View.setUint8(7, 0x00); 
            // uint8View.setUint8(8, 0x01); 
            // uint8View.setUint8(9, 0x00); 
            // uint8View.setUint8(10, 0x00); 
            // uint8View.setUint8(11, 0x66); 
            // uint8View.setUint8(12, 0x00); 
            // uint8View.setUint8(13, 0x77); 
            // uint8View.setUint8(14, 0x12); 
            // uint8View.setUint8(15, 0xAE);

            _this.praseData(uint8View);

          };
          ws.onclose = function(evt) {
            console.log("Connection closed.");
          };  
        },

        // 解析二进制 batearray 数据
        praseData : function(dataview){

            if(dataview.byteLength > 0){
                var start       =  dataview.getUint16(0,false);  // 起始帧   2字节
                var start_addr  =  dataview.getUint8(2,false);   // 起始地址 1字节
                var target_addr =  dataview.getUint8(3,false);   // 目标地址 1字节
                var command     =  dataview.getUint8(4,false);   // 命令字   1字节
                if(Number(start) == 0xFE55){   //    包起始帧 0xFE 0x55
                    
                    if(start_addr == 0x14 && target_addr == 0x64){ // PCU->APP 起始地址为0X14，目标地址0x64

                        var length = dataview.getInt8(5,false);

                        if(dataview.getUint8(6 + length + 1, false) == 0xAE){ // 数据包完整 有结束

                          switch (command) {

                            case 0x0A: // 储能电池信息 
                              
                              this.praseBatteryData(dataview, 6, length); // 数据从6开始 截止是6+length
                              this.$store.commit('PARAM_BATTERY_CHANGE', this.params_battery);
                              break;

                            case 0x0B: // 控制柜信息
                              
                              this.prasCtrlcabData(dataview, 6, length);
                              this.$store.commit('PARAM_CTRLCAB_CHANGE', this.params_ctrlcab);
                              break;
                            case 0x1E: // BMS告警信息 warning_bms

                              this.prasBMSWarningData(dataview, 6, length);

                              // console.log(JSON.stringify(this.warning_bms, " ", 4));
                              this.$store.commit('WARNING_BMS_CHANGE', this.warning_bms);
                              break;
                            case 0x0C: // 设备运行状态信息 4个字节 
                              this.prasDeviceRunningStatus(dataview, 6, length);

                              // 将数据解析成二进制位
                              this.binary_running_status = [];
                              for(var i = 0; i < this.running_status.length; i++){
                                this.binary_running_status.push(this.parseVauleToBinary(this.running_status[i]));
                              }
                              // console.log(JSON.stringify(this.binary_running_status, " ", 4));
                              break;

                            case 0x1F: // 系统故障状态显示 8个字节 
                              
                              this.prasDeviceWarningStatus(dataview, 6, length);
                              // 将数据解析成二进制位
                              this.binary_warning_status = [];
                              for(var i = 0; i < this.warning_status.length; i++){
                                this.binary_warning_status.push(this.parseVauleToBinary(this.warning_status[i]));
                              }
                              this.$store.commit('WARNING_SYS_CHANGE', this.binary_warning_status);
                              // console.log(JSON.stringify(this.binary_warning_status, " ", 4));
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
      // 
      parseVauleToBinary : function(object){
        var result = object.byte == 2 ? "0000000000000000" : "00000000";
        var value = Number(object.paramValue).toString(2);
        return  result.substring(0, result.length - value.length) + value;
      },

    },
    mounted : function(){
      // 连接websocket
      this.initSocket();
    }
};
</script>


<style  lang="scss" scoped>
  @import "../../sass/publicSize";
  .cusbutton{
    width: 90%;
    margin: 30px auto 10px auto; 
  }
  .iconitem1{
      margin: -29% 0 0 -28%;
  }
  .iconitem2{
      margin: -29% 0 0 30%;
  }
  .iconitem3{
      margin: 0%;
  }
  .iconitem4{
      margin: 26% 0 0 -28%;
  }
  .iconitem5{
      margin: 26% 0 0 0%;
  }
  .iconitem6{
      margin: 26% 0 0 30%;
  }


  .systopology{
    height: calc(100% - 34%)
  }
  .iconitem{
    width: 15%;
    height: 15%;
    // border: 3px solid #a2a2a2;
    // background-color: #575757;
    border-radius: 50%;
  }
  .iconitem.active{
    background-color: $base-active-color;
  }
  .imageicon{
    margin: 0;
  }
  .svg{
    position: absolute;
  }
  .svg1{
    transform: translate(-50%,-50%) scale(0.3);
    margin: -19% 0 0 -13%;
  }
  .svg2{
    transform: translate(-50%,-50%) scale(0.3);
    margin: -15% 0 0 19%;
  }
  .svg3{
    transform: translate(-50%,-50%) scale(0.3) rotateX(180deg);
    margin: 18% 0px 0px -13%;
  }
  .svg4{
    margin: 13% 0 0 19%;
    transform: translate(-50%,-50%) scale(0.3) rotateX(180deg);
  }
  .svg5{
      width: 7px;
      margin-top: 17%;
      transform: translate(-50%,-50%) scale(0.3);
  }

  .statustext{
    font-size: 14px;
    color: $base-active-color;

  }
  .statustext1{
    margin: -8% 0 0 -15%;
  }
  .statustext2{
    margin: -8% 0 0 15%;
  }
  .statustext3{
    margin: 8% 0 0 -15%;
  }
  .statustext4{
    margin: 15% 0 0 4%;
  }
  .statustext5{
    margin: 8% 0 0 15%;
  }

  @keyframes dash {
      to {
          stroke-dashoffset: 50;
      }
  }

  .path {
      stroke-dasharray: 5;
      animation: dash 5s linear infinite;
  }
  @keyframes dash2 {
      to {
          stroke-dashoffset: -50;
      }
  }

  .path2 {
      stroke-dasharray: 5;
      animation: dash2 5s linear infinite;
  }

@keyframes dash3 {
      to {
          stroke-dashoffset: 50;
      }
  }

  .path3 {
      stroke-dasharray: 2.5;
      animation: dash3 10s linear infinite;
  }
  @keyframes dash4 {
      to {
          stroke-dashoffset: -50;
      }
  }
  
  .path4 {
      stroke-dasharray: 2.5;
      animation: dash4 10s linear infinite;
  }
</style>

<style>
  .list li:nth-child(2n-1){
    background-color: #fbfbfb;
  }
  .list li:nth-child(2n){
    background-color: #fff;
  }
</style>




