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

              <svg id="图层_1" data-name="图层 1" class="path2 svg svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.75 144.83"><defs></defs><title>line</title><polyline class="cls-1" points="0.5 0 0.5 144.33 150.75 144.33" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="4"/><path class="cls-1" d="M-172.25,7" transform="translate(214.83 114.33)"/></svg>
              <svg id="图层_1" data-name="图层 1" class="path2 svg svg2"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.75 144.83"><defs></defs><title>line3</title><polyline points="150.25 0 150.25 144.33 0 144.33" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="4"/></svg>



              
              <svg id="图层_1" data-name="图层 1" class="path2 svg svg3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.75 144.83"><defs></defs><title>line</title><polyline class="cls-1" points="0.5 0 0.5 144.33 150.75 144.33" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="4"/><path class="cls-1" d="M-172.25,7" transform="translate(214.83 114.33)"/></svg>
              <svg id="图层_1" data-name="图层 1" class="path2 svg svg4"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.75 144.83"><defs></defs><title>line3</title><polyline points="150.25 0 150.25 144.33 0 144.33" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="4"/></svg>
              
              
              <!-- <svg id="图层_1" data-name="图层 1" class="svg svg5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 98"><defs></defs><title>line2</title><line x1="0.5" x2="0.5" y2="98" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="4"/></svg> -->



              <!-- 设备图标 -->
              <div class="iconitem abs absCV iconitem1">
                <img src="../../images/icon_solar.png" class="imageicon pure-img" height="40" width="40" alt="">
              </div>
              <div class="iconitem abs absCV iconitem2">
                <img src="../../images/icon_solar.png" class="imageicon pure-img" height="40" width="40" alt="">
              </div>
              <div class="iconitem abs absCV iconitem3">
                <img src="../../images/icon_solar.png" class="imageicon pure-img" height="40" width="40" alt="">
              </div>
              <div class="iconitem abs absCV iconitem4">
                <img src="../../images/icon_solar.png" class="imageicon pure-img" height="40" width="40" alt="">
              </div>
              <div class="iconitem abs absCV iconitem5">
                <img src="../../images/icon_solar.png" class="imageicon pure-img" height="40" width="40" alt="">
              </div>
              <div class="iconitem abs absCV iconitem6">
                <img src="../../images/icon_solar.png" class="imageicon pure-img" height="40" width="40" alt="">
              </div>
              


        </f7-block>
    </f7-page>
</template>
<script>
export default {
    data (){
        return{
            message : "",
            wssstring : "echo.websocket.org", 
            app : null,
            params : [],
        }
    },
    computed : {

    },
    methods : {
        initSocket : function(){
          this.connWebsocket("wss://" + this.wssstring);
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
              console.log("Connection open ..."); 
              ws.send("Hello WebSockets!");
              (function(socket, count){
                setInterval(function(){
                  socket.send("hello " + count);
                  count++;
                }, 1000);
              })(ws, count);
            };
            ws.onmessage = function(evt) {
              console.log( "Received Message: " + evt.data);
              // ws.close();
              _this.message += " " + evt.data;
                var  dv = new DataView(evt.data);
                console.log(dv.getInt16(0,false)); // ok
                console.log(dv.getInt16(2,false));
            };

            ws.onclose = function(evt) {
              console.log("Connection closed.");
            };  
        },
    },
    mounted : function(){

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
      margin: 31% 0 0 0%;
  }
  .iconitem6{
      margin: 26% 0 0 30%;
  }
  .systopology{
    height: calc(100% - 34%)
  }
  .iconitem{
    width: 15%;
    /*height: 60px;*/
    border: 3px solid #a2a2a2;
    background-color: #575757;
    border-radius: 50%;
  }
  .imageicon{
    margin: 5px 7px;
  }
   .svg{
    position: absolute;
  }
  .svg1{
    top: -40px;
    left: -36px;
    transform: scale(0.3);
  }
  .svg2{
    top: -40px;
    right: -49px;
    transform: scale(0.3);

  }
  .svg3{
    top: 85px;
    left: -36px;
    transform: scale(0.3) rotateX(180deg);
  }
  .svg4{
   top: 85px;
    right: -49px;
    transform: scale(0.3) rotateX(180deg);
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




