<template>
  <f7-page>
    <f7-block-title>选择设备</f7-block-title>
    <f7-block>
      <p><f7-link panel-close>close me</f7-link></p>
    </f7-block>
    <f7-block-title>Main View Navigation</f7-block-title>
    <f7-list>
      <f7-list-item link="/about/" title="About" panel-close></f7-list-item>
      <f7-list-item link="/form/" title="Form" panel-close></f7-list-item>
    </f7-list>
    <f7-block>
    </f7-block>
    
    <f7-block>
      {{message}}
    </f7-block>
    <f7-button color="green" @click='ScanQRCode'>扫码</f7-button>

  </f7-page>
</template>
<script>
  export default {
    data(){
      return{
        message : "this is a text~!"
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
      // onDone : function(err, status){
      //   if (err) {
      //    console.error(err);
      //   }
      //   if (status.authorized) {
      //     QRscanner.show(); // should feel very fast. 
      //   } else if (status.denied) {
      //    // The video preview will remain black, and scanning is disabled. We can 
      //    // try to ask the user to change their mind, but we'll have to send them 
      //    // to their device settings with `QRScanner.openSettings()`. 
      //   } else {
      //     // we didn't get permission, but we didn't get permanently denied. (On 
      //     // Android, a denial isn't permanent unless the user checks the "Don't 
      //     // ask again" box.) We can ask again at the next relevant opportunity. 
      //   }
      // }
    },
    mounted : function(){
      // QRScanner.prepare(this.onDone);
    },

  };
</script>
