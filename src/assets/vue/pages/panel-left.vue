<template>
  <f7-page>
    <!-- <f7-block-title>选择设备</f7-block-title> -->
    <f7-block>
<!--       <p><f7-link panel-close>close me</f7-link></p> -->
    </f7-block>
    <!-- <f7-block-title>Main View Navigation</f7-block-title> -->
    <f7-list>
     <!--  <f7-list-item link="/about/" title="About" panel-close></f7-list-item>
      <f7-list-item link="/form/" title="Form" panel-close></f7-list-item> -->
    </f7-list>
    <f7-block>
    </f7-block>
    <f7-block>
      {{message}}
    </f7-block>
    <!-- <f7-button color="green" @click='ScanQRCode'>扫码</f7-button> -->

  </f7-page>
</template>
<script>
  export default {
    data(){
      return{
        message : "现特锐德智能充电科技有限公司"
      }
    },

    methods : {
      ScanQRCode : function(){
        QRScanner.scan(this.displayContents);
      },

      displayContents : function(err, text){
        if(err){
          console.log(err);
          this.message = err;
        } else {
          // The scan completed, display the contents of the QR code: 
          this.message = text;
        }
      },

    },
    mounted : function(){
      // QRScanner.prepare(this.onDone);
    },

  };
</script>
