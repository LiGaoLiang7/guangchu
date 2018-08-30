<template>
    <!-- App -->
    <div id="app">
        <f7-statusbar></f7-statusbar>
        <f7-panel left cover>
            <f7-view url="/panel-left/" links-view=".view-main"/>
        </f7-panel>
        <f7-view url="/" :main="true" class="ios-edges"></f7-view>
        <f7-toolbar tabbar labels bottom class="app-main">
            <f7-link icon="iconfont icon-shouye" class="toolicon" href="/" :text="$t('app.toolbox.home')" :class="{active : tabindex == 1}" @click="tabindex = 1"></f7-link>
            <f7-link icon="iconfont icon-canshu1" class="toolicon" href="/params/" :text="$t('app.toolbox.param')" :class="{active : tabindex == 2}" @click="tabindex = 2"></f7-link>
            <f7-link icon="iconfont icon-gaojing " class="toolicon" href="/warning/" :text="$t('app.toolbox.warning')" :class="{active : tabindex == 3}" @click="tabindex = 3" style="position:relative;">
                <span class="badge" v-show="warning"></span>
            </f7-link>
            <f7-link icon="iconfont icon-shezhi" class="toolicon" href="/setting/" :text="$t('app.toolbox.setting')" :class="{active : tabindex == 4}" @click="tabindex = 4"></f7-link>
        </f7-toolbar>
        <div v-show="showProgress" class="progress"></div>
        <div v-show="showProgress" class="progress_dialog" style="display: block; margin-top: -47px;">
            <div class="dialog_inner">
                <div class="dialog_title">{{$t('app.message.send_update_data')}}<br/>{{Percent}}%</div>
                <div class="dialog_preloader"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import "./assets/css/normalize.css";
    import "./assets/css/common.css";
    import "./assets/css/iconfont.css";
    import "./assets/css/layoutFlex.css";

    export default {
        mounted() {
            // console.log(this);
            // console.log(this.$device);
            localStorage.setItem("lang", "zh-CN");
        },
        data() {
            return {
                tabindex: 1,
                warning: false, //告警总标志位
                wssstring: "10.10.100.254",
                port: 8899,
                app: null,
                socketclient: null,
                params: [],
                // 储能电池实时数据
                params_battery: [
                    { paramName: "电池电压", paramValue: 0, byte: 2, unit: "V" },
                    { paramName: "电池电流", paramValue: 0, byte: 2, unit: "A" },
                    { paramName: "温度", paramValue: 0, byte: 2, unit: "℃" },
                    { paramName: "SOC", paramValue: 0, byte: 2, unit: "%" },
                    { paramName: "SOH", paramValue: 0, byte: 2, unit: "%" },
                    { paramName: "充放电状态", paramValue: 0, byte: 2, unit: ""}
                ],
                // 控制柜实时数据
                params_ctrlcab: [
                    { paramName : "PV1电压", key : "PV1_VOL", paramValue : 0, byte : 2, unit : "V"  , isshow : 1, resolution : 10 },
                    { paramName : "PV1电流", key : "PV1_CUR", paramValue : 0, byte : 2, unit : "A"  , isshow : 1, resolution : 100},
                    { paramName : "PV1功率", key : "PV1_PW",  paramValue : 0, byte : 2, unit : "W"  , isshow : 1, resolution : 1 },
                    { paramName : "PV2电压", key : "PV2_VOL", paramValue : 0, byte : 2, unit : "V"  , isshow : 1, resolution : 10 },
                    { paramName : "PV2电流", key : "PV2_CUR", paramValue : 0, byte : 2, unit : "A"  , isshow : 1, resolution : 100},
                    { paramName : "PV2功率", key : "PV2_PW",  paramValue : 0, byte : 2, unit : "W"  , isshow : 1, resolution : 1},
                    { paramName: "逆变A相电压", key: "Invr_APV", paramValue: 0, byte: 2, unit: "V", resolution: 10},
                    { paramName: "逆变A相电流", key: "Invr_APC", paramValue: 0, byte: 2, unit: "A", resolution: 100},
                    { paramName: "电网A相电压", key: "Grid_APV", paramValue: 0, byte: 2, unit: "V", resolution: 10},
                    { paramName: "电网AB线电压", key: "Grid_ABC", paramValue: 0, byte: 2, unit: "V", resolution: 10},
                    { paramName: "电网A相电流", key: "Grid_APV", paramValue: 0, byte: 2, unit: "A", resolution: 100},
                    { paramName: "逆变B相电压", key: "Invr_BPV", paramValue: 0, byte: 2, unit: "V", resolution: 10},
                    { paramName: "逆变B相电流", key: "Invr_BPC", paramValue: 0, byte: 2, unit: "A", resolution: 100},
                    { paramName: "电网B相电压", key: "Grid_BPV", paramValue: 0, byte: 2, unit: "V", resolution: 10},
                    { paramName: "电网BC线电压", key: "Grid_BCV", paramValue: 0, byte: 2, unit: "V", resolution: 10},
                    { paramName: "电网B相电流", key: "Grid_BPC", paramValue: 0, byte: 2, unit: "A", resolution: 100},
                    { paramName: "逆变C相电压", key: "Invr_CPV", paramValue: 0, byte: 2, unit: "V", resolution: 10},
                    {
                        paramName: "逆变C相电流",
                        key: "Invr_CPC",
                        paramValue: 0,
                        byte: 2,
                        unit: "A",
                        resolution: 100
                    },
                    {
                        paramName: "电网C相电压",
                        key: "Grid_CPV",
                        paramValue: 0,
                        byte: 2,
                        unit: "V",
                        resolution: 10
                    },
                    {
                        paramName: "电网CA线电压",
                        key: "Grid_CAC",
                        paramValue: 0,
                        byte: 2,
                        unit: "V",
                        resolution: 10
                    },
                    {
                        paramName: "电网C相电流",
                        key: "Grid_CPC",
                        paramValue: 0,
                        byte: 2,
                        unit: "A",
                        resolution: 100
                    },
                    {
                        paramName: "电网频率",
                        key: "Grid_ABLV",
                        paramValue: 0,
                        byte: 2,
                        unit: "Hz",
                        resolution: 100
                    },
                    {
                        paramName: "功率因数",
                        key: "Grid_BCLV",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        resolution: 1000
                    },
                    {
                        paramName: "系统有功功率",
                        key: "Grid_CALV",
                        paramValue: 0,
                        byte: 2,
                        unit: "VA",
                        resolution: 1
                    },
                    {
                        paramName: "系统无功功率",
                        key: "Grid_F",
                        paramValue: 0,
                        byte: 2,
                        unit: "W",
                        resolution: 1
                    },
                    {
                        paramName: "系统视在功率",
                        key: "PW_FC",
                        paramValue: 0,
                        byte: 2,
                        unit: "Var",
                        resolution: 1
                    },
                    {
                        paramName: "电池电流",
                        key: "Bty_C",
                        paramValue: 0,
                        byte: 2,
                        unit: "A",
                        resolution: 10
                    },
                    {
                        paramName: "电池电压",
                        key: "Bty_V",
                        paramValue: 0,
                        byte: 2,
                        unit: "V",
                        resolution: 10
                    },
                    {
                        paramName: "直流正母线电压",
                        key: "DC_PBUS_V",
                        paramValue: 0,
                        byte: 2,
                        unit: "V",
                        resolution: 10
                    },
                    {
                        paramName: "直流负母线电压",
                        key: "DC_NBUS_V",
                        paramValue: 0,
                        byte: 2,
                        unit: "V",
                        resolution: 10
                    },
                    {
                        paramName: "直流双边母线电压",
                        key: "DC_BBUS_V",
                        paramValue: 0,
                        byte: 2,
                        unit: "V",
                        resolution: 10
                    },
                    {
                        paramName: "直流功率",
                        key: "DC_PW",
                        paramValue: 0,
                        byte: 2,
                        unit: "W",
                        resolution: 1
                    },
                    {
                        paramName: "环境温度",
                        key: "Amb_temp",
                        paramValue: 0,
                        byte: 2,
                        unit: "℃",
                        resolution: 100
                    },
                    {
                        paramName: "铅酸电池剩余容量",
                        key: "LL_Bry_RCAP",
                        paramValue: 0,
                        byte: 2,
                        unit: "%",
                        resolution: 1
                    },
                    {
                        paramName: "铅酸电池剩余备电时间",
                        key: "LL_Bry_RTIME",
                        paramValue: 0,
                        byte: 2,
                        unit: "Min",
                        resolution: 1
                    },
                    {
                        paramName: "设备类型编码",
                        key: "DVC_T_CODE",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        resolution: 1
                    },
                    {
                        paramName: "软件版本号高位",
                        key: "Soft_V_H",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        resolution: 1
                    },
                    {
                        paramName: "软件版本号低位",
                        key: "Soft_V_L",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        resolution: 1
                    },
                    {
                        paramName: "并机地址",
                        key: "Para_Addr",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        resolution: 1
                    },
                    {
                        paramName: "工作效率",
                        key: "Work_Effc",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        resolution: 1
                    },
                    {
                        paramName: "充电次数",
                        key: "Cge_Time",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        resolution: 1
                    },
                    {
                        paramName: "放电次数",
                        key: "Num_dsc",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        resolution: 1
                    },
                    {
                        paramName: "模块A1 温度",
                        key: "Module_A1",
                        paramValue: 0,
                        byte: 2,
                        unit: "℃",
                        resolution: 10
                    },
                    {
                        paramName: "模块B1 温度",
                        key: "Module_B1",
                        paramValue: 0,
                        byte: 2,
                        unit: "℃",
                        resolution: 10
                    },
                    {
                        paramName: "模块C1 温度",
                        key: "Module_C1",
                        paramValue: 0,
                        byte: 2,
                        unit: "℃",
                        resolution: 10
                    },
                    {
                        paramName: "负载输出A相电压",
                        key: "Bck_O_APV",
                        paramValue: 0,
                        byte: 2,
                        unit: "V",
                        resolution: 10
                    },
                    {
                        paramName: "负载输出B相电压",
                        key: "Bck_O_BPV",
                        paramValue: 0,
                        byte: 2,
                        unit: "V",
                        resolution: 10
                    },
                    {
                        paramName: "负载输出C相电压",
                        key: "Bck_O_CPV",
                        paramValue: 0,
                        byte: 2,
                        unit: "V",
                        resolution: 10
                    },
                    {
                        paramName: "负载输出频率",
                        key: "Bck_O_F",
                        paramValue: 0,
                        byte: 2,
                        unit: "Hz",
                        resolution: 100
                    },
                    {
                        paramName: "负载输出A相电流",
                        key: "Bck_O_APC",
                        paramValue: 0,
                        byte: 2,
                        unit: "A",
                        resolution: 10
                    },
                    {
                        paramName: "负载输出B相电流",
                        key: "Bck_O_BPB",
                        paramValue: 0,
                        byte: 2,
                        unit: "A",
                        resolution: 10
                    },
                    {
                        paramName: "负载输出C相电流",
                        key: "Bck_O_CPC",
                        paramValue: 0,
                        byte: 2,
                        unit: "A",
                        resolution: 10
                    },
                    {
                        paramName: "负载输出功率因数",
                        key: "Bck_O_PF",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        resolution: 1000
                    },
                    {
                        paramName: "负载输出有功功率",
                        key: "Bck_O_AP",
                        paramValue: 0,
                        byte: 2,
                        unit: "VA",
                        resolution: 1
                    },
                    {
                        paramName: "负载输出无功功率",
                        key: "Bck_O_RP",
                        paramValue: 0,
                        byte: 2,
                        unit: "Var",
                        resolution: 1
                    },
                    {
                        paramName: "负载输出视在功率",
                        key: "Bck_O_APP",
                        paramValue: 0,
                        byte: 2,
                        unit: "W",
                        resolution: 1
                    }
                ],

                // BMS告警信息 0表示无告警 1表示有告警
                warning_bms: [
                    {
                        paramName: "电池放电电流过高",
                        paramValue: 0,
                        byte: 1,
                        unit: "",
                        isshow: 1
                    },
                    {
                        paramName: "电池充电电流过高",
                        paramValue: 0,
                        byte: 1,
                        unit: "",
                        isshow: 1
                    },
                    {
                        paramName: "电池温度过低",
                        paramValue: 0,
                        byte: 1,
                        unit: "",
                        isshow: 1
                    },
                    {
                        paramName: "电池温度过高",
                        paramValue: 0,
                        byte: 1,
                        unit: "",
                        isshow: 1
                    },
                    {
                        paramName: "电池电压过低",
                        paramValue: 0,
                        byte: 1,
                        unit: "",
                        isshow: 1
                    },
                    {
                        paramName: "电池电压过高",
                        paramValue: 0,
                        byte: 1,
                        unit: "",
                        isshow: 1
                    }
                ],

                // 设备运行状态字
                running_status: [
                    {
                        paramName: "设备运行状态字1",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        isshow: 0
                    },
                    {
                        paramName: "设备运行状态字2",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        isshow: 0
                    }
                ],

                // 设备运行二进制编码
                binary_running_status: [],

                // 设备运行状态字解析
                running_status_mean: [
                    // 运行状态字 1
                    { paramName: "预留", paramValue: 0, bit: 1, unit: "", isshow: 0 },
                    { paramName: "电网掉电", paramValue: 0, bit: 1, unit: "", isshow: 0 },
                    {
                        paramName: "功率降额标志",
                        paramValue: 0,
                        bit: 1,
                        unit: "",
                        isshow: 0
                    },
                    {
                        paramName: "单/并机标志",
                        paramValue: 0,
                        bit: 1,
                        unit: "",
                        isshow: 0
                    },
                    {
                        paramName: "主/从机标志",
                        paramValue: 0,
                        bit: 1,
                        unit: "",
                        isshow: 0
                    },
                    {
                        paramName: "主/被动模式",
                        paramValue: 0,
                        bit: 1,
                        unit: "",
                        isshow: 0
                    },
                    { paramName: "电池状态", paramValue: 0, bit: 2, unit: "", isshow: 0 },
                    {
                        paramName: "AC侧运行状态",
                        paramValue: 0,
                        bit: 3,
                        unit: "",
                        isshow: 0
                    },
                    { paramName: "MPPT使能", paramValue: 0, bit: 1, unit: "", isshow: 0 },
                    {
                        paramName: "AC测运行状态",
                        paramValue: 0,
                        bit: 3,
                        unit: "",
                        isshow: 0
                    },
                    { paramName: "开关机", paramValue: 0, bit: 1, unit: "", isshow: 0 },
                    // 运行状态字 2
                    { paramName: "预留", paramValue: 0, bit: 1, unit: "", isshow: 0 },
                    { paramName: "DC运行模式", paramValue: 0, bit: 2, unit: "", isshow: 0 },
                    {
                        paramName: "PV侧自检步骤",
                        paramValue: 0,
                        bit: 3,
                        unit: "",
                        isshow: 0
                    },
                    {
                        paramName: "DC侧自检步骤",
                        paramValue: 0,
                        bit: 3,
                        unit: "",
                        isshow: 0
                    },
                    {
                        paramName: "AC侧自检步骤",
                        paramValue: 0,
                        bit: 3,
                        unit: "",
                        isshow: 0
                    },
                    {
                        paramName: "DC侧运行状态",
                        paramValue: 0,
                        bit: 2,
                        unit: "",
                        isshow: 0
                    },
                    {
                        paramName: "PV侧运行状态",
                        paramValue: 0,
                        bit: 2,
                        unit: "",
                        isshow: 0
                    }
                ],

                // 设备故障状态字
                warning_status: [
                    {
                        paramName: "故障状态字1",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        isshow: 0
                    },
                    {
                        paramName: "故障状态字2",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        isshow: 0
                    },
                    {
                        paramName: "故障状态字3",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        isshow: 0
                    },
                    {
                        paramName: "故障状态字4",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        isshow: 0
                    }
                ],
                // 故障状态字二进制编码
                binary_warning_status: [],
                // 历史功率数据
                history_power: [
                    {
                        paramName: "总放电功率",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        isshow: 0
                    },
                    { paramName: "总充电功率", paramValue: 0, byte: 2, unit: "", isshow: 0 }
                ],
                // 系统信息
                system_info: [
                    {
                        paramName: "协议版本号",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        isshow: 0
                    },
                    {
                        paramName: "电池厂商号",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        isshow: 0
                    },
                    { paramName: "Wifi SSID", paramValue: 0, byte: 2, unit: "", isshow: 0 },
                    {
                        paramName: "Wifi password",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        isshow: 0
                    }
                ],
                // 总功率数据
                total_power: [
                    {
                        paramName: "光伏日发电量",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        isshow: 1
                    },
                    {
                        paramName: "光伏总发电量",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        isshow: 1
                    },
                    {
                        paramName: "负载日用电量",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        isshow: 1
                    },
                    {
                        paramName: "负载总用电量",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        isshow: 1
                    },
                    {
                        paramName: "今日节省电费",
                        paramValue: 0,
                        byte: 2,
                        unit: "",
                        isshow: 1
                    },
                    { paramName: "总节省电费", paramValue: 0, byte: 2, unit: "", isshow: 1 }
                ],
                /* CRC 高位字节值表 */
                auchCRCHi: [
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x00,
                    0xc1,
                    0x81,
                    0x40,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x01,
                    0xc0,
                    0x80,
                    0x41,
                    0x00,
                    0xc1,
                    0x81,
                    0x40
                ],
                /* CRC低位字节值表*/
                auchCRCLo: [
                    0x00, 0xc0, 0xc1, 0x01, 0xc3, 0x03, 0x02, 0xc2, 0xc6, 0x06, 0x07, 0xc7, 0x05, 0xc5, 0xc4, 0x04, 0xcc, 0x0c, 0x0d, 0xcd, 0x0f, 0xcf, 0xce, 0x0e, 0x0a, 0xca, 0xcb, 0x0b, 0xc9, 0x09, 0x08, 0xc8, 0xd8,
                    0x18, 0x19, 0xd9, 0x1b, 0xdb, 0xda, 0x1a, 0x1e, 0xde, 0xdf, 0x1f, 0xdd, 0x1d, 0x1c, 0xdc, 0x14, 0xd4, 0xd5, 0x15, 0xd7, 0x17, 0x16, 0xd6, 0xd2, 0x12, 0x13, 0xd3, 0x11, 0xd1, 0xd0, 0x10, 0xf0, 0x30,
                    0x31, 0xf1, 0x33, 0xf3,
                    0xf2,
                    0x32,
                    0x36,
                    0xf6,
                    0xf7,
                    0x37,
                    0xf5,
                    0x35,
                    0x34,
                    0xf4,
                    0x3c,
                    0xfc,
                    0xfd,
                    0x3d,
                    0xff,
                    0x3f,
                    0x3e,
                    0xfe,
                    0xfa,
                    0x3a,
                    0x3b,
                    0xfb,
                    0x39,
                    0xf9,
                    0xf8,
                    0x38,
                    0x28,
                    0xe8,
                    0xe9,
                    0x29,
                    0xeb,
                    0x2b,
                    0x2a,
                    0xea,
                    0xee,
                    0x2e,
                    0x2f,
                    0xef,
                    0x2d,
                    0xed,
                    0xec,
                    0x2c,
                    0xe4,
                    0x24,
                    0x25,
                    0xe5,
                    0x27,
                    0xe7,
                    0xe6,
                    0x26,
                    0x22,
                    0xe2,
                    0xe3,
                    0x23,
                    0xe1,
                    0x21,
                    0x20,
                    0xe0,
                    0xa0,
                    0x60,
                    0x61,
                    0xa1,
                    0x63,
                    0xa3,
                    0xa2,
                    0x62,
                    0x66,
                    0xa6,
                    0xa7,
                    0x67,
                    0xa5,
                    0x65,
                    0x64,
                    0xa4,
                    0x6c,
                    0xac,
                    0xad,
                    0x6d,
                    0xaf,
                    0x6f,
                    0x6e,
                    0xae,
                    0xaa,
                    0x6a,
                    0x6b,
                    0xab,
                    0x69,
                    0xa9,
                    0xa8,
                    0x68,
                    0x78,
                    0xb8,
                    0xb9,
                    0x79,
                    0xbb,
                    0x7b,
                    0x7a,
                    0xba,
                    0xbe,
                    0x7e,
                    0x7f,
                    0xbf,
                    0x7d,
                    0xbd,
                    0xbc,
                    0x7c,
                    0xb4,
                    0x74,
                    0x75,
                    0xb5,
                    0x77,
                    0xb7,
                    0xb6,
                    0x76,
                    0x72,
                    0xb2,
                    0xb3,
                    0x73,
                    0xb1,
                    0x71,
                    0x70,
                    0xb0,
                    0x50,
                    0x90,
                    0x91,
                    0x51,
                    0x93,
                    0x53,
                    0x52,
                    0x92,
                    0x96,
                    0x56,
                    0x57,
                    0x97,
                    0x55,
                    0x95,
                    0x94,
                    0x54,
                    0x9c,
                    0x5c,
                    0x5d,
                    0x9d,
                    0x5f,
                    0x9f,
                    0x9e,
                    0x5e,
                    0x5a,
                    0x9a,
                    0x9b,
                    0x5b,
                    0x99,
                    0x59,
                    0x58,
                    0x98,
                    0x88,
                    0x48,
                    0x49,
                    0x89,
                    0x4b,
                    0x8b,
                    0x8a,
                    0x4a,
                    0x4e,
                    0x8e,
                    0x8f,
                    0x4f,
                    0x8d,
                    0x4d,
                    0x4c,
                    0x8c,
                    0x44,
                    0x84,
                    0x85,
                    0x45,
                    0x87,
                    0x47,
                    0x46,
                    0x86,
                    0x82,
                    0x42,
                    0x43,
                    0x83,
                    0x41,
                    0x81,
                    0x80,
                    0x40
                ],
                lang: localStorage.getItem("lang"),
                sendCommand: null,
                reciveCommand: 0, // 接收的指令
                CrcOkFlag: false, // CRC校验标志
                FrameNumber: 0, // 帧序号
                index: null, //1为PCU
                Percent: 0,
                showProgress: false,
                deviceStatusData: []
            };
        },
        computed: {
            // 全局的tabIndex
            tabIndex: function() {
                return this.$store.getters.tabIndex;
            },
            ctrlflag: function() {
                // 从store中获取参数
                return this.$store.getters.ctrlSysSwitch; // 从getters中获取
            },
            // 全局的
            settingParamsters: function() {
                // 从store中获取参数
                return this.$store.state.settingData.slice(0); // 从state中获取
            },
            conndata: function() {
                return this.$store.state.connData;
            },
            // 升级PCU 软件的数据
            PCUData: function() {
                return this.$store.state.binaryPCUData;
            },
            // 升级DSP 软件的数据
            DSPData1: function() {
                return this.$store.state.binaryDSPData1;
            },
            DSPData2: function() {
                return this.$store.state.binaryDSPData2;
            },
            // 工作模式参数设置
            workingModeParameter: function() {
                // console.log("in watch")
                return this.$store.state.workingModeData;
            },

            // 自定义模式的数组
            customeModeParameter: function() {
                return this.$store.state.customeModeData;
            },
            //
            warningState :function(){
                return this.$store.state.WarningState;
            }
        },
        watch: {
            tabIndex: function() {
                this.tabindex = this.tabIndex;
            },
            ctrlflag: function() {
                // 设置 - 参数设置 开关机指令
                this.sendSwitchFlagCommand(this.ctrlflag);
            },
            settingParamsters: function() {
                //设置 - 下发运行参数设置
                this.sendDeviceRunningParameters();
            },

            workingModeParameter: function() {
                // 设置 - 下发工作模式参数设置

                this.sendWorkingModeParameter();
            },
            customeModeParameter: function() {
                // 设置- 自定义模式
                // console.log("in main");
                this.sendCustomeModeParameter();
                // console.log(this.customeModeParameter)
            },

            // 连接数据
            conndata: function() {
                // 关闭socket连接
                // this.socketclient.close();
                this.socketclient = new Socket();
                this.connectServirce(this.conndata.ip, this.conndata.port);
            },

            // PCU软件的数据
            PCUData: function() {
                // 1 发送开始升级命令
                this.sendFileDataAsBinary([], 0, 1);
                this.sendCommand = 0x0020;
                this.index = 1;
                this.FrameNumber = 0;
            },

            // DSP软件的数据
            DSPData1: function() {
                this.sendFileDataAsBinary([], 0, 2);
                this.sendCommand = 0x0010;
                this.index = 2;
                this.FrameNumber = 0;
                // var dialog = this.$f7.dialog.alert(result, "文件数据");
            },
            DSPData2: function() {
                this.sendFileDataAsBinary([], 0, 3);
                this.sendCommand = 0x0010;
                this.index = 3;
                this.FrameNumber = 0;
                // var dialog = this.$f7.dialog.alert(result, "文件数据");
            },

            // 验证接受到的命令变化
            reciveCommand: function() {
                // 交互
                this.interactiveTheTransFile();
            },
            //接收到总标志位参数，添加红点
            warningState: function(){
                this.warning = this.warningState;
            }
        },
        created: function() {
            // 连接socket
            // console.log("create");
            setTimeout(this.initSocket(), 5000);
        },
        methods: {
            // 初始化socket
            initSocket: function() {
                // this.connWebsocket("ws://" + this.wssstring);
                var _this = this;
                document.addEventListener("deviceready",
                    function() {
                        _this.socketclient = new Socket();
                        _this.connectServirce();
                    },
                    false
                );
            },
            // 连接socket
            connectServirce: function(wssstring, port) {
                var theport = Number(port);
                var _this = this;
                // _this.$f7.dialog.preloader("服务器连接中...");
                this.socketclient.onData = function(data) {
                    // _this.$f7.dialog.alert(JSON.stringify(data));
                    var uint8View = new DataView(data.buffer);
                    _this.praseData(data, uint8View);
                };
                this.socketclient.onError = function(errorMessage) {
                    _this.$store.commit("CONNECTED_STATE_CHANGE", 0);
                    // 服务出错
                    _this.showProgress = false;
                    _this.$f7.dialog.alert(
                        _this.$t("app.message.serviceerror"),// + errorMessage
                        _this.$t("app.message.tip")
                    );
                };
                this.socketclient.onClose = function(hasError) {
                    _this.$store.commit("CONNECTED_STATE_CHANGE", 0);
                    // 连接关闭
                    _this.showProgress = false;
                    _this.$f7.dialog.alert(
                        _this.$t("app.message.connect_closed"),
                        _this.$t("app.message.tip")
                    );
                };
                this.socketclient.open(wssstring, theport, function() {
                        _this.$store.commit("CONNECTED_STATE_CHANGE", 1);//服务连接状态
                        //首页数据查询
                        _this.sendStaticstsParameter();
                        setInterval(_this.sendStaticstsParameter, 60*60*1000);
                        // 连接服务成功
                        _this.$f7.dialog.alert(
                            _this.$t("app.message.connect_success"),
                            _this.$t("app.message.tip")
                        );
                    },
                    function(errorMessage) {
                        _this.$store.commit("CONNECTED_STATE_CHANGE", 0);
                        // 连接服务失败
                        _this.showProgress = false;
                        _this.$f7.dialog.alert(
                            _this.$t("app.message.connect_failed"),// + errorMessage,
                            _this.$t("app.message.tip")
                        );
                    }
                );
            },

            // 将文件数据下发
            // this.$f7.toast.create({
            //     text: "升级开始",
            //     position: "center",
            //     closeTimeout: 1500
            // }).open();
            // dataLength 数据长度
            // command_h  命令高位 command_l  命令低位
            // fileLength  文件长度
            // updateDataIndex  升级数据index索引 - 在第二帧中是命令
            sendFileDataAsBinary: function(fileBuffer, updateDataIndex, index) {
                if(updateDataIndex == 0){
                    this.showProgress = true;
                }
                var command_h;
                var command_l;
                var data;
                if (updateDataIndex == 0) {
                    data = new Uint8Array(12);
                } else {
                    data = new Uint8Array(fileBuffer.length + 10);
                }

                data[0] = 0xe4;
                data[1] = 0x1b; // 帧头
                if (updateDataIndex == 0) {
                    data[2] = 0x02;
                    data[3] = 0x00;
                } else {
                    if (fileBuffer.length <= 255) {
                        data[2] = Number(fileBuffer.length);
                        data[3] = 0x00;
                    } else {
                        data[2] = Number(fileBuffer.length) & 255; // 数据长度
                        data[3] = Number(fileBuffer.length) >> 8;
                    }
                }
                if (updateDataIndex == 0) {
                    // 升级命令字
                    if (index == 1) {
                        command_h = 0x20;
                        command_l = 0x00;
                    } else if (index == 2) {
                        command_h = 0x10;
                        command_l = 0x00;
                    } else if (index == 3) {
                        command_h = 0x10;
                        command_l = 0x00;
                    }
                    data[4] = command_l;
                    data[5] = command_h;
                } else {
                    data[4] = Number(updateDataIndex) & 255; // 命令
                    data[5] = Number(updateDataIndex) >> 8;
                }
                var crc;
                // 数据位以前的做校验  CRC 校验
                if (updateDataIndex == 0) {
                    // 没有数据
                    data[6] = 0x00;
                    data[7] = 0x00;
                    crc = this.uiCRC16(
                        data.subarray(0, 8),
                        8
                    );
                    if (crc <= 255) {
                        data[8] = Number(crc);
                        data[9] = 0x00;
                    } else {
                        data[8] = Number(crc) & 255;
                        data[9] = Number(crc) >> 8; // 数据长度
                    }
                    data[10] = 0x1b;
                    data[11] = 0xe4;
                } else {
                    data.set(fileBuffer, 6); // 数据区
                    crc = this.uiCRC16(
                        data.subarray(0, fileBuffer.length + 6),
                        fileBuffer.length + 6
                    );
                    if (crc <= 255) {
                        data[6 + fileBuffer.length] = Number(crc);
                        data[7 + fileBuffer.length] = 0x00;
                    } else {
                        data[6 + fileBuffer.length] = Number(crc) & 255;
                        data[7 + fileBuffer.length] = Number(crc) >> 8; // 数据长度
                    }
                    data[8 + fileBuffer.length] = 0x1b;
                    data[9 + fileBuffer.length] = 0xe4; // 帧尾
                }
                // alert(JSON.stringify(data));
                this.socketclient.write(data);
                //this.$f7.dialog.alert(this.$t('app.message.commandsend'),this.$t('app.message.tip'));
            },
            // 升级协议的 交互过程
            interactiveTheTransFile: function() {
                // 准备好文件数据
                var result = [];
                if (this.index == 1) {
                    var uint8View = new DataView(this.PCUData);
                } else if (this.index == 2) {
                    var uint8View = new DataView(this.DSPData1);
                } else {
                    var uint8View = new DataView(this.DSPData2);
                }

                if (this.reciveCommand == 0) return;
                for (var i = 0; i < uint8View.byteLength; i++) {
                    result.push(uint8View.getUint8(i, false));
                }
                this.Percent = parseInt(this.FrameNumber*25600/result.length);
                // this.$f7.dialog.alert("reciveCommand = " + this.reciveCommand + " sendCommand : " + this.sendCommand + " CrcOkFlag : " + this.CrcOkFlag + " result.length : " + result.length + " FrameNumber : " + this.FrameNumber);

                // 收到正确的回复 发送下一条数据 256个字节为一帧
                if (this.reciveCommand == this.sendCommand && this.CrcOkFlag) {
                    if (this.sendCommand == 0x0010) {
                        // 开始发第一帧文件this.$f7.dialog.alert("第一帧DSP文件");
                        if (result.length > 256) {
                            this.sendFileDataAsBinary(result.slice(this.FrameNumber * 256,(this.FrameNumber + 1) * 256),++this.FrameNumber,this.index);
                            this.sendCommand = this.FrameNumber << 8;
                        } else {
                            // 只有一帧 发完this.$f7.dialog.alert("只有一帧");
                            this.sendFileDataAsBinary(result, 1, this.index);
                            this.sendCommand = 0x0100;
                        }
                    } else if (this.sendCommand == 0x00e0) {
                        // alert("运行DSP升级成功");
                        this.showProgress = false;
                        if(this.lang == "zh-CN") {
                            this.$f7.dialog.alert("升级成功",this.$t("app.message.tip"));
                            // this.$f7.toast.create({
                            //     text: "升级成功",
                            //     position: "center",
                            //     closeTimeout: 1500
                            // }).open();
                        }else{
                            this.$f7.dialog.alert("Update Success",this.$t("app.message.tip"));
                        }
                    } else if (this.sendCommand == 0x0020) {// 开始PCU升级命令
                        // 开始发第一帧文件this.$f7.dialog.alert("第一帧PCU文件");
                        if (result.length > 256) {
                            this.sendFileDataAsBinary(
                                result.slice(
                                    this.FrameNumber * 256,
                                    (this.FrameNumber + 1) * 256
                                ),
                                ++this.FrameNumber,
                                this.index
                            );
                            this.sendCommand = this.FrameNumber << 8;
                        } else {
                            // 只有一帧 发完this.$f7.dialog.alert("只有一帧");
                            this.sendFileDataAsBinary(result, 1, this.index);
                            this.sendCommand = 0x0100;
                        }
                    } else if (this.sendCommand == 0x00f0) {
                        // alert("运行PCU升级成功");
                        this.showProgress = false;
                        if(this.lang == "zh-CN") {
                            this.$f7.dialog.alert("升级成功",this.$t("app.message.tip"));
                        }else{
                            this.$f7.dialog.alert("Update Success",this.$t("app.message.tip"));
                        }
                    } else {
                        if (result.length - (this.FrameNumber + 1) * 256 >= 0) {
                            this.sendFileDataAsBinary(result.slice(this.FrameNumber * 256,(this.FrameNumber + 1) * 256),++this.FrameNumber,this.index);
                            if(this.FrameNumber <= 255){
                                this.sendCommand = this.FrameNumber << 8;
                            }else{
                                var h = this.FrameNumber >> 8;
                                var l = this.FrameNumber & 255;
                                l = l << 8;
                                this.sendCommand = l + h;
                            }
                        } else {
                            if (this.index == 1) {
                                // 开始发送PCU后续文件或运行命令this.$f7.dialog.alert("发送后续文件： " + result.length - (this.FrameNumber+1) * 255);
                                // 判断运行命令条件
                                if ((this.FrameNumber + 1) * 256 - result.length >= 256) {
                                    // 如果一帧发完或者最后一帧发完 就开始执行运行命令alert("发送PCU运行命令");
                                    this.sendFileRunningDataAsBinary(result.length,result,this.index); // 开始执行运行命令
                                    this.sendCommand = 0x00f0;
                                } else {
                                    // 最后一帧alert("发送最后一帧PCU升级文件"+this.FrameNumber+1);
                                    this.sendFileDataAsBinary(result.slice(this.FrameNumber * 256),++this.FrameNumber,this.index);
                                    if(this.FrameNumber <= 255){
                                        this.sendCommand = this.FrameNumber << 8;
                                    }else{
                                        var h = this.FrameNumber >> 8;
                                        var l = this.FrameNumber & 255;
                                        l = l << 8;
                                        this.sendCommand = l + h ;
                                    }
                                }
                            } else {
                                // 开始发送DSP后续文件或运行命令this.$f7.dialog.alert("发送后续文件： " + result.length - (this.FrameNumber+1) * 255);
                                // 判断运行命令条件
                                if ((this.FrameNumber + 1) * 256 - result.length >= 256) {
                                    // 如果一帧发完或者最后一帧发完 就开始执行运行命令alert("发送DSP升级的运行命令");
                                    this.sendFileRunningDataAsBinary(result.length,result,this.index); // 就开始执行运行命令
                                    this.sendCommand = 0x00e0;
                                } else {
                                    // 最后一帧alert("发送最后一帧DSP升级文件");
                                    this.sendFileDataAsBinary(result.slice(this.FrameNumber * 256),++this.FrameNumber,this.index);
                                    if(this.FrameNumber <= 255){
                                        this.sendCommand = this.FrameNumber << 8;
                                    }else{
                                        var h = this.FrameNumber >> 8;
                                        var l = this.FrameNumber & 255;
                                        l = l << 8;
                                        this.sendCommand = l + h ;
                                    }
                                }
                            }
                        }
                    }
                }else{
                    //接收回复不正确
                }
                result = null; // 防止内存过大
                uint8View = null;
            },

            // 发送成功 运行命令
            sendFileRunningDataAsBinary: function(fileLength, fileData, index) {
                var data = new Uint8Array(14);
                data[0] = 0xe4;
                data[1] = 0x1b; // 帧头
                data[2] = 0x04;
                data[3] = 0x00; // 数据长度
                if (index == 1) {
                    data[4] = 0x00;
                    data[5] = 0xf0; // 运行命令
                    if(fileLength <= 255){
                        data[6] = 0x00;
                        data[7] = Number(fileLength);
                    }else if(fileLength > 65535){
                        var length = fileLength/2;
                        data[6] = Number(length) & 255;
                        data[7] = Number(length) >> 8;
                    }else{
                        data[6] = Number(fileLength) & 255;
                        data[7] = Number(fileLength) >> 8;
                    }
                    var crcD = this.uiCRC16(fileData, fileLength);
                    // 升级程序的 CRC 校验
                    // data.set(this.uiCRC16(fileData, fileLength), 8);
                    if (crcD <= 255) {
                        data[8] = 0x00;
                        data[9] = Number(crcD);
                    } else {
                        data[8] = Number(crcD) >> 8;
                        data[9] = Number(crcD) & 255; // 升级程序的长度
                    }
                } else{
                    data[4] = 0x00;
                    data[5] = 0xe0; // 运行命令字
                    data[6] = 0x00;
                    data[7] = 0x00;
                    data[8] = 0x00;
                    data[9] = 0x00; // 测试
                }
                var CRCData = this.uiCRC16(
                    data.subarray(0, 10),
                    10
                );
                // 这一帧数据包的CRC校验
                if (CRCData <= 255) {
                    data[10] = Number(CRCData);
                    data[11] = 0x00;
                } else {
                    data[10] = Number(CRCData) & 255;
                    data[11] = Number(CRCData) >> 8; // 升级程序的长度
                }
                data[12] = 0x1b;
                data[13] = 0xe4; // 帧尾
                // alert("运行命令："+JSON.stringify(data));
                this.socketclient.write(data);
            },
            // 解析二进制 bytearray 数据
            praseData: function(buffer, dataview) {
                // alert("接收："+JSON.stringify(buffer));
                if (dataview.byteLength > 0) {
                    var start = dataview.getUint16(0, false); // 起始帧   2字节
                    // this.$f7.dialog.alert('start : ' + start + "start_addr : " + start_addr + "target_addr : " + target_addr + "command : " + command);
                    if (Number(start) == 0xfe55) {//   正常协议 包起始帧 0xFE 0x55
                        var start_addr = dataview.getUint8(2, false); // 起始地址 1字节
                        var target_addr = dataview.getUint8(3, false); // 目标地址 1字节
                        var command = dataview.getUint8(4, false); // 命令字 1字节
                        if (start_addr == 0x14 && target_addr == 0x64) {
                            // PCU->APP 起始地址为0X14，目标地址0x64
                            var length = dataview.getInt16(5, false);
                            // if(dataview.getUint8(7 + length, false) != this.getCheckData(buffer)){
                            //   this.$f7.dialog.alert("校验位1：" + dataview.getUint8(7 + length, false).toString(16) + " 校验位2 ：" +  this.getCheckData(buffer).toString(16)  + " 指令： " + command.toString(16) + "数据："+buffer);
                            // }
                            if (dataview.getUint8(7 + length + 1, false) == 0xae && dataview.getUint8(7 + length, false) == this.getCheckData(buffer)) {
                                // 数据包完整 有结束 有校验位
                                // this.$f7.dialog.alert("数据包完整");
                                this.$store.commit("DISABLED_STATE_CHANGE", false);
                                switch (command) {
                                    case 0x0a: // 储能电池信息
                                        // this.$f7.dialog.alert("储能电池信息");
                                        this.praseBatteryData(dataview, 7, length); // 数据从6开始 截止是6+length
                                        // this.$f7.dialog.alert(JSON.stringify(this.params_battery, " ", 4));
                                        this.$store.commit("PARAM_BATTERY_CHANGE", this.params_battery);
                                        break;
                                    case 0x0b: // 控制柜信息
                                        // this.$f7.dialog.alert("控制柜信息");
                                        this.prasCtrlcabData(dataview, 7, length);
                                        this.$store.commit("PARAM_CTRLCAB_CHANGE", this.params_ctrlcab);
                                        // alert(JSON.stringify(this.params_ctrlcab," ", 2));
                                        break;
                                    case 0x1e: // BMS告警信息 warning_bms
                                        // this.$f7.dialog.alert("BMS告警信息");
                                        this.prasBMSWarningData(dataview, 7, length);
                                        // alert(JSON.stringify(this.warning_bms, " ", 4));
                                        this.$store.commit("WARNING_BMS_CHANGE", this.warning_bms);
                                        break;
                                    case 0x0c: // 设备运行状态信息 4个字节
                                        // this.$f7.dialog.alert("设备运行状态信息");
                                        this.prasDeviceRunningStatus(dataview, 7, length);
                                        // 将数据解析成二进制位
                                        this.binary_running_status = [];
                                        for (var i = 0; i < this.running_status.length; i++) {
                                            this.binary_running_status.push(
                                                this.parseVauleToBinary(this.running_status[i])
                                            );
                                        }
                                        this.$store.commit("STATUS_SYS_CHANGE",this.binary_running_status);
                                        // 将二进制报文转化为对象
                                        // this.getRunningStatus(this.binary_running_status);
                                        // alert("设备运行状态信息:"+JSON.stringify(this.running_status_mean, " ", 4));
                                        // this.$store.commit("STATUS_SYS_CHANGE",this.running_status_mean);
                                        break;
                                    case 0x1f: // 系统故障状态显示 8个字节
                                        // this.$f7.dialog.alert("系统故障状态显示");
                                        this.prasDeviceWarningStatus(dataview, 7, length);
                                        // 将数据解析成二进制位
                                        this.binary_warning_status = [];
                                        for (var i = 0; i < this.warning_status.length; i++) {
                                            this.binary_warning_status.push(
                                                this.parseVauleToBinary(this.warning_status[i])
                                            );
                                        }
                                        this.$store.commit("WARNING_SYS_CHANGE",this.binary_warning_status);
                                        if(this.warning_status[this.warning_status.length - 1].paramValue == 1){
                                            this.$store.commit("WARNING_STATE_CHANGE",true);
                                        }else{
                                            this.$store.commit("WARNING_STATE_CHANGE",false);
                                        }
                                        break;
                                    case 0x97: // 历史功率数据
                                        this.prasHistoryPowerData(dataview, 7, length);
                                        this.$store.commit("HISTORY_POWER_CHANGE", this.history_power);
                                        localStorage.removeItem("Total_discharge_power");
                                        localStorage.setItem("Total_discharge_power", this.history_power[0].paramValue); //总放电功率
                                        localStorage.removeItem("Total_charging_power");
                                        localStorage.setItem("Total_charging_power", this.history_power[1].paramValue); //总充电功率
                                        // alert(JSON.stringify(this.history_power," ", 2));
                                        break;
                                    case 0x98: // 系统信息
                                        // this.$f7.dialog.alert("系统信息");
                                        this.prasSystemData(dataview, 7, length);
                                        this.$store.commit('PARAM_SYS_CHANGE', this.system_info);
                                        // alert(JSON.stringify(this.system_info," ", 2));
                                        break;
                                    case 0x99: // 总功率数据
                                        // this.$f7.dialog.alert("总功率数据");
                                        this.prasTotalPowerData(dataview, 7, length);
                                        this.$store.commit("TOTAL_POWER_CHANGE", this.total_power);
                                        localStorage.removeItem("solarToday");
                                        localStorage.removeItem("solarTotal");
                                        localStorage.removeItem("loadToday");
                                        localStorage.removeItem("loadTotal");
                                        localStorage.removeItem("earningsToday");
                                        localStorage.removeItem("earningTotal");
                                        localStorage.setItem("solarToday", this.total_power[0].paramValue); //光伏日发电量
                                        localStorage.setItem("solarTotal", this.total_power[1].paramValue); //光伏总发电量
                                        localStorage.setItem("loadToday", this.total_power[2].paramValue); //负载日用电量
                                        localStorage.setItem("loadTotal", this.total_power[3].paramValue); //负载总用电量
                                        localStorage.setItem("earningsToday", this.total_power[4].paramValue); //日节省电费
                                        localStorage.setItem("earningTotal", this.total_power[5].paramValue); //总结省电费
                                        // alert(JSON.stringify(this.total_power," ", 2));
                                        break;
                                    default:
                                        // statements_def
                                        break;
                                }
                                // 解析完成
                                // console.log(JSON.stringify(this.params_battery, 4, " "));
                            }
                        }
                        if (start_addr == 0x64 && target_addr == 0x14) {
                            // APP->PCU 起始地址为0x64，目标地址0X14
                        }
                    }else if(Number(start) == 0xe41b) {
                        //   升级反馈协议  起始帧 0x1BE4
                        var rDataLengh = dataview.getUint16(2, false); // 数据长度
                        var rCommand = dataview.getUint16(4, false); // 命令 | 数据帧序号
                        //this.$f7.dialog.alert(this.getCheckData(buffer).toString(16));cf
                        // this.$f7.dialog.alert("rCommand:"+rCommand);4096(0x1000)
                        rDataLengh = rDataLengh >> 8;
                        // alert(rDataLengh);
                        if (rDataLengh == 2) {
                            var rdata = dataview.getUint16(6, false); // 返回数据
                            var rCrcData = dataview.getUint16(8, false); // CRC校验数据
                            // this.$f7.dialog.alert('rdata : ' + rdata + "rCrcData : " + rCrcData); 45(2D)/0
                            this.reciveCommand = 0;
                            // alert("rCommand:"+rCommand);
                            if (rdata == 0x2d00) {
                                //  校验通过
                                this.CrcOkFlag = true;
                                this.reciveCommand = rCommand;
                            } else {
                                this.CrcOkFlag = false;
                                this.reciveCommand = rCommand;
                                this.showProgress = false;
                                this.$f7.dialog.alert(
                                    this.$t("app.message.update_failed"),
                                    this.$t("app.message.tip")
                                );
                            }
                        }
                    } else {
                        // 丢弃数据包
                        this.showProgress = false;
                        this.$f7.dialog.alert(
                            this.$t("app.message.update_failed"),
                            this.$t("app.message.tip")
                        );
                    }
                }
            },
            // 解析电池数据段
            praseBatteryData: function(datalist, start, length) {
                var offset = 0;
                for (var i = 0; i < this.params_battery.length; i++) {
                    if (this.params_battery[i].byte == 2) {
                        // 2个字节的数据
                        this.params_battery[i].paramValue = datalist.getUint16(
                            start + offset,
                            false
                        );
                        offset += 2;
                    } else {
                        // 1个字节的数据
                        this.params_battery[i].paramValue = datalist.getUint8(
                            start + offset,
                            false
                        );
                        offset += 1;
                    }
                }
            },

            // 解析控制柜数据
            prasCtrlcabData: function(datalist, start, length) {
                var offset = 0;
                for (var i = 0; i < this.params_ctrlcab.length; i++) {
                    if (this.params_ctrlcab[i].byte == 2) {
                        // 2个字节的数据
                        this.params_ctrlcab[i].paramValue = datalist.getInt16(start + offset, false);
                        offset += 2;
                    } else {
                        // 1个字节的数据
                        this.params_ctrlcab[i].paramValue = datalist.getUint8(start + offset, false);
                        offset += 1;
                    }
                }
            },

            // 解析系统基础信息
            prasSystemData: function(datalist, start, length) {
                var offset = 0;
                for (var i = 0; i < this.system_info.length; i++) {
                    if (this.system_info[i].byte == 2) {
                        // 2个字节的数据
                        this.system_info[i].paramValue = datalist.getUint16(
                            start + offset,
                            false
                        );
                        offset += 2;
                    } else {
                        // 1个字节的数据
                        this.system_info[i].paramValue = datalist.getUint8(
                            start + offset,
                            false
                        );
                        offset += 1;
                    }
                }
            },
            // 解析电池BMS告警信息
            prasBMSWarningData: function(datalist, start, length) {
                var offset = 0;
                for (var i = 0; i < this.warning_bms.length; i++) {
                    if (this.warning_bms[i].byte == 2) {
                        // 2个字节的数据
                        this.warning_bms[i].paramValue = datalist.getUint16(
                            start + offset,
                            false
                        );
                        offset += 2;
                    } else {
                        // 1个字节的数据
                        this.warning_bms[i].paramValue = datalist.getUint8(
                            start + offset,
                            false
                        );
                        offset += 1;
                    }
                }
            },

            // 解析设备运行状态信息 两个字节
            prasDeviceRunningStatus: function(datalist, start, length) {
                var offset = 0;
                for (var i = 0; i < this.running_status.length; i++) {
                    if (this.running_status[i].byte == 2) {
                        // 2个字节的数据
                        this.running_status[i].paramValue = datalist.getUint16(
                            start + offset,
                            false
                        );
                        offset += 2;
                    } else {
                        // 1个字节的数据
                        this.running_status[i].paramValue = datalist.getUint8(
                            start + offset,
                            false
                        );
                        offset += 1;
                    }
                }
            },
            // 解析系统设备故障状态
            prasDeviceWarningStatus: function(datalist, start, length) {
                var offset = 0;
                for (var i = 0; i < this.warning_status.length; i++) {
                    if (this.warning_status[i].byte == 2) {
                        // 2个字节的数据
                        this.warning_status[i].paramValue = datalist.getUint16(
                            start + offset,
                            false
                        );
                        offset += 2;
                    } else {
                        // 1个字节的数据
                        this.warning_status[i].paramValue = datalist.getUint8(
                            start + offset,
                            false
                        );
                        offset += 1;
                    }
                }
            },
            // 解析历史功率数据信息
            prasHistoryPowerData: function(datalist, start, length) {
                var offset = 0;
                for (var i = 0; i < this.history_power.length; i++) {
                    if (this.history_power[i].byte == 2) {
                        // 2个字节的数据
                        this.history_power[i].paramValue = datalist.getUint16(
                            start + offset,
                            false
                        );
                        offset += 2;
                    } else {
                        // 1个字节的数据
                        this.history_power[i].paramValue = datalist.getUint8(
                            start + offset,
                            false
                        );
                        offset += 1;
                    }
                }
            },
            // 解析总功率数据信息
            prasTotalPowerData: function(datalist, start, length) {
                var offset = 0;
                for (var i = 0; i < this.total_power.length; i++) {
                    if (this.total_power[i].byte == 2) {
                        // 2个字节的数据
                        this.total_power[i].paramValue = datalist.getUint16(
                            start + offset,
                            false
                        );
                        offset += 2;
                    } else {
                        // 1个字节的数据
                        this.total_power[i].paramValue = datalist.getUint8(
                            start + offset,
                            false
                        );
                        offset += 1;
                    }
                }
                // alert(JSON.stringify(this.total_power));
            },
            // 解析数字成为二进制数组
            // 例如一个字节 16 =>  00010000
            // 例如两个字节 16 =>  00000000 00010000
            parseVauleToBinary: function(object) {
                var result = object.byte == 2 ? "0000000000000000" : "00000000";
                var value = Number(object.paramValue).toString(2);
                return result.substring(0, result.length - value.length) + value;
            },

            getRunningStatus: function(binaryarray) {
                // 运行状态字是两个字节
                var pos = 0;
                for (var i = 0; i < 16; i++) {
                    // 解析第一个字节
                    this.running_status_mean[i].paramValue = parseInt(String(binaryarray[0]).substring(pos, pos + this.running_status_mean[i].bit), 2);
                    pos = pos + this.running_status_mean[i].bit;
                }

                pos = 0;
                for (var i = 0; i < 16; i++) {
                    // 解析第二个字节
                    this.running_status_mean[16 + i].paramValue = parseInt(String(binaryarray[1]).substring(pos, pos + this.running_status_mean[i].bit), 2);
                    pos = pos + this.running_status_mean[i].bit;
                }
            },
            // 异或校验函数
            getCheckData: function(binaryarray) {
                var checkdata = 0x0f;
                for (var i = 0; i < binaryarray.byteLength - 2; i++) {
                    checkdata = checkdata ^ binaryarray[i];
                }
                return checkdata;
            },
            // 将开关机的指令下发给设备PCU
            sendSwitchFlagCommand: function(flag) {
                var message = "";
                // 加工二进制的 bytearray 发送控制命令 COMMOND 0x64
                // PcuOnOff Wifi    change  Wifi SSID Wifi password
                //  1 byte  1 byte  2 byte  2byte
                var data = new Uint8Array(15);
                data[0] = 0xfe;
                data[1] = 0x55;
                data[2] = 0x64;
                data[3] = 0x14;
                data[4] = 0x64;
                data[5] = 0x00;
                data[6] = 0x06;
                if (flag) {
                    data[7] = 0x55;
                    message = "开机指令已下发";
                } else {
                    data[7] = 0xaa;
                    message = "关机指令已下发";
                }
                data[8] = 0x01;
                data[9] = 0x01;
                data[10] = 0x01;
                data[11] = 0x01;
                data[12] = 0x01;
                data[13] = this.getCheckData(data);
                data[14] = 0xae;
                this.socketclient.write(data);

                this.$f7.dialog.alert(
                    this.$t("app.message.commandsend"),
                    this.$t("app.message.tip")
                );
            },
            // 时间校验
            sendTime: function() {
                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                var hour = date.getHours();
                var minute = date.getMinutes();
                var second = date.getSeconds();
                //alert("现在时间是："+this.year+"-"+this.month+"-"+this.date+" "+this.hour+":"+this.minute+":"+this.second);
                // 加工二进制的 bytearray 发送控制命令 COMMOND 0x64
                var data = new Uint8Array(16);
                data[0] = 0xfe;
                data[1] = 0x55;
                data[2] = 0x64;
                data[3] = 0x14;
                data[4] = 0x68;
                data[5] = 0x00;
                data[6] = 0x07;
                if (this.year <= 255) {
                    data[7] = 0x00;
                    data[8] = year;
                } else {
                    data[7] = year >> 8;
                    data[8] = year & 255;
                }
                data[9] = month;
                data[10] = day;
                data[11] = hour;
                data[12] = minute;
                data[13] = second;
                data[14] = this.getCheckData(data);
                data[15] = 0xae;
                // alert("data:"+JSON.stringify(data));
                this.socketclient.write(data);
            },
            sendDeviceRunningParameters: function() {
                // 获取 datalength
                let datalength = 0;
                // console.log(JSON.stringify(this.settingParamsters, " ", 4));
                for (var i = 0; i < this.settingParamsters.length; i++) {
                    datalength += this.settingParamsters[i].byte;
                }
                var data = new Uint8Array(datalength + 9 + 4); // 数据长度+9  +4是2两个位解析的字节
                data[0] = 0xfe;
                data[1] = 0x55;
                data[2] = 0x64;
                data[3] = 0x14;
                data[4] = 0x65;
                if (datalength + 4 <= 255) {
                    data[5] = 0x00;
                    data[6] = Number(datalength + 4);
                } else {
                    data[5] = Number(datalength + 4) >> 8;
                    data[6] = Number(datalength + 4) & 255;
                }
                // this.$f7.dialog.alert(datalength + 4);

                var offset = 0,
                    bitBuffer = [];

                for (i = 0; i < this.settingParamsters.length; i++) {
                    // 数据区

                    if (this.settingParamsters[i].byte == 1) {
                        // 一个字节的

                        data[7 + offset] = this.settingParamsters[i].paramValue;
                        offset += this.settingParamsters[i].byte;
                    } else if (this.settingParamsters[i].byte == 2) {
                        // 两个字节的

                        if (this.settingParamsters[i].paramValue <= 255) {
                            data[7 + offset] = 0x00;
                            data[8 + offset] = this.settingParamsters[i].paramValue;
                        } else {
                            data[7 + offset] = this.settingParamsters[i].paramValue >> 8;
                            data[8 + offset] = this.settingParamsters[i].paramValue & 255;
                        }
                        offset += this.settingParamsters[i].byte;
                    } else {
                        // 按位
                        bitBuffer.push(this.settingParamsters[i].paramValue);
                        if (bitBuffer.length == 8) {
                            data[7 + offset] = 0x00;
                            data[8 + offset] = parseInt(bitBuffer.join(""), 2);
                            offset += 2;
                            bitBuffer = [];
                        }
                    }
                }
                data[7 + offset] = this.getCheckData(data); // 校验位
                data[8 + offset] = 0xae; // 结束位
                // console.log(data);
                this.socketclient.write(data);
                this.$f7.toast.create({
                    text: this.$t("app.message.commandsend"),
                    position: "center",
                    closeTimeout: 2000,
                }).open();
            },

            // 下发  -   工作模式 - 时段电价 参数设置命令
            sendWorkingModeParameter: function() {
                let datalength = 0;
                console.log(JSON.stringify(this.workingModeParameter, " ", 4));
                // debugger;
                for (var i = 0; i < this.workingModeParameter.length; i++) {
                    datalength += this.workingModeParameter[i].byte;
                }
                // console.log(datalength);
                // this.$f7.dialog.alert("数据长度 ： " + datalength, this.$t('app.message.tip'));
                // debugger
                var data = new Uint8Array(datalength + 9); // 数据长度+9
                data[0] = 0xfe;
                data[1] = 0x55;
                data[2] = 0x64;
                data[3] = 0x14;
                data[4] = 0x66; // command

                if (datalength + 4 <= 255) {
                    data[5] = 0x00;
                    data[6] = Number(datalength);
                } else {
                    data[5] = Number(datalength) >> 8;
                    data[6] = Number(datalength) & 255;
                }
                // this.$f7.dialog.alert(datalength + 4);

                var offset = 0,
                    bitBuffer = [];
                debugger;
                for (i = 0; i < this.workingModeParameter.length; i++) {
                    // 数据区

                    if (this.workingModeParameter[i].byte == 1) {
                        // 一个字节的

                        data[7 + offset] = this.workingModeParameter[i].paramValue;
                        offset += this.workingModeParameter[i].byte;
                    } else if (this.workingModeParameter[i].byte == 2) {
                        // 两个字节的

                        if (this.workingModeParameter[i].paramValue <= 255) {
                            data[7 + offset] = 0x00;
                            data[8 + offset] = this.workingModeParameter[i].paramValue;
                        } else {
                            data[7 + offset] = this.workingModeParameter[i].paramValue >> 8;
                            data[8 + offset] = this.workingModeParameter[i].paramValue & 255;
                        }
                        offset += this.workingModeParameter[i].byte;
                    } else {
                        // 按位
                        bitBuffer.push(this.workingModeParameter[i].paramValue);
                        if (bitBuffer.length == 8) {
                            data[7 + offset] = 0x00;
                            data[8 + offset] = parseInt(bitBuffer.join(""), 2);
                            offset += 2;
                            bitBuffer = [];
                        }
                    }
                }
                debugger;
                data[7 + offset] = this.getCheckData(data); // 校验位
                data[8 + offset] = 0xae; // 结束位
                console.log("下发工作模式参数:"+data);
                this.socketclient.write(data);
                this.$f7.toast.create({
                    text: this.$t("app.message.commandsend"),
                    position: "center",
                    closeTimeout: 2000,
                }).open();
            },

            // 下发 - 自定义模式设置
            sendCustomeModeParameter: function() {
                // debugger;
                let datalength = 8;
                console.log(JSON.stringify(this.customeModeParameter, " ", 4));
                var data = new Uint8Array(datalength + 9); // 数据长度+9
                data[0] = 0xfe;
                data[1] = 0x55;
                data[2] = 0x64;
                data[3] = 0x14;
                data[4] = 0x67; // command

                if (datalength + 4 <= 255) {
                    data[5] = 0x00;
                    data[6] = Number(datalength);
                } else {
                    data[5] = Number(datalength) >> 8;
                    data[6] = Number(datalength) & 255;
                }
                // this.$f7.dialog.alert(datalength + 4);
                for (var i = 0; i < this.customeModeParameter.length; i++) {
                    // 数据区
                    if (this.customeModeParameter[i] == true) {
                        data[7 + i] = 1;
                    } else {
                        data[7 + i] = 2;
                    }
                }
                data[15] = this.getCheckData(data); // 校验位
                data[16] = 0xae; // 结束位
                console.log("自定义模式数据："+data);
                this.socketclient.write(data);
                this.$f7.toast.create({
                    text: this.$t("app.message.commandsend"),
                    position: "center",
                    closeTimeout: 2000,
                }).open();
            },

            // 查询统计信息
            sendStaticstsParameter: function() {
                // console.log(JSON.stringify(this.customeModeParameter, " ", 4));
                var data = new Uint8Array(9); // 数据长度+9
                data[0] = 0xfe;
                data[1] = 0x55;
                data[2] = 0x64;
                data[3] = 0x14;
                data[4] = 0x99; // command  查询统计信息

                data[5] = 0x00;
                data[6] = 0x00;

                data[7] = this.getCheckData(data); // 校验位
                data[8] = 0xae; // 结束位
                // console.log(data);
                this.socketclient.write(data);
                setTimeout(this.sendTime,1000);
                // this.$f7.dialog.alert(this.$t('app.message.commandsend'), this.$t('app.message.tip'));
            },
            // CRC校验函数
            uiCRC16: function(puchMsg, uiDataLen) {
                var i = 0;
                var uchCRCHi = 0xff; /* 高CRC字节初始化 */
                var uchCRCLo = 0xff; /* 低CRC 字节初始化 */
                var uIndex = null; /* CRC循环中的索引 */
                while (uiDataLen-- /* 传输消息缓冲区 */) {
                    uIndex = uchCRCHi ^ puchMsg[i++]; /* 计算CRC */
                    uchCRCHi = uchCRCLo ^ this.auchCRCHi[uIndex];
                    uchCRCLo = this.auchCRCLo[uIndex];
                }
                return (uchCRCHi << 8) | uchCRCLo;
            }
        }
    };
</script>

<style lang="scss">
    @import "./assets/sass/publicSize";
    .page-content::-webkit-scrollbar {
        display: none;
    }
    .ios .tabbar,
    .ios .app-main.tabbar-labels {
        background-color: $base-mainbackground-color;
    }
    .ios .app-main.navbar {
        background-color: $base-mainbackground-color;
    }
    .md .tabbar-labels a.link {
        padding-top: 0px;
        padding-bottom: 12px;
    }
    .md .toolbar a.link i + span {
        margin-left: 0;
    }
    .filter {
        right: 3%;
        top: 9%;
    }
    .help {
        right: 3%;
        top: calc(9% + 50px);
    }
    .overlink {
        display: block;
        width: 40px;
        height: 40px;
        border: 1px solid $base-mainborder-color;
        background-color: $secondlybackground-color !important;
    }
    .overlink span {
        font-size: 12px;
        display: block;
        line-height: 15px;
        text-align: center;
        margin-left: 0 !important;
    }
    .filter span {
        color: $base-active-color;
    }
    .filter .icon.iconfont {
        color: $base-active-color;
    }
    .overlink .icon.iconfont {
        vertical-align: top;
    }
    .ios .tabbar i.icon,
    .ios .tabbar-labels i.icon {
        font-size: 34px;
    }
    .ios .tabbar-labels i.icon.icon-gaojing {
        font-size: 22px;
    }
    .ios .toolbar a.link {
        line-height: 22px;
        height: 44px;
    }
    .ios .tabbar-labels a {
        color: $base-normal-color;
    }
    .md .navbar {
        height: 56px;
        background: #ffffff;
        color: #000;
        font-size: 20px;
        font-weight: 100;
    }
    .md .icon-back {
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'24'%20height%3D'24'%20viewBox%3D'0%200%2024%2024'%3E%3Cpath%20d%3D'M20%2011H7.83l5.59-5.59L12%204l-8%208%208%208%201.41-1.41L7.83%2013H20v-2z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E");
    }
    .md .button.button-outline {
        border: 1px solid $base-active-color;
    }
    .md .button {
        color: $base-active-color;
    }
    .md .navbar .title {
        margin: 0 !important;
        font-weight: 100;
    }
    .badge{
        width: 6px !important;
        height: 6px !important;
        padding: 0 !important;
        margin: 0 !important;
        border-radius: 6px;
        position: absolute;
        top:0;
        right: calc(50% - 15px);
        background-color: red;
    }
    .progress{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.4);
        z-index: 13000;
        /*visibility: hidden;*/
        -webkit-transition-duration: .4s;
        transition-duration: .4s;
    }
    .progress_dialog{
        width: 270px;
        margin-left: -135px;
        text-align: center;
        border-radius: 13px;
        color: #000;
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0) scale(1);
        transform: translate3d(0, 0, 0) scale(1);
        position: absolute;
        z-index: 13500;
        left: 50%;
        top: 50%;
        overflow: hidden;
        -webkit-transition-property: opacity, -webkit-transform;
        transition-property: transform, opacity, -webkit-transform;
        display: none;
        -webkit-transition-duration: 400ms;
        transition-duration: 400ms;
    }
    .dialog_inner{
        border-radius: 13px;
        padding: 15px;
        position: relative;
        text-align: center;
        font-size: 14px;
        color: #000;
        background: rgba(255, 255, 255, 0.95);
    }
    .dialog_title{
        font-size: 16px;
        text-align: center;
        font-weight: 600;
        -webkit-box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Microsoft YaHei";
    }
    .dialog_preloader{
        margin-top: 5px;
        width: 34px;
        height: 34px;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
        background-position: 50%;
        background-size: 100%;
        background-repeat: no-repeat;
        -webkit-animation: ios-preloader-spin 1s steps(12, end) infinite;
        animation: ios-preloader-spin 1s steps(12, end) infinite;
        display: inline-block;
        vertical-align: middle
    }
</style>
<style lang="scss" scoped>
    @import "./assets/sass/publicSize";
    .containter {
        width: 100%;
        height: 100%;
    }
    .amap-demo {
        height: 300px;
    }
    .toolicon {
        font-size: 14px;
    }
    .toolicon.active-state,
    .toolicon.active {
        color: $base-active-color;
    }
    // 只有该界面中的视图高度是计算的
    .views,
    .view {
        height: calc(100% - 53px);
    }
</style>
