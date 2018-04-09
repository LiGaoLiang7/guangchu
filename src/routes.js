export default [
  {
    path: '/',  // 一次系统图主页
    component: require('./assets/vue/pages/home.vue')
  },
  {
    path: '/params/', // 参数 实时数据主页
    component: require('./assets/vue/pages/params.vue')
  },
  {
    path: '/setting/', // 系统设置主页
    component: require('./assets/vue/pages/setting.vue')
  },
  // {
  //   path: '/dynamic-route/blog/:blogId/post/:postId/',
  //   component: require('./assets/vue/pages/dynamic-route.vue')
  // },
  {
    path: '/panel-left/',
    component: require('./assets/vue/pages/panel-left.vue')
  },

  // {
  //   path: '/color-themes/',
  //   component: require('./assets/vue/pages/color-themes.vue')
  // },
  // {
  //   path: '/chat/',
  //   component: require('./assets/vue/pages/chat.vue')
  // },
  // {
  //   path: '/vuex/',
  //   component: require('./assets/vue/pages/vuex.vue')
  // },
  {
    path: '/photovoltaic/', // 光伏实时数据
    component: require('./assets/vue/pages/param-photovoltaic.vue')

  },
  {
    path: '/battery/',  // 电池实时数据
    component: require('./assets/vue/pages/param-battery.vue')

  },
  {
    path: '/output/', // 系统输出实时数据
    component: require('./assets/vue/pages/param-output.vue')

  },
  {
    path: '/load/', // 系统负载实时数据
    component: require('./assets/vue/pages/param-load.vue')

  },
  {
    path: '/baseinfo/',  // 系统信息实时数据
    component: require('./assets/vue/pages/param-baseinfo.vue')
  },
  {
    path: '/warning/', // 告警 和历史数据主页
    component: require('./assets/vue/pages/warning.vue')
  },
  {
    path: '/bmswarning/', // BMS 告警
    component: require('./assets/vue/pages/warning-bms.vue')
  },
  {
    path: '/syswarning/', // 系统故障状态
    component: require('./assets/vue/pages/warning-sys.vue')
  },
  {
    path: '/hispower/', // 历史功率数据
    component: require('./assets/vue/pages/warning-hispower.vue')
  },
]
