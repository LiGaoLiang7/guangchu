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
                <img v-if="isdeviceactive[0] == 1" src="../../images/solar@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
                <img v-if="isdeviceactive[0] == 0" src="../../images/solar_gray@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
              </div>
              <div class="iconitem abs absCV iconitem2">
                <img v-if="isdeviceactive[1] == 1" src="../../images/elect@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
                <img v-if="isdeviceactive[1] == 0" src="../../images/elect_gray@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
              </div>
              <div class="iconitem abs absCV iconitem3">
                <img v-if="isdeviceactive[2] == 1" src="../../images/backuo@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
                <img v-if="isdeviceactive[2] == 0" src="../../images/backuo_gray@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
              </div>
              <div class="iconitem abs absCV iconitem4">
                <img v-if="isdeviceactive[3] == 1" src="../../images/battery@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
                <img v-if="isdeviceactive[3] == 0" src="../../images/battery_gray@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
              </div>
              <div class="iconitem abs absCV iconitem5">
                <img v-if="isdeviceactive[4] == 1" src="../../images/fuzai@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
                <img v-if="isdeviceactive[4] == 0" src="../../images/fuzai_gray@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
              </div>
              <div class="iconitem abs absCV iconitem6">
                <img v-if="isdeviceactive[5] == 1" src="../../images/ongrid@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
                <img v-if="isdeviceactive[5] == 0" src="../../images/ongrid_gray@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
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
              {paramName : "电池电压",              paramValue : 0, byte : 2, unit : "V"  },
              {paramName : "电池电流",              paramValue : 0, byte : 2, unit : "A"  },
              {paramName : "温度",                  paramValue : 0, byte : 2, unit : "℃" },
              {paramName : "SOC",                   paramValue : 0, byte : 2, unit : "%"  },
              {paramName : "SOH",                   paramValue : 0, byte : 2, unit : "%"  },
              {paramName : "充放电状态",            paramValue : 0, byte : 1, unit : ""   }
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
            var buffer = new ArrayBuffer(19);
            var uint8View = new DataView(buffer);
            // 手动设置dataview
            //byteOffset   表示从内存的哪个字节开始
            //value           该对应字节将被设置的值
            //littleEndian  字节序，true为小端字节序，false或者不填为大端字节序
            uint8View.setUint8(0, 0xfe); 
            uint8View.setUint8(1, 0x55); 
            uint8View.setUint8(2, 0x14); 
            uint8View.setUint8(3, 0x64); 
            uint8View.setUint8(4, 0x0a); 
            uint8View.setUint8(5, 0x0b); 
            uint8View.setUint8(6, 0x01); 
            uint8View.setUint8(7, 0xF4); 
            uint8View.setUint8(8, 0x00); 
            uint8View.setUint8(9, 0x64); 
            uint8View.setUint8(10, 0x00); 
            uint8View.setUint8(11, 0x32); 
            uint8View.setUint8(12, 0x00); 
            uint8View.setUint8(13, 0x50); 
            uint8View.setUint8(14, 0x00); 
            uint8View.setUint8(15, 0x64); 
            uint8View.setUint8(16, 0x11); 
            uint8View.setUint8(17, 0x12); 
            uint8View.setUint8(18, 0xAE);
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

                              // this.$store.commit('PARAM_BATTERY_CHANGE', this.params_battery);
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

      }
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




