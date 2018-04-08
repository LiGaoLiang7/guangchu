export default [
  {
    path: '/',
    component: require('./assets/vue/pages/home.vue')
  },
  {
    path: '/params/',
    component: require('./assets/vue/pages/params.vue')
  },
  {
    path: '/setting/',
    component: require('./assets/vue/pages/setting.vue')
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: require('./assets/vue/pages/dynamic-route.vue')
  },
  {
    path: '/panel-left/',
    component: require('./assets/vue/pages/panel-left.vue')
  },
  {
    path: '/color-themes/',
    component: require('./assets/vue/pages/color-themes.vue')
  },
  {
    path: '/chat/',
    component: require('./assets/vue/pages/chat.vue')
  },
  {
    path: '/vuex/',
    component: require('./assets/vue/pages/vuex.vue')
  },
  {
    path: '/photovoltaic/',
    component: require('./assets/vue/pages/param-photovoltaic.vue')

  },
  {
    path: '/battery/',
    component: require('./assets/vue/pages/param-battery.vue')

  },
  {
    path: '/output/',
    component: require('./assets/vue/pages/param-output.vue')

  },
  {
    path: '/load/',
    component: require('./assets/vue/pages/param-load.vue')

  },
  {
    path: '/baseinfo/',
    component: require('./assets/vue/pages/param-baseinfo.vue')

  },
]
