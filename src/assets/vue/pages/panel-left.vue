<template>
  <f7-page>
    <f7-block class="block block-strong setting">
      <div class="block-title">连接设置</div>
        <ul>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-after">
                  <label class="toggle toggle-init">
                    <input type="text" name="IP" placeholder="IP" v-model="ip">
                  </label>
                </div>
              </div>
            </div>
           </li>
           <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-after">
                  <label class="toggle toggle-init">
                    <input type="number" name="PORT" min="0" max="9999" v-model="port" placeholder="端口">
                  </label>
                </div>
              </div>
            </div>
           </li>
         </ul>
      <f7-button color="green" @click='connectSocket'>连接</f7-button>
    </f7-block>
    <f7-block>
      {{message}}
    </f7-block>
  </f7-page>
</template>
<script>
  export default {
    data(){
      return{
        message : "西安特锐德智能充电科技有限公司",
        ip : "10.10.100.254",
        port : 8899,
      }
    },
    methods : {
      connectSocket : function(){
        this.$store.commit('CONN_DATA_CHANGE', { ip : this.ip,  port : this.port });
      }
    },
    mounted : function(){
    },

  };
</script>
