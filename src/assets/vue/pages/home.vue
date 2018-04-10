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
              <svg id="图层_1" data-name="图层 1" class="svg svg1 absCV" :class="{path2 : isdeviceactive[0] == 1}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.75 144.83"><defs></defs><title>line</title><polyline class="cls-1" points="0.5 0 0.5 144.33 150.75 144.33" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="4"/><path class="cls-1" d="M-172.25,7" transform="translate(214.83 114.33)"/></svg>
              <svg id="图层_1" data-name="图层 1" class="svg svg2 absCV" :class="{path2 : isdeviceactive[1] == 1}"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.75 144.83"><defs></defs><title>line3</title><polyline points="150.25 0 150.25 144.33 0 144.33" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="4"/></svg>
              <svg id="图层_1" data-name="图层 1" class="svg svg3 absCV" :class="{path2 : isdeviceactive[2] == 1}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.75 144.83"><defs></defs><title>line</title><polyline class="cls-1" points="0.5 0 0.5 144.33 150.75 144.33" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="4"/><path class="cls-1" d="M-172.25,7" transform="translate(214.83 114.33)"/></svg>
              <svg id="图层_1" data-name="图层 1" class="svg svg4 absCV" :class="{path2 : isdeviceactive[3] == 1}"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.75 144.83"><defs></defs><title>line3</title><polyline points="150.25 0 150.25 144.33 0 144.33" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="4"/></svg>
              <svg id="图层_1" data-name="图层 1" class="path svg svg5 absCV" :class="{path2 : isdeviceactive[4] == 1}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 140"><defs></defs><title>line142</title><line class="cls-1" x1="0.5" x2="0.5" y2="140" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="5"/></svg>
              

              <!-- 设备图标 -->
              <div class="iconitem abs absCV iconitem1" :class="{active : isdeviceactive[0] == 1}">
                <img src="../../images/icon_solar.png" class="imageicon pure-img" height="40" width="40" alt="">
              </div>
              <div class="iconitem abs absCV iconitem2" :class="{active : isdeviceactive[1] == 1}">
                <img src="../../images/icon_solar.png" class="imageicon pure-img" height="40" width="40" alt="">
              </div>
              <div class="iconitem abs absCV iconitem3" :class="{active : isdeviceactive[2] == 1}">
                <img src="../../images/icon_solar.png" class="imageicon pure-img" height="40" width="40" alt="">
              </div>
              <div class="iconitem abs absCV iconitem4" :class="{active : isdeviceactive[3] == 1}">
                <img src="../../images/icon_solar.png" class="imageicon pure-img" height="40" width="40" alt="">
              </div>
              <div class="iconitem abs absCV iconitem5" :class="{active : isdeviceactive[4] == 1}">
                <img src="../../images/icon_solar.png" class="imageicon pure-img" height="40" width="40" alt="">
              </div>
              <div class="iconitem abs absCV iconitem6" :class="{active : isdeviceactive[5] == 1}">
                <img src="../../images/icon_solar.png" class="imageicon pure-img" height="40" width="40" alt="">
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
            params : [],
            active : "",
            // isdeviceactive 设备是否在使用中
            isdeviceactive : [1,1,1,1,1,1,1],
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
            // 
            // 造假数据
            var buffer = new ArrayBuffer(19);
            var uint8View = new DataView(buffer);
            // 手动设置dataview
            //byteOffset   表示从内存的哪个字节开始
            //value           该对应字节将被设置的值
            //littleEndian  字节序，true为小端字节序，false或者不填为大端字节序
            uint8View.setUint8(0,0xfe);
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
                var start       =  dataview.getInt16(0,false);  // 起始帧   2字节
                var start_addr  =  dataview.getUint8(2,false);   // 起始地址 1字节
                var target_addr =  dataview.getUint8(3,false);   // 目标地址 1字节
                var command     =  dataview.getUint8(4,false);   // 命令字   1字节
                if(Number(start) == -427){   //    包起始帧 0xFE 0x55
                    
                    if(start_addr == 0x14 && target_addr == 0x64){ // PCU->APP 地址为0X14，目标地址0x64
                        // console.log("PCU 发给 APP");
                        var length = dataview.getInt8(5,false);

                        if(dataview.getUint8(6 + length + 1, false) == 0xAE){ // 数据包完整 有结束

                          switch (command) {
                            case 0x0A:
                              // 电池信息
                              // 
                              this.praseBatteryData(dataview, 6, length); // 数据从6开始， 截止是6+length
                              break;
                            default:
                              // statements_def
                              break;
                          }
                        }
                    }
                    if(start_addr == 0x64 && target_addr == 0x14){ // APP->PCU 地址为0X14，目标地址0x64
                    }
                }
                else{
                  // 丢弃数据包
                }
            }
        }, 

      // 解析电池数据段
      praseBatteryData : function(datalist, start, length){
        while(datalist.getUint8(start, false) !== 0xAE){

          console.log(datalist.getUint8(start, false));
          start++;
        
        }
      }
    
    },
    mounted : function(){
      // 连接websocket
      this.initSocket();
    }
};
</script>


<style scoped>

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
      margin: 38% 0 0 0%;
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
    border: 3px solid #a2a2a2;
    background-color: #575757;
    border-radius: 50%;
  }
  .iconitem.active{
    background-color: #0ff;
  }
  .imageicon{
    margin: 5px 7px;
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
      width: 4px;
      margin-top: 17%;
      transform: translate(-50%,-50%) scale(0.3);
  }

  .statustext{
    font-size: 14px;
    color: #0ff;

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

</style>




