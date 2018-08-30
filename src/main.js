// Import Vue
import Vue from 'vue'

// Import Framework7
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';

// Import Framework7 Vue
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';

// Import F7 Style
import Framework7CSS from 'framework7/dist/css/framework7.css'

// Import F7 iOS Icons
import Framework7Icons from 'framework7-icons/css/framework7-icons.css'

// Import Fontawesome Theme Styles
import FontAwesome from 'font-awesome/css/font-awesome.css'

// Import App Custom Styles
// import AppStyles from './assets/sass/main.scss'
// Import App Component
import app from './main.vue'

// Import Routes
import routes from './routes.js'
// Import Vuex Storage
import store from './assets/vuex/storage.js'

// Import language file
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import enUS from './assets/lang/en_us'
import zhCN from './assets/lang/zh_cn'

Vue.config.lang =  localStorage.getItem('lang') || 'zh-CN';
Vue.locale('en', enUS)
Vue.locale('zh-CN', zhCN)

// Install Plugin
Vue.use(Framework7Vue, Framework7);

let theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}
theme = 'ios';
// Init Vue App
// import toastRegistry from './toast/index'
//
// // 这里也可以直接执行 toastRegistry()
// Vue.use(toastRegistry)

    export default new Vue({
      // Root Element
      el: '#app',
      store,

      render: c => c('app'),
      components: {
        app,
      },
      framework7: {
        root: "#app",
        id: 'io.framework7.testapp',
        theme,
        routes,
      },
      data: {
        beginDate : null,          // 两次点击退出按钮开始时间
        endDate: null,
        isToast : false  // 是否弹出弹框
      },
      mounted : function(){
        this.initBackButtonEvents();
      },
      methods : {
        initBackButtonEvents : function(){
          document.addEventListener("backbutton", this.onBackButton, false);
        },
        // 点击退出按钮
        onBackButton: function (){
          this.endDate = new Date().getTime(); // 两次点击退出按钮结束时间
          // 提示过Toast并且两次点击时间小于2S
          if ( this.isToast && this.endDate - this.beginDate < 2000 ) {
              this.beginDate = this.endDate;
              this.isToast = false;
              navigator.app.exitApp();
          } else {
              this.isToast = true;
              this.beginDate = new Date().getTime();
              this.$f7.toast.create({
                text: "再次点击退出程序",
                position: "center",
                closeTimeout: 1500
              }).open();
          }
        }
      }
    });