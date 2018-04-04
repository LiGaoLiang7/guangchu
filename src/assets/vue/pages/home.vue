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
            <f7-button @click="initSocketurl">默认</f7-button>
          </f7-list-item>
        </f7-list>
        <f7-block>{{message}}</f7-block>
    </f7-page>
</template>
<script>

// 引入framework7
import framework7 from 'framework7/dist/framework7.esm.bundle.js';

export default {
    data (){
        return{
            message : "",
            wssstring : "echo.websocket.org", 
            app : null,
        }
    },
    computed : {

    },
    methods : {
        initSocket : function(){

          var formdata = this.app.form.convertToData("#my-form");
          
          this.connWebsocket("wss://" + formdata.wss);
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

            // switch (ws.readyState) {
            //   case WebSocket.CONNECTING:
            //     // do something
            //     break;
            //   case WebSocket.OPEN:
            //     // do something
            //     break;
            //   case WebSocket.CLOSING:
            //     // do something
            //     break;
            //   case WebSocket.CLOSED:
            //     // do something
            //     break;
            //   default:
            //     // this never happens
            //     break;
            // }

            ws.onmessage = function(evt) {
              console.log( "Received Message: " + evt.data);
              // ws.close();
              _this.message += " " + evt.data;

            };

            ws.onclose = function(evt) {
              console.log("Connection closed.");
            };  


        },
        initSocketurl : function(){

          this.app.form.fillFormData('my-form', {"wss" : "echo.websocket.org"})
        },

        initapp : function(){
          this.app = new framework7();

        }


    },

    mounted : function(){
        // this.initWebsocket();
        this.initapp();
    }
};
</script>
