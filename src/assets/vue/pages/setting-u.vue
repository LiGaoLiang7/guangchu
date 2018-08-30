<!--  给用户使用的设置量 -->
<template>
  <f7-page>
      <f7-navbar>
          <f7-nav-left>
              <f7-link class="panel-open" open-panel="left" icon="fa fa-bars"></f7-link>
          </f7-nav-left>
          <div class="title">{{$t('app.toolbox.param')}}</div>
      </f7-navbar>
    <div class="list inline-labels no-hairlines-md setting">
      <ul>
         <div class="block-title">{{$t('app.setting.ct_cm_set')}}</div>
         <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">{{$t('app.setting.sw_machine')}}</div>
                <div class="item-after languageswitch">
                  <label class="toggle toggle-init" @click="sendOpenCtrl">
                    <input type="checkbox" name="toggle" value="yes" v-model="openflag"><i class="toggle-icon"></i>
                  </label>
                </div>
              </div>
            </div>
         </li>
         <div class="block-title">{{$t('app.setting.workParam')}}</div>
         <!--  <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">{{$t('app.setting.basicWorkMode')}}</div>
                  <div class="item-after">
                    <select name="runningmodel" @change="setDatatoParameter($event, 1)">
                      <option value="0" selected>{{$t('app.setting.choose')}}</option>
                      <option value="1">{{$t('app.setting.Universal')}}</option>
                      <option value="2">{{$t('app.setting.Off_grid')}}</option>
                      <option value="3">{{$t('app.setting.Alternate')}}</option>
                      <option value="4">{{$t('app.setting.Economic')}}</option>
                    </select>
                    <i class="f7-icons size-50">chevron_right</i>
                  </div>
              </div>
            </div>
          </li> -->
           <!--  <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">{{$t('app.setting.C_power_AC')}}</div>
                  <div class="item-after">
                    <input type="number" name="email" placeholder="0" @change="setDatatoParameter($event, 11)">
                  </div>
                </div>
              </div>
            </li> -->
            <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">{{$t('app.setting.GridCode')}}</div>
                  <div class="item-after">
                    <select name="netcode" @change="setDatatoParameter($event, 19)">
                      <option value="0" selected>{{$t('app.setting.choose')}}</option>
                      <option value="1">GBT19964</option>
                      <option value="2">IEC61727</option>
                      <option value="3">IEEE1547</option>
                      <option value="4">CUSTOM_ISLAND</option>
                      <option value="5">CUSTOM_LVRT</option>
                    </select>
                    <i class="f7-icons size-50">chevron_right</i>
                  </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">{{$t('app.setting.DC_batteryType')}}</div>
                  <div class="item-after">
                    <select name="batterytype" @change="[setDatatoParameter($event, 25), changeBatteryType($event)]">
                      <option value="0" selected>{{$t('app.setting.choose')}}</option>
                      <option value="1">{{$t('app.setting.Li_Battery')}}</option>
                      <option value="2">{{$t('app.setting.L_A_Battery')}}</option>
                    </select>
                    <i class="f7-icons size-50">chevron_right</i>
                  </div>
              </div>
            </div>
          </li>
          <li class="item-content item-input" v-show="batteryType == 2">
            <div class="item-inner" style="padding: 17px 15px 17px 0px;">
              <div class="item-title item-label popover-open" data-popover=".popover-about">{{$t('app.setting.Battery_AH')}}</div>
              <div class="item-input-wrap" style="width: 40%;">
               <!--  <div class="range-slider range-slider-init" data-label="true">
                  <input type="range" value="72" min="72" max="5000" step="10"  @change="setDatatoParameter($event, 35)">
                </div> -->
                <input type="number" name="email" placeholder="0" min="7.2" max="500"  @change="setDatatoParameter($event, 35)">
              </div>
            </div>
          </li>
          <div class="block-title">{{$t('app.setting.reset')}}</div>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">{{$t('app.setting.reset')}}</div>
                <div class="item-after languageswitch">
                  <label class="toggle toggle-init">
                    <input type="checkbox" name="toggle2" value="yes" @change="setDatatoParameter($event, 31)"><i class="toggle-icon"></i>
                  </label>
                </div>
              </div>
            </div>
         </li>

         <div class="col"><a class="button convert-form-to-data button-outline button-big" href="#" @click="sendSetParameter" style="width: 85%; margin: 10px auto;">{{$t('app.common.sendctrl')}}</a></div>
        </ul>
          <!-- <div class="col"><a class="button convert-form-to-data button-outline button-big" href="#" @click="sendModeSetParameter" style="width: 85%; margin: 10px auto;">{{$t('app.common.sendctrl')}}</a></div> -->
    </div>
    <!-- 时段电价设置 -->
    <div class="list inline-labels no-hairlines-md setting">
      <ul>
        <div class="block-title">{{$t('app.setting.workModeSetting')}}</div>
          <li><!--并网功率-->
              <div class="item-content">
                  <div class="item-inner">
                      <div class="item-title">{{$t('app.workmode.GridPC')}}</div>
                      <div class="item-after">
                          <input type="number" name="" placeholder="" v-model="workMode[0]" @change="changeWorkModeParameterSettring($event, 4)">
                          <i class="">W</i>
                      </div>
                  </div>
              </div>
          </li>
          <!--<li>&lt;!&ndash;电网电压&ndash;&gt;-->
              <!--<div class="item-content">-->
                  <!--<div class="item-inner">-->
                      <!--<div class="item-title">{{$t('app.workmode.GridVoltage')}}</div>-->
                      <!--<div class="item-after">-->
                          <!--<input type="number" name="" placeholder="" v-model="workMode[5]" @change="changeWorkModeParameterSettring($event, 9)">-->
                          <!--<i class="">V</i>-->
                      <!--</div>-->
                  <!--</div>-->
              <!--</div>-->
          <!--</li>-->
          <!--<li>&lt;!&ndash;电网频率&ndash;&gt;-->
              <!--<div class="item-content">-->
                  <!--<div class="item-inner">-->
                      <!--<div class="item-title">{{$t('app.workmode.GridFrequency')}}</div>-->
                      <!--<div class="item-after">-->
                          <!--<input type="number" name="" placeholder="" v-model="workMode[6]" @change="changeWorkModeParameterSettring($event, 10)">-->
                          <!--<i class="">HZ</i>-->
                      <!--</div>-->
                  <!--</div>-->
              <!--</div>-->
          <!--</li>-->
          <!--<li>&lt;!&ndash;输出类型&ndash;&gt;-->
              <!--<div class="item-content">-->
                  <!--<div class="item-inner">-->
                      <!--<div class="item-title">{{$t('app.workmode.OutputType')}}</div>-->
                      <!--<div class="item-after">-->
                          <!--<select name="outputtype" v-model="workMode[7]" @change="changeWorkModeParameterSettring($event, 11)">-->
                              <!--<option value="0" selected>{{$t('app.setting.choose')}}</option>-->
                              <!--<option value="1">{{$t('app.workmode.FourLine')}}</option>-->
                              <!--<option value="2">{{$t('app.workmode.ThreeLine')}}</option>-->
                          <!--</select>-->
                          <!--<i class="f7-icons size-50">chevron_right</i>-->
                      <!--</div>-->
                  <!--</div>-->
              <!--</div>-->
          <!--</li>-->
          <li>
             <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">{{$t('app.workmode.workingMode')}}</div>
                    <div class="item-after">
                      <select name="runningmodel" v-model="workMode[2]" @change="changeWorkModeParameterSettring($event, 6)">
                        <option value="0" selected>{{$t('app.setting.choose')}}</option>
                        <option value="1">{{$t('app.workmode.PVMode')}}</option>
                        <option value="2">{{$t('app.workmode.batteryMode')}}</option>
                        <option value="3">{{$t('app.workmode.customMode')}}</option>
                        <option value="4">{{$t('app.workmode.commandMode')}}</option>
                      </select>
                      <i class="f7-icons size-50">chevron_right</i>
                    </div>
                </div>
              </div>
          </li>
          <li>
            <div class="item-content" v-show="workingModeParameter[6].paramValue == 4">
              <div class="item-inner">
                <div class="item-title">{{$t('app.workmode.BatteryChargePower')}}</div>
                <div class="item-after">
                  <input type="number" name="" placeholder="" v-model="workMode[1]" @change="changeWorkModeParameterSettring($event, 5)">
                  <i class="">W</i>
                </div>
              </div>
            </div>
          </li> 
          <li v-show="workingModeParameter[6].paramValue == 4"> <!-- 当时指令模式的时候显示 -->
            <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">{{$t('app.workmode.command')}}</div>
                    <div class="item-after">
                      <select name="runningmodel" v-model="workMode[4]" @change="changeWorkModeParameterSettring($event, 8)">
                        <option value="0" selected>{{$t('app.setting.choose')}}</option>
                        <option value="1">{{$t('app.workmode.PVtoBattery')}}</option>
                        <option value="2">{{$t('app.workmode.GirdtoBattery')}}</option>
                        <option value="3">{{$t('app.workmode.BatteryDischarge')}}</option>
                        <option value="4">{{$t('app.workmode.BatteryIDEL')}}</option>
                      </select>
                      <i class="f7-icons size-50">chevron_right</i>
                    </div>
                </div>
              </div>
          </li>
          <li><!--并离网-->
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">{{$t('app.workmode.PV_CONN_OFF')}}</div>
                    <div class="item-after">
                      <select name="runningmodel" v-model="workMode[3]" @change="changeWorkModeParameterSettring($event, 7)">
                        <option value="0" selected>{{$t('app.setting.choose')}}</option>
                        <option value="1">{{$t('app.workmode.PV_On_Grid')}}</option>
                        <option value="2">{{$t('app.workmode.PV_Off_Grid')}}</option>
                      </select>
                      <i class="f7-icons size-50">chevron_right</i>
                    </div>
                </div>
              </div>
         </li>
         <div class="block-title relt">{{$t('app.custommode.price')}}{{$t('app.custommode.setting')}} </div>
          <li><!--尖-->
              <div class="item-content">
                  <div class="item-inner">
                      <div class="item-title">{{$t('app.workmode.tip')}}</div>
                      <div class="item-after">
                          <input type="number" step="0.1" min="0" class="" v-model="energyPrice[0]" @change="changeWorkModeParameterSettring($event, 0)" style="direction: ltr;text-align: right;">
                          <i class="">{{$t('app.units.money')}}</i>
                      </div>
                  </div>
              </div>
          </li>
          <li><!--峰-->
              <div class="item-content">
                  <div class="item-inner">
                      <div class="item-title">{{$t('app.workmode.peak')}}</div>
                      <div class="item-after">
                          <input type="number" step="0.1" min="0" class="" v-model="energyPrice[1]" @change="changeWorkModeParameterSettring($event, 1)" style="direction: ltr;text-align: right;">
                          <i class="">{{$t('app.units.money')}}</i>
                      </div>
                  </div>
              </div>
          </li>
          <li><!--平-->
              <div class="item-content">
                  <div class="item-inner">
                      <div class="item-title">{{$t('app.workmode.flat')}}</div>
                      <div class="item-after">
                          <input type="number" step="0.1" min="0" class="" v-model="energyPrice[2]" @change="changeWorkModeParameterSettring($event, 2)" style="direction: ltr;text-align: right;">
                          <i class="">{{$t('app.units.money')}}</i>
                      </div>
                  </div>
              </div>
          </li>
          <li><!--谷-->
              <div class="item-content">
                  <div class="item-inner">
                      <div class="item-title">{{$t('app.workmode.Valley')}}</div>
                      <div class="item-after">
                          <input type="number" step="0.1" min="0" class="" v-model="energyPrice[3]" @change="changeWorkModeParameterSettring($event, 3)" style="direction: ltr;text-align: right;">
                          <i class="">{{$t('app.units.money')}}</i>
                      </div>
                  </div>
              </div>
          </li>
           <div class="block-title relt">{{$t('app.custommode.period')}}{{$t('app.custommode.setting')}} 
              <input type="text" placeholder="+"  class="abs addcustoms col button color-blue" readonly="readonly" id="demo-picker-custom-toolbar"/>
              <span class="abs addicon">+</span>
           </div>
            <li>
              <div class="item-input">
                <div class="item-inner">
                  <div class="item-input-wrap layoutFlex layoutFlexRow layoutFlexSpaceAround">
                    <span>{{$t('app.custommode.period')}}</span>
                    <span>{{$t('app.custommode.startTime')}}</span>
                    <span>{{$t('app.custommode.endTime')}}</span>
                  </div>
                </div>
              </div>
           </li>
            <li v-for="(item, index) in customeData">
              <div class="item-input">
                <div class="item-inner relt">
                  <div class="item-input-wrap layoutFlex layoutFlexRow layoutFlexSpaceAround ">
                    <span>{{getPeriod(item[0])}}</span>
                    <span>{{item[1]}}:{{item[2]}}</span>
                    <span>{{item[3]}}:{{item[4]}}</span>
                  </div>
                  <span class="abs deleterow col button button-fill color-red" @click="deleterow(index)"> - </span>
                </div>
              </div>
           </li>
           <li v-show="false">
              <div class="item-content item-input">
                <div class="item-inner">
                  <div class="item-input-wrap">
                    
                  </div>
                </div>
              </div>
           </li>
       </ul>
       <div class="col"><a class="button convert-form-to-data button-outline button-big" href="#" @click="sendTimePriceParameter" style="width: 85%; margin: 10px auto;">{{$t('app.common.sendctrl')}}</a></div>
     </div>
    <!-- 时段电价设置/-->
    
    <!-- 自定义模式设置 -->
    <div class="list inline-labels no-hairlines-md setting" v-show="workingModeParameter[6].paramValue == 3">
      <ul>
         <div class="block-title relt">{{$t('app.workmode.customMode')}}{{$t('app.custommode.setting')}}</div>
          <li>
              <div class="item-input">
                <div class="item-inner">
                  <div class="item-input-wrap layoutFlex layoutFlexRow layoutFlexSpaceAround">
                    <span>{{$t('app.custommode.period')}}</span>
                    <span>{{$t('app.custommode.isSOC_10_mode')}}</span>
                    <span>{{$t('app.custommode.isSOC_20_mode')}}</span>
                  </div>
                </div>
              </div>
          </li>

          <li>
              <div class="item-input">
                <div class="item-inner">
                  <div class="item-input-wrap layoutFlex layoutFlexRow layoutFlexSpaceAround">
                    <span>{{$t('app.custommode.tip')}}</span>
                    <span class="tl">
                      <input type="checkbox" name="demo-checkbox" value=""  v-model="customeModeFlag[0]" id="check1_1"/>
                      <label for="check1_1">{{$t('app.custommode.PVCharge')}}</label> 
                    </span>
                    <span>
                      <input type="checkbox" name="demo-checkbox" value=""  v-model="customeModeFlag[1]"  id="check1_2"/>
                      <label for="check1_2">{{$t('app.custommode.BatteryDischarge')}}</label>
                    </span>
                  </div>
                </div>
              </div>
          </li>

          <li>
              <div class="item-input">
                <div class="item-inner">
                  <div class="item-input-wrap layoutFlex layoutFlexRow layoutFlexSpaceAround">
                    <span>{{$t('app.custommode.peak')}}</span>
                    <span class="tl">
                      <input type="checkbox" name="demo-checkbox" value="" v-model="customeModeFlag[2]" id="check2_1"/>
                      <label for="check2_1">{{$t('app.custommode.PVCharge')}}</label>
                    </span>
                    <span class="tl">
                      <input type="checkbox" name="demo-checkbox" value="" v-model="customeModeFlag[3]" id="check2_2"/>
                      <label for="check2_2">{{$t('app.custommode.BatteryDischarge')}}</label>
                    </span>
                  </div>
                </div>
              </div>
          </li>

          <li>
              <div class="item-input">
                <div class="item-inner">
                  <div class="item-input-wrap layoutFlex layoutFlexRow layoutFlexSpaceAround">
                    <span>{{$t('app.custommode.flat')}}</span>
                    <span class="tl">
                      <input type="checkbox" name="demo-checkbox" value="" id="check3_1" v-model="customeModeFlag[4]" checked="checked" disabled="" />
                      <label for="check3_1">{{$t('app.custommode.PVCharge')}}</label>
                    </span>
                    <span></span>
                  </div>
                </div>
              </div>
          </li>
          <li>
              <div class="item-input">
                <div class="item-inner">
                  <div class="item-input-wrap layoutFlex layoutFlexRow layoutFlexSpaceAround">
                    <span>{{$t('app.custommode.Valley')}}</span>
                    <span class="tl">
                      <input type="checkbox" name="demo-checkbox" value="" v-model="customeModeFlag[5]" id="check4_1"/>
                      <label for="check4_1">{{$t('app.custommode.GridCharge')}}</label>
                    </span>
                    <span></span>
                  </div>
                </div>
              </div>
          </li>
       </ul>
       <div class="col">
           <!--<f7-button big raised fill>Raised Fill</f7-button>-->
           <a class="button convert-form-to-data button-outline button-big" href="#" style="width: 85%; margin: 10px auto;" @click="sendCustomeFlagSet">{{$t('app.common.sendctrl')}}</a></div>
       </div>

    <!-- 自定义模式设置 -->
      <div class="popover popover-about">
        <div class="popover-inner">
          <div class="block">
            <p>{{$t('app.setting.Battery_AH')}} : 7.2~500 </p>
          </div>
        </div>
    </div>
  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page, f7BlockTitle } from 'framework7-vue';
  export default {
    data : function(){
      return {
        openflag : null,
        batteryType : 2,
        // batteryAH : 72,
        // 设备参数设置命令下发
        deviceParamster : [
          { paramName : "运行模式",                         paramValue : 0x00, byte : 2, unit : "", isshow : 1 }, //  0   HEX(int8)       1：并网  2：离网  
          { paramName : "基本工作模式",                     paramValue : 0x01, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   1: 通用模式 2:离网模式3：备用模式4：经济模式
          { paramName : "并网模式设置",                     paramValue : 0x02, byte : 2, unit : "", isshow : 1 }, //     HEX(int8)   R/W   1：恒流模式2：恒压模式3：恒功率模式（DC）4：恒功率模式（AC） 5 独立逆变
          { paramName : "无功调节方式",                     paramValue : 0x01, byte : 2, unit : "", isshow : 1 }, //     HEX(int8)   R/W   1:功率值2:百分比3:功率因数
          { paramName : "电网电压跌落调节方式",             paramValue : 0x02, byte : 2, unit : "", isshow : 1 }, //     HEX(int8)   R/W   1：孤岛保护（默认）2：低电压穿越3：无缝切换
          { paramName : "离网自起机模式设置",               paramValue : 0x00ee, byte : 2, unit : "", isshow : 1 }, //  5     HEX(uint16)   W   0XEE00:使能0X00EE:禁止 
          { paramName : "无缝切换手动模式并离网控制",       paramValue : 0x01, byte : 2, unit : "", isshow : 1 }, //    HEX(uint8)  R/W     1：并网转离网2：离网转并网其他：无效
          { paramName : "恒流模式电流",                     paramValue : 0x02, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   
          { paramName : "恒压模式限制电流",                 paramValue : 0x03, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   
          { paramName : "恒压模式电压",                     paramValue : 0x04, byte : 2, unit : "", isshow : 1 }, //     HEX(uint16)   R/W 
          { paramName : "恒功率模式功率（DC）",             paramValue : 0x05, byte : 2, unit : "", isshow : 1 }, //  10 HEX(int16)  R/W   
          { paramName : "恒功率模式功率（AC）",             paramValue : 0x06, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   
          { paramName : "独立逆变电压",                     paramValue : 0x07, byte : 2, unit : "", isshow : 1 }, //     HEX(uint16)   R/W 
          { paramName : "独立逆变频率",                     paramValue : 0x08, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   
          { paramName : "输出类型设置",                     paramValue : 0x09, byte : 2, unit : "", isshow : 0 }, //     HEX(uint8)  R/W      0:三相四线1:三相三线
          { paramName : "无功比例",                         paramValue : 0x0A, byte : 2, unit : "", isshow : 1 }, //  15 HEX(uint16)   R/W
          { paramName : "自老化模式",                       paramValue : 0x00AA, byte : 2, unit : "", isshow : 0 }, //     HEX(int16)  R/W   0XAA00:使能0X00AA:禁止
          { paramName : "额定功率",                         paramValue : 0x0B, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   
          { paramName : "电网电压",                         paramValue : 0x0C, byte : 2, unit : "", isshow : 1 }, //     HEX(uint16)   R/W 1:220V,2:315V3:380V
          { paramName : "电网代码",                         paramValue : 0x0D, byte : 2, unit : "", isshow : 0 }, //     HEX(int16)  R/W   1：GBT199642：IEC617273：IEEE15474：CUSTOM_ISLAND5：CUSTOM_LVRT
          { paramName : "遥设有功功率值",                   paramValue : 0x0E, byte : 2, unit : "", isshow : 1 }, //  20 HEX(int16)  R/W   
          { paramName : "遥设无功功率值",                   paramValue : 0x0F, byte : 2, unit : "", isshow : 1 }, //     HEX(uint16)   R/W 
          { paramName : "遥设功率因数",                     paramValue : 0x01, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   
          { paramName : "并网过载系数设置",                 paramValue : 0x02, byte : 2, unit : "", isshow : 0 }, //     HEX(int16)  R/W   
          { paramName : "PV侧电池类型",                     paramValue : 0x03, byte : 2, unit : "", isshow : 0 }, //     HEX(uint16)   R/W 1:PV2:锂电池 3：铅酸电池
          { paramName : "DC侧电池类型",                     paramValue : 0x04, byte : 2, unit : "", isshow : 0 }, //  25 HEX(uint16)   R/W 1:锂电池 2：铅酸电池
          { paramName : "有功功率变化率设置",               paramValue : 0x05, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   
          { paramName : "无功功率变化率设置",               paramValue : 0x06, byte : 2, unit : "", isshow : 1 }, //     HEX(uint16) R/W 
          { paramName : "设置绝缘阻抗告警值",               paramValue : 0x07, byte : 2, unit : "", isshow : 0 }, //     HEX(int16)  R/W   
          { paramName : "设置绝缘阻抗保护值",               paramValue : 0x08, byte : 2, unit : "", isshow : 0 }, //     HEX(int16)  R/W   
          { paramName : "设置电网额定频率",                 paramValue : 0x09, byte : 2, unit : "", isshow : 1 }, //  30 HEX(uint16)   R/W 
          { paramName : "恢复出厂设置",                     paramValue : 0x0A, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   
          { paramName : "电池均充电压",                     paramValue : 0x0B, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   1: 2.3V/cell 2: 2.32V/cell3: 2.35V/cell4: 2.37V/cell5: 2.40V/cell
          { paramName : "电池浮充电压",                     paramValue : 0x0C, byte : 2, unit : "", isshow : 1 }, //     HEX(uint16)   R/W 1: 2.2V/cell 2: 2.22V/cell3: 2.25V/cell4: 2.27V/cell5: 2.30V/cell
          { paramName : "电池周期自检",                     paramValue : 0x0D, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   1: 一个星期 2: 两个星期3: 一个月4: 二个月5: 六个月
          { paramName : "电池AH设置",                       paramValue : 0x0E, byte : 2, unit : "", isshow : 0 }, //  35 HEX(int16)  R/W   1: 48AH2: 72AH3: 100AH
          { paramName : "电池组数",                         paramValue : 0x0F, byte : 2, unit : "", isshow : 0 }, //     HEX(uint16)   R/W 
          { paramName : "电池节数",                         paramValue : 0x01, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "电池EOD设置",                      paramValue : 0x02, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   1: 1.65V/cell 2: 1.7V/cell2: 1.75V/cell
          { paramName : "电池均充保护时间设置",             paramValue : 0x03, byte : 2, unit : "", isshow : 0 }, //     HEX(int16)  R/W   1: 10小时 2: 24小时
          { paramName : "电池强制均充使能",                 paramValue : 0x04, byte : 2, unit : "", isshow : 1 }, //  40 HEX(uint8)  R/W 0XCC00:使能 0X00CC:禁止
          { paramName : "电池预告警使能",                   paramValue : 0x05, byte : 2, unit : "", isshow : 0 }, //     HEX(uint8)  R/W 0XBB00:使能 0X00BB:禁止
          { paramName : "锂电池故障",                   paramValue : 0x06, byte : 2, unit : "", isshow : 0 }, //     HEX(uint8)  R/W 0: 禁止 1:使能
          { paramName : "单体SOC过高",                      paramValue : 0x01, byte : 0, bit : 1, unit : "", isshow : 0 }, //     HEX(uint8)  R/W 1：异常 0：正常
          { paramName : "单体SOC过低",                      paramValue : 0x0, byte : 0, bit : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "单体过温",                         paramValue : 0x0, byte : 0, bit : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "单体欠温",                         paramValue : 0x0, byte : 0, bit : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "组端过压",                         paramValue : 0x0, byte : 0, bit : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "组端欠压",                         paramValue : 0x0, byte : 0, bit : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "单体过压",                         paramValue : 0x0, byte : 0, bit : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "单体欠压",                         paramValue : 0x0, byte : 0, bit : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "保留",                             paramValue : 0x0, byte : 0, bit : 1, unit : "", isshow : 0 }, //        HEX(uint8) R/W 1：异常 0：正常
          { paramName : "保留",                             paramValue : 0x01, byte : 0, bit : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "模块温度下限告警",                 paramValue : 0x0, byte : 0, bit : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "模块温度上限告警",                 paramValue : 0x0, byte : 0, bit : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "电芯电压差异过大",                 paramValue : 0x0, byte : 0, bit : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "电池组绝缘故障标志",               paramValue : 0x0, byte : 0, bit : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "电池组充电过流",                   paramValue : 0x0, byte : 0, bit : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "电池组放电过流",                   paramValue : 0x0, byte : 0, bit : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "Backup模式优先",                   paramValue : 0x08, byte : 2, unit : "", isshow : 0 }, //   0.1V  HEX(uint16)   R/W 250V-300V

          { paramName : "并机使能",                         paramValue : 0x09, byte : 2, unit : "", isshow : 0 }, //   0.1V  HEX(uint16)   R/W 250V-300V
          { paramName : "电网电压快保护上限设置",           paramValue : 0x0A, byte : 2, unit : "", isshow : 0 }, //   0.1V  HEX(uint16)   R/W 250V-300V
          { paramName : "电网电压快保护上限保护时间设置",   paramValue : 0x0B, byte : 2, unit : "", isshow : 0 }, //    ms  HEX(uint16)   R/W 50ms-5000ms
          { paramName : "电网电压慢保护上限设置",           paramValue : 0x0C, byte : 2, unit : "", isshow : 0 }, //   0.1V  HEX(uint16)   R/W   230V-270V
          { paramName : "电网电压慢保护上限保护时间设置",   paramValue : 0x0D, byte : 2, unit : "", isshow : 0 }, //    0.1s  HEX(uint16)   R/W 500ms-10mins
          { paramName : "电网电压快保护下限设置",           paramValue : 0x0E, byte : 2, unit : "", isshow : 0 }, //   0.1V  HEX(uint16)   R/W   22V-200V
          { paramName : "电网电压快保护下限保护时间设置",   paramValue : 0x0F, byte : 2, unit : "", isshow : 0 }, //    ms  HEX(uint16)   R/W 50ms-5000ms
          { paramName : "电网电压慢保护下限设置",           paramValue : 0x01, byte : 2, unit : "", isshow : 0 }, //   0.1V  HEX(uint16)   R/W   170V-210V
          { paramName : "电网电压慢保护下限保护时间设置",   paramValue : 0x02, byte : 2, unit : "", isshow : 0 }, //    ms  HEX(uint16)   R/W   500ms-10s
          { paramName : "电网频率快保护上限设置",           paramValue : 0x03, byte : 2, unit : "", isshow : 0 }, //   0.01Hz  HEX(uint16)   R/W   50.5Hz-53Hz
          { paramName : "电网频率快保护上限保护时间设置",   paramValue : 0x04, byte : 2, unit : "", isshow : 0 }, //    ms  HEX(uint16)   R/W 50ms-27000ms 
          { paramName : "电网频率慢保护上限设置",           paramValue : 0x05, byte : 2, unit : "", isshow : 0 }, //   0.01Hz  HEX(uint16)   R/W   50.2Hz-52Hz
          { paramName : "电网频率慢保护上限保护时间设置",   paramValue : 0x06, byte : 2, unit : "", isshow : 0 }, //    0.1s  HEX(uint16)   R/W 500ms-10mins
          { paramName : "电网频率快保护下限设置",           paramValue : 0x07, byte : 2, unit : "", isshow : 0 }, //   0.01Hz  HEX(uint16)   R/W   47Hz-48Hz
          { paramName : "电网频率快保护下限保护时间设置",   paramValue : 0x08, byte : 2, unit : "", isshow : 0 }, //    ms  HEX(uint16)   R/W 50ms-5000ms
          { paramName : "电网频率慢保护下限保护设置",       paramValue : 0x09, byte : 2, unit : "", isshow : 0 }, //  0.01Hz  HEX(uint16)   R/W   47.5Hz-49Hz
          { paramName : "电网频率慢保护下限保护时间设置",   paramValue : 0x0A, byte : 2, unit : "", isshow : 0 }, //    0.1s  HEX(uint16)   R/W 500ms-10mins
          { paramName : "脱网重连时间设置",                 paramValue : 0x0B, byte : 2, unit : "", isshow : 0 }, //   0.1s  HEX(uint16)   R/W   10s-10mins
          { paramName : "并网给定电流有效值",               paramValue : 0x0C, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "直流母线给定电压值",               paramValue : 0x0D, byte : 2, unit : "", isshow : 0 }, //  
          
          { paramName : "AB线电压系数",                     paramValue : 0x0E, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "AC线电压系数",                     paramValue : 0x0F, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "BC线电压系数",                     paramValue : 0x01, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "母线电压系数",                     paramValue : 0x02, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "正母线电压系数",                   paramValue : 0x03, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "负母线电压系数",                   paramValue : 0x04, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "并网电流A系数",                    paramValue : 0x05, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "并网电流B系数",                    paramValue : 0x06, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "并网电流C系数",                    paramValue : 0x07, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "输出电流A系数",                    paramValue : 0x08, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "输出电流B系数",                    paramValue : 0x09, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "输出电流C系数",                    paramValue : 0x0A, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "电池充电系数",                     paramValue : 0x0B, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "电池放电系数",                     paramValue : 0x0C, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "PV1电感系数",                      paramValue : 0x0D, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "PV2电感系数",                      paramValue : 0x0E, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "环境温度系数",                     paramValue : 0x0F, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "输出电压A系数",                    paramValue : 0x01, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "输出电压B系数",                    paramValue : 0x02, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "输出电压C系数",                    paramValue : 0x03, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "逆变电压A系数",                    paramValue : 0x04, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "逆变电压B系数",                    paramValue : 0x05, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "逆变电压C系数",                    paramValue : 0x06, byte : 2, unit : "", isshow : 0 }, //   
          
          { paramName : "参数预留1",                        paramValue : 0x07, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "参数预留2",                        paramValue : 0x08, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "参数预留3",                        paramValue : 0x09, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "参数预留4",                        paramValue : 0x0A, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "参数预留5",                        paramValue : 0x0B, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "参数预留6",                        paramValue : 0x0C, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "参数预留7",                        paramValue : 0x0D, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "参数预留8",                        paramValue : 0x0E, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "参数预留9",                        paramValue : 0x0F, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "参数预留10",                       paramValue : 0x01, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "直流母线比列系数",                 paramValue : 0x02, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "直流母线积分系数",                 paramValue : 0x03, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "直流母线调节量限幅",               paramValue : 0x04, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "直流母线误差限幅",                 paramValue : 0x05, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "D轴电流比例系数",                  paramValue : 0x06, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "D轴电流积分系数",                  paramValue : 0x07, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "D轴电流误差限幅",                  paramValue : 0x08, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "D轴电流调节量限幅",                paramValue : 0x09, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "D轴负序电流比例系数",              paramValue : 0x0A, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "D轴负序电流积分系数",              paramValue : 0x0B, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "D轴负序电流误差限幅",              paramValue : 0x0C, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "D轴负序电流调节量限幅",            paramValue : 0x0D, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "Q轴电流比例系数",                  paramValue : 0x0E, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "Q轴电流积分系数",                  paramValue : 0x0F, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "Q轴电流误差限幅",                  paramValue : 0x01, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "Q轴电流调节量限幅",                paramValue : 0x02, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "Q轴负序电流比例系数",              paramValue : 0x03, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "Q轴负序电流积分系数",              paramValue : 0x04, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "Q轴负序电流误差限幅",              paramValue : 0x05, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "Q轴负序电流调节量限幅",            paramValue : 0x06, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "锁相环比列系数",                   paramValue : 0x07, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "锁相环积分系数",                   paramValue : 0x08, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "锁相环标准步长限幅",               paramValue : 0x09, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "锁相环锁相步长限幅",               paramValue : 0x0A, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "锁相环误差限幅",                   paramValue : 0x0B, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "锁相环调节量输出限幅",             paramValue : 0x0C, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "算法调节系数预留3",                paramValue : 0x0D, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "算法调节系数预留4",                paramValue : 0x0E, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "算法调节系数预留5",                paramValue : 0x0F, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "算法调节系数预留6",                paramValue : 0x01, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "算法调节系数预留7",                paramValue : 0x02, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "算法调节系数预留8",                paramValue : 0x03, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "算法调节系数预留9",                paramValue : 0x04, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "算法调节系数预留10",               paramValue : 0x05, byte : 2, unit : "", isshow : 0 }, //   
        ],
        // 工作模式设置参数
        workingModeParameter : [
          { paramName : "运行模式（尖）", paramValue : 0x00,  byte : 2, unit : "元", isshow : 1 }, //  0
          { paramName : "运行模式（峰）", paramValue : 0x00,  byte : 2, unit : "元", isshow : 1 }, //  1
          { paramName : "运行模式（平）", paramValue : 0x00,  byte : 2, unit : "元", isshow : 1 }, //  2
          { paramName : "运行模式（谷）", paramValue : 0x00,  byte : 2, unit : "元", isshow : 1 }, //  3
          { paramName : "并网功率",      paramValue : 0x00,  byte : 2, unit : "W",  isshow : 1 }, //  4
          { paramName : "电池充放电功率", paramValue : 0x00,  byte : 2, unit : "W",  isshow : 1 }, //  5
          { paramName : "工作模式",      paramValue : 0x00,  byte : 1, unit : "",   isshow : 1 }, //  6
          { paramName : "PV并离网",      paramValue : 0x00,  byte : 1, unit : "",   isshow : 1 }, //  7 删除掉了
          { paramName : "电池充放电",    paramValue : 0x00,   byte : 1, unit : "",   isshow : 1 }, //  8
          // { paramName : "电网电压",      paramValue : 0x00,  byte : 2, unit : "V",  isshow : 1 }, //  9
          // { paramName : "电网频率",      paramValue : 0x00,  byte : 2, unit : "HZ",  isshow : 1 }, //  10
          // { paramName : "输出类型",      paramValue : 0x00,  byte : 2, unit : "",  isshow : 1 }, //  11
          { paramName : "共有多少组数据", paramValue : 0x00,  byte : 1, unit : "",   isshow : 1 }, //   12 后边是若干组时间
        ],

        // 时段电价设置
        customeData : [],
        // 自定义模式设置
        customeDataList : [],

        // 保存到localstorage的电价
        energyPrice : [0,0,0,0],

        // 保存到localstroge的工作模式参数
        workMode : ["","","","",""],
          // workMode : [0,0,0,0,0,0,0,0],
        // 自定义模式的尖峰平谷是不是充电设置
        customeModeFlag : [false,false,false,false,true,false],

      }
    },
    computed : {
        runningStatusData : function(){
          // 从store中获取参数
          return this.$store.getters.RunningStatusData;  // 从getters中获取
        }
    },
    watch : {
      // 判断开关机状态 
      runningStatusData: {
        handler : function(){
          // this.$f7.dialog.alert("逆变器状态： " + this.runningStatusData[7].paramValue);
         var title = "", message1 = "" ,message2 = "";
         if(localStorage.getItem("lang") == "en"){
              title = "Message", message1 = "Shutdown succeeded", message2 = "open succeeded"; 
            }else{
              title = "提示", message1 = "关机成功", message2 = "开机成功"; 
            }
          if(this.runningStatusData[7].paramValue == 0){ //停机
             this.$f7.dialog.alert(message1, title);
             this.openflag = false;
          }else if(this.runningStatusData[7].paramValue > 0 && this.runningStatusData[7].paramValue < 6){ // 开机状态
             this.$f7.dialog.alert(message2, title);
             this.openflag = true;
          }
        },
        deep: true
      },

    },
    methods : {
      // 设置参数到数组列表中
      setDatatoParameter : function(e, index){

        var temp = this.deviceParamster[index];
        temp.paramValue = e.target.value;
        if(index == 35){ // 电池AH设置
          temp.paramValue = temp.paramValue * 10;
        }
        // console.log(JSON.stringify(temp, " ", 4));
        this.deviceParamster.splice(index, 1, temp);
      },
      // 下发开关机命令
      sendOpenCtrl : function(){
        var _this = this;
        var message = this.openflag == true ? "下发关机命令吗" : "下发开机命令吗",
          title = "确认信息", buttonOk = "确认", buttonCancel = "取消";


        if(localStorage.getItem("lang") == "en"){
          message = this.openflag == true ? "Send a shutdown command?" : "Send a power-on command?";
          title = "Confirm",
          buttonOk = "OK",
          buttonCancel = "CANCEL";
        }else{
        }
        this.$f7.dialog.create({
          title : title,
          text : message,
          buttons : [{ text : buttonCancel }, { text: buttonOk }],
          onClick : function(dialog, index){
            if(index == 1){
              _this.openflag = !_this.openflag;
              _this.$store.commit('CTRL_SWITCH_CHANGE', _this.openflag);
            }else if(index == 0){
              _this.openflag = !_this.openflag;
            }
          }
        }).open();
      },
      // 下发参数设置
      sendSetParameter : function(){
        var _this = this;
        var message= "确定下发参数设置吗？",
        title = "确认信息",
        buttonOk = "确认", buttonCancel = "取消";
        if(localStorage.getItem("lang") == "en"){
          buttonOk = "OK";
          buttonCancel = "CANCEL";
          message = "Send parameter settings?";
          title = "Confirm";
        }
        this.$f7.dialog.create({
          title : title,
          text : message,
          buttons : [{ text : buttonCancel }, { text: buttonOk }],
          onClick : function(dialog, index){
            if(index == 1){
              _this.$store.commit('CTRL_PARAMETER_CHANGE', _this.deviceParamster.slice(0));
            }
          }
        }).open();
      },
      // 下发工作模式设置
      sendModeSetParameter : function(){
        // console.log(JSON.stringify(this.workingModeParameter, " ", 4));
        var _this = this;
        var message= "确定下发工作模式设置吗？",
        title = "确认信息",
        buttonOk = "确认", buttonCancel = "取消";
        if(localStorage.getItem("lang") == "en"){
          buttonOk = "OK";
          buttonCancel = "CANCEL";
          message = "Send Working Mode parameter settings?";
          title = "Confirm";
        }
        this.$f7.dialog.create({
          title : title,
          text : message,
          buttons : [{ text : buttonCancel }, { text: buttonOk }],
          onClick : function(dialog, index){
            if(index == 1){
              _this.$store.commit('WORKINGMODE_PARAMETER_CHANGE', _this.workingModeParameter.slice(0));
            }
          }
        }).open();
      },
      // 发送自定义模式这是
      sendCustomeFlagSet : function(){
        
        // console.log(this.customeModeFlag);
        // 添加到localstroge中
        localStorage.setItem("CUSTOMEFLAG",JSON.stringify(this.customeModeFlag));

        // 提交commit
        var _this = this;
        var message= "确定自定义模式吗？",
        title = "确认信息",
        buttonOk = "确认", buttonCancel = "取消";
        if(localStorage.getItem("lang") == "en"){
          buttonOk = "OK";
          buttonCancel = "CANCEL";
          message = "Send Custome Mode settings?";
          title = "Confirm";
        }
        this.$f7.dialog.create({
          title : title,
          text : message,
          buttons : [{ text : buttonCancel }, { text: buttonOk }],
          onClick : function(dialog, index){
            if(index == 1){
              _this.$store.commit('CUSTOMEINGMODE_PARAMETER_CHANGE', _this.customeModeFlag.slice(0));
            }
          }
        }).open();

      },
      // 改变工作模式的参数设置
      changeWorkModeParameterSettring : function(e, index){
        var temp = this.workingModeParameter[index];
        temp.paramValue = e.target.value;
        if(index < 4){ // 电池AH设置
          temp.paramValue = temp.paramValue * 10;
        }

        this.workingModeParameter.splice(index, 1, temp);
      },

      changeBatteryType : function(e){
        this.batteryType = e.target.value;
      },

      // 下发工作模式 电价
      sendTimePriceParameter : function(){

       // 后边两位不验证
          if(this.workMode[0] == 0 || this.workMode[0] == "" || this.workMode[2] == 0 || this.workMode[2] == ""){
            this.$f7.toast.create({
              text: "模式未设置，请检查",
              position: "center",
              closeTimeout: 2000,
            }).open();
            return;
          }
        
        localStorage.setItem("WORKMODE",JSON.stringify(this.workMode));
        // 设置到list中
        for(var  i = 0; i < this.workMode.length; i++){
            if(this.workMode[i]){
                this.workingModeParameter[4 + i].paramValue = this.workMode[i];
            }else{
                this.workingModeParameter[4 + i].paramValue = 0;
            }

        }

        // 检查电价是否都设置了
        for(var i = 0; i < this.energyPrice.length; i++){
          if(this.energyPrice[i] == 0 || this.energyPrice[i] == ""){
             this.$f7.toast.create({
              text: "您的电价设置为0，请检查",
              position: "center",
              closeTimeout: 2000,
            }).open();
            return;
          } 
        }
        localStorage.setItem("PRICE",JSON.stringify(this.energyPrice));
        // 设置到list中
        for(var  i = 0; i < 4; i++){
          this.workingModeParameter[i].paramValue = this.energyPrice[i] * 10;
        }

        // 检查时间是否满足一天
        if(this.checkCustomDataisFull()){
          // ok
          // 将他存储到 localstorage中
          localStorage.setItem("TIMEPRICE",JSON.stringify(this.customeData));
          // 将他保存在 workingModeParameter 中
          // { paramName : "共有多少组数据", paramValue : 0x00,  byte : 1, unit : "",   isshow : 1 }, // 8  后边是若干组时间
          
          this.workingModeParameter[9].paramValue = this.customeData.length; // 数据条数
          var startMinute = 0, endMinute = 0;

          if(this.workingModeParameter.length > 10){
            this.workingModeParameter = this.workingModeParameter.slice(0,10);
          }
          // debugger ; 
          for(var i = 0; i < this.customeData.length; i++){
            startMinute = Number(this.customeData[i][1])* 60 +  Number(this.customeData[i][2]);
            endMinute   = Number(this.customeData[i][3])* 60 +  Number(this.customeData[i][4]);
            this.workingModeParameter.push({ paramName : "起始时间", paramValue : startMinute,            byte : 2, unit : "",   isshow : 1 });
            this.workingModeParameter.push({ paramName : "结束时间", paramValue : endMinute,              byte : 2, unit : "",   isshow : 1 });
            this.workingModeParameter.push({ paramName : "尖峰平谷", paramValue : this.customeData[i][0], byte : 1, unit : "",   isshow : 1 });
          }
            var _this = this;
            var message= "确定下发工作模式设置吗？",
                title = "确认信息",
                buttonOk = "确认", buttonCancel = "取消";
            if(localStorage.getItem("lang") == "en"){
                buttonOk = "OK";
                buttonCancel = "CANCEL";
                message = "Send Working Mode parameter settings?";
                title = "Confirm";
            }
            this.$f7.dialog.create({
                title : title,
                text : message,
                buttons : [{ text : buttonCancel }, { text: buttonOk }],
                onClick : function(dialog, index){
                    if(index == 1){
                        _this.$store.commit('WORKINGMODE_PARAMETER_CHANGE', _this.workingModeParameter.slice(0));
                    }
                }
            }).open();
        }else{
          this.$f7.toast.create({
              text: "您设置的时段不足24小时，请检查",
              position: "center",
              closeTimeout: 2000,
          }).open();
        }
      },
      
      // 初始化 时段电价选择模式UI
      initTimePricelUI : function(){
        var _this = this;
        var pickerCustomToolbar = this.$f7.picker.create({
          inputEl: '#demo-picker-custom-toolbar',
          rotateEffect: true,
          renderToolbar: function () {
            return '<div class="toolbar">' +
              '<div class="toolbar-inner">' +
                '<div class="left"><a href="#" class="link sheet-close popover-close">'+
                 _this.$t('app.modal.cancel')+ '</a></div>' +
                '<div class="right">' +
                  '<a href="#" class="link sheet-close popover-close conform">'+ _this.$t('app.modal.done') +'</a>' +
                '</div>' +
              '</div>' +
            '</div>';
          },
          cols: [
            {
              textAlign: 'left',
              values: [1, 2, 3, 4],
              displayValues: [_this.$t('app.custommode.tip'), _this.$t('app.custommode.peak'), _this.$t('app.custommode.flat'), _this.$t('app.custommode.Valley')],
            },
            
            // Hours
            {
              values: (function () {
                var arr = [];
                for (var i = 0; i <= 23; i++) { arr.push(i); }
                  return arr;
              })(),
            },
            // Divider
            {
              divider: true,
              content: ':'
            },
            // Minutes
            {
              values: (function () {
                var arr = [];
                for (var i = 0; i <= 59; i++) { arr.push(i < 10 ? '0' + i : i); }
                  return arr;
              })(),
            },
            // Divider
            {
              divider: true,
              content: '~'
            },
            // Hours
            {
              values: (function () {
                var arr = [];
                for (var i = 0; i <= 23; i++) { arr.push(i); }
                  return arr;
              })(),
            },
            // Divider
            {
              divider: true,
              content: ':'
            },
            // Minutes
            {
              values: (function () {
                var arr = [];
                for (var i = 0; i <= 59; i++) { arr.push(i < 10 ? '0' + i : i); }
                  return arr;
              })(),
            },
            // {
            //   textAlign: 'left',
            //   values: [1, 2],
            //   displayValues: [_this.$t('app.custommode.Yes'), _this.$t('app.custommode.No')],
            // },

            // {
            //   textAlign: 'left',
            //   values: [1, 2],
            //   displayValues: [_this.$t('app.custommode.Yes'), _this.$t('app.custommode.No')],
            // },

          ],
          on: {
            open: function (picker) {
              picker.$el.find('.link.sheet-close.popover-close.conform').on('click', function () {
                
                // 校验当前加入的这个数据合不合规则

                var toastMsg = _this.checkTimePriceData(picker.value);

                if(toastMsg == ""){ // 合法
                  _this.customeData.push(picker.value);
                }else{
                  _this.$f7.toast.create({
                    text: toastMsg,
                    position: "center",
                    closeTimeout: 2000,
                  }).open();
                }
                // picker.setValue([col0Random, col1Random, col2Random]);
              });
            },
          }
        });
      },

      // 初始化 自定义模式设置
      initCustomeModelUI : function(){
        var _this = this;
        var pickerCustomToolbar = this.$f7.picker.create({
          inputEl: '#demo-picker-custom1-toolbar',
          rotateEffect: true,
          renderToolbar: function () {
            return '<div class="toolbar">' +
              '<div class="toolbar-inner">' +
                '<div class="left"><a href="#" class="link sheet-close popover-close">'+
                 _this.$t('app.modal.cancel')+ '</a></div>' +
                '<div class="right">' +
                  '<a href="#" class="link sheet-close popover-close conform1">'+ _this.$t('app.modal.done') +'</a>' +
                '</div>' +
              '</div>' +
            '</div>';
          },
          cols: [
            {
              textAlign: 'left',
              values: [1, 2, 3, 4],
              displayValues: [_this.$t('app.custommode.tip'), _this.$t('app.custommode.peak'), _this.$t('app.custommode.flat'), _this.$t('app.custommode.Valley')],
            },
            {
              textAlign: 'left',
              values: [1, 2],
              displayValues: [_this.$t('app.custommode.Yes'), _this.$t('app.custommode.No')],
            },

            {
              textAlign: 'left',
              values: [1, 2],
              displayValues: [_this.$t('app.custommode.Yes'), _this.$t('app.custommode.No')],
            },

          ],
          on: {
            open: function (picker) {
              picker.$el.find('.link.sheet-close.popover-close.conform1').on('click', function () {
                // 校验当前加入的这个数据合不合规则
                var toastMsg = _this.checkCustomData(picker.value);
                if(toastMsg == ""){ // 合法
                  _this.customeDataList.push(picker.value);
                }else{
                  _this.$f7.toast.create({
                    text: toastMsg,
                    position: "center",
                    closeTimeout: 2000,
                  }).open();
                }
                // picker.setValue([col0Random, col1Random, col2Random]);
              });
            },
          }
        });
      },

      // 获取要在界面显示的时段
      getPeriod : function(num){
        var str = "";
        switch (num) {
          case "1":
            str = this.$t('app.custommode.tip');
            break;
          case "2":
            str = this.$t('app.custommode.peak');
            break;
          case "3":
            str = this.$t('app.custommode.flat');
            break;
          case "4":
            str = this.$t('app.custommode.Valley');
            break;
          default:
            str = this.$t('app.custommode.flat');
            break;
        }

        return str;
      },

      // 获取要在界面显示的充放电选择项
      getYesNO : function(num){
        return num == 1 ? this.$t('app.custommode.Yes') : this.$t('app.custommode.No');
      },

      // 删除一个时段
      deleterow : function(index){
        this.customeData.splice(index, 1);
      },
      // 删除一个自定义模式
      deleterow1 : function(index){
        this.customeDataList.splice(index, 1);
      },
      
      // 每次添加的时候检查时段对否合法
      checkTimePriceData : function(value){

        var startMinute = Number(value[1])* 60 +  Number(value[2]);
        var endMinute   = Number(value[3])* 60 +  Number(value[4]);

        if(this.customeData.length == 0 && startMinute != 0){
          return "第一条起始时间必须是0:00";
        }
        if(startMinute == endMinute || startMinute > endMinute){
          return "结束时间要大于起始时间";
        }

        // 判断当前时间和之前的是不是有重复
        for(var i = 0; i < this.customeData.length; i++){
          var start_i = Number(this.customeData[i][1] * 60) + Number(this.customeData[i][2]);
          var end_i   = Number(this.customeData[i][3] * 60) + Number(this.customeData[i][4]);

          if(startMinute >= start_i && startMinute < end_i || endMinute > start_i && endMinute <= end_i){
            return "时间段和第"+ Number(i + 1)+"段重合";
          }

          if(startMinute == end_i && value[0]  == this.customeData[i][0]){
            return "和第" +  Number(i + 1) + "条 时段相同且连续，请合并";
          }
        }
        return "";
      },
      // 检查时段是否足够24小时
      checkCustomDataisFull : function(){
        var startMinute = 0, endMinute = 0, totalTime = 0;
        for(var i = 0; i < this.customeData.length; i++){
          startMinute = Number(this.customeData[i][1])* 60 +  Number(this.customeData[i][2]);
          endMinute   = Number(this.customeData[i][3])* 60 +  Number(this.customeData[i][4]);
          totalTime += endMinute - startMinute;
        }
        if(totalTime+1 == 1440){
          return true;
        }
        return false;
      },

      // 每次检查自定义模式是否合法
      checkCustomData : function(value){
        // debugger;
        if(this.customeDataList.length > 0){
          for(var i = 0; i < this.customeDataList.length; i++){
            if(value[0] == this.customeDataList[i][0]){
              return "和第"+Number(i+1)+"条时段重复";
            }
          }
        }
        return "";
      },

      // 如果设置过一次， 从localstorage中获取
      getTimePriceFromLocal : function(){
        if(localStorage.getItem("TIMEPRICE") != null) 
        this.customeData = JSON.parse(localStorage.getItem("TIMEPRICE"));
      },
      // 从localstroage中获取电价数据
      getPriceFromLocal : function(){
        if(localStorage.getItem("PRICE") != null) 
          this.energyPrice = JSON.parse(localStorage.getItem("PRICE"));

      },

      getWorkModeFromLocal : function(){
        if(localStorage.getItem("WORKMODE") != null){
          this.workMode = JSON.parse(localStorage.getItem("WORKMODE"));
          for(var  i = 0; i < this.workMode.length; i++){
            this.workingModeParameter[4 + i].paramValue = this.workMode[i];
          }
        }
        // localStorage.setItem("WORKMODE",JSON.stringify(this.workMode));
      },
      getCustomeFlag : function(){
        if(localStorage.getItem("CUSTOMEFLAG") != null){
          this.customeModeFlag = JSON.parse(localStorage.getItem("CUSTOMEFLAG"));
        }
      }

    },
    mounted : function(){

      this.$store.commit('TAB_INDEX_CHANGE', 4);
      // 初始化时间段选择UI
      this.initTimePricelUI();
      // 获取存储的时段参数
      this.getTimePriceFromLocal();

      // 获取存储的电价
      this.getPriceFromLocal();

      // 获取存储的模式
      this.getWorkModeFromLocal();

      // 获取自定义模式的勾选
      this.getCustomeFlag();

      // 初始化自定义模式选择UI
      // this.initCustomeModelUI();

    },
    components: {
      f7Navbar,
      f7Page,
      f7BlockTitle,
    },
  };
</script>

<style>
.deleterow{
  right: 10px;
  line-height: 18px !important;
  height: 20px !important;
}
.inputbox{
      border: 1px solid #e2e2e2;
      position: relative;
      color: #fff;
      
}
.inputbox span{
  display: block;
  position: absolute;
  top:13px;
  left: 6px;
  font-size: 14px !important;
  width: 1em !important;
}
.inputbox:after{
  content: "元";
  display: block;
  position: absolute;
  font-size: 14px;
  top: 13px;
  right: 4px;
}


.timepriceinput{
  text-align: center;
}
.setting.list ul {
    list-style: none;
    margin: 0;
    padding: 7px 4px;
    position: relative;
}
.setting.list .item-title{
    -webkit-flex-shrink: 0; 
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.setting.list .item-after {
    -webkit-flex-shrink: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
}
.setting .block-title {
    font-size: 18px;
    line-height: 24px;
    text-transform: none; 
}
.setting  .list input{
    text-align: right;
}
.setting  .list select{
    text-align: right !important;
}
.setting .block {
    margin: -1px 0;
    padding: 0 16px;
}
.ios .setting .block-title {
    margin: 3px 0px 5px 15px;
    border-bottom: 1px dotted #e6e6e8;
    line-height: 59px;
    font-weight: bold;
}
.ios .toggle input[type="checkbox"]:checked + .toggle-icon{
  background: #007aff;
}
.ios .list input[type="text"], .ios .list input[type="password"], .ios .list input[type="search"], .ios .list input[type="email"], .ios .list input[type="tel"], .ios .list input[type="url"], .ios .list input[type="date"], .ios .list input[type="datetime-local"], .ios .list input[type="time"], .ios .list input[type="number"], .ios .list select{
  color: inherit;
  direction: rtl;
}
.ios .list .item-after {
    color: #666;
    padding-left: 5px;
}
.f7-icons{
  font-size: 20px;
  line-height: 1.9;
  margin-top: 4px;
  margin-left: 6px;
  color: #ababab;
}
.toggle-init{
  position: relative;
}
.languageswitch .toggle-init::before{
  content: 'ON';
  display: block;
  top: 6px;
  left: 4px;
  font-size: 13px;
  position: absolute;
  color: #fff;
  z-index: 5;
}
.item-input-wrap span{
    font-size: 0.9em;
    width: 7em;
    text-align: center;
}
.picker-3d .picker-item{
  font-size: 15px !important;
}
.addcustoms{
    z-index: 100;
    text-indent: -1000px;
    right: 17px;
    height: 35px !important;
    width: 47px !important;
    font-size: 1.5em;
    border: 1px solid #007aff;
    line-height: 1.3em;
    top: 16px;
    padding: 0 11px;
    border-radius: 6px;
    color: #007aff;
}
.addicon{
  right: 31px;
  font-size: 32px;
  top: 1px;
  color: #0179ff;
}
.item-after > i{
    display: block;
    font-size: 16px;
    height:44px;
    line-height: 44px;
}
input{
    text-align: center;
}
input::-webkit-input-placeholder {
    /* placeholder位置  */
    text-align: right;
}
input:-moz-placeholder {
    text-align: right;
}
input:-ms-input-placeholder {
    text-align: right;
}
input::-moz-placeholder {
    text-align: right;
}
</style>
