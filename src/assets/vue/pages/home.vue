<template>
    <f7-page>
       <f7-navbar>
            <f7-nav-left>
                <f7-link class="panel-open" open-panel="left" icon="fa fa-bars"></f7-link>
            </f7-nav-left>
            <div class="title">首页</div>
        </f7-navbar>
        <f7-list form id="my-form">
          <f7-list-item>
            <f7-label>wss//</f7-label>
            <f7-input type="text" placeholder="Name" name="wss" autofocus autosave></f7-input>
            <f7-button @click="initSocket">连接</f7-button>
          </f7-list-item>
        </f7-list>
        <f7-block>{{message}}</f7-block>
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
