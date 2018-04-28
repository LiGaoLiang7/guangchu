<template>
  <f7-page>
    <f7-navbar title="系统设置" back-link="Back" >
    </f7-navbar>
    <div class="block block-strong setting">
      <div class="block-title">控制命令设置</div>
      <form class="list" id="my-form">
        <ul>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">开关机</div>
                <div class="item-after">
                  <label class="toggle toggle-init" @click="sendOpenCtrl">
                    <input type="checkbox" name="toggle" value="yes" v-model="openflag"><i class="toggle-icon"></i>
                  </label>
                </div>
              </div>
            </div>
           </li>
         </ul>
     </form>
     <div class="block-title">工作参数设置</div>
      <form class="list">
        <ul>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">运行模式</div>
                  <div class="item-after">
                    <select name="runningmodel" @change="setDatatoParameter($event, 0)">
                      <option value="0" selected>请选择</option>
                      <option value="1">并网模式</option>
                      <option value="2">离网模式</option>
                    </select>
                    <i class="f7-icons size-50">chevron_right</i>
                  </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">基本工作模式</div>
                  <div class="item-after">
                    <select name="runningmodel" @change="setDatatoParameter($event, 1)">
                      <option value="0" selected>请选择</option>
                      <option value="1">通用模式</option>
                      <option value="2">离网模式</option>
                      <option value="3">备用模式</option>
                      <option value="4">经济模式</option>
                    </select>
                    <i class="f7-icons size-50">chevron_right</i>
                  </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">并网模式设置</div>
                <div class="item-after">
                  <select name="runningmodel" @change="setDatatoParameter($event, 2)">
                    <option value="0" selected>请选择</option>
                    <option value="1" >恒流模式</option>
                    <option value="2">恒压模式</option>
                    <option value="3">恒功率模式DC</option>
                    <option value="4">恒功率模式AC</option>
                    <option value="5">独立逆变</option>
                  </select>
                  <i class="f7-icons size-50">chevron_right</i>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">无功调节方式</div>
                <div class="item-after">
                  <select @change="setDatatoParameter($event, 3)">
                    <option value="0" selected>请选择</option>
                    <option value="1">功率值</option>
                    <option value="2">百分比</option>
                    <option value="3">功率因数</option>
                  </select>
                  <i class="f7-icons size-50">chevron_right</i>
                </div>
              </div>
            </div>
          </li>

          </li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">电网电压跌落调节方式</div>
                <div class="item-after">
                  <select @change="setDatatoParameter($event, 4)">
                    <option value="0" selected>请选择</option>
                    <option value="1">孤岛保护 默认</option>
                    <option value="2">低电压穿越</option>
                    <option value="3">无缝切换</option>
                  </select>
                  <i class="f7-icons size-50">chevron_right</i>
                </div>
              </div>
            </div>
          </li>
          </li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">离网自起机模式设置</div>
                <div class="item-after">
                  <select @change="setDatatoParameter($event, 5)">
                    <option value="0" selected>请选择</option>
                    <option value="60928">使能</option> <!--EE00-->
                    <option value="238">禁止</option>   <!--00EE-->
                  </select>
                  <i class="f7-icons size-50">chevron_right</i>
                </div>
              </div>
            </div>
          </li>
          </li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">无缝切换手动模式并离网控制</div>
                <div class="item-after">
                  <select @change="setDatatoParameter($event, 6)">
                    <option value="0" selected>请选择</option>
                    <option value="60928">并网转离网</option>
                    <option value="238">离网转并网</option>
                  </select>
                  <i class="f7-icons size-50">chevron_right</i>
                </div>
              </div>
            </div>
          </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">恒流模式电流</div>
                  <div class="item-after">
                    <input type="number" name="email" placeholder="0" @change="setDatatoParameter($event, 7)">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">恒压模式限制电流</div>
                  <div class="item-after">
                    <input type="number" name="email" placeholder="0" @change="setDatatoParameter($event, 8)">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">恒压模式电压</div>
                  <div class="item-after">
                    <input type="number" name="email" placeholder="0" @change="setDatatoParameter($event, 9)">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">恒功率模式功率（DC）</div>
                  <div class="item-after">
                    <input type="number" name="email" placeholder="0" @change="setDatatoParameter($event, 10)">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">恒功率模式功率（AC）</div>
                  <div class="item-after">
                    <input type="number" name="email" placeholder="0" @change="setDatatoParameter($event, 11)">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">独立逆变电压</div>
                  <div class="item-after">
                    <input type="number" name="email" placeholder="0" @change="setDatatoParameter($event, 12)">
                  </div>
                </div>
              </div>
            </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">独立逆变频率</div>
                <div class="item-after">
                    <input type="number" name="email" placeholder="0" @change="setDatatoParameter($event, 13)">
                  </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">无功比例</div>
                <div class="item-after">
                    <input type="number" name="email" placeholder="0" @change="setDatatoParameter($event, 15)">
                  </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">额定功率</div>
                <div class="item-after">
                    <input type="number" name="email" placeholder="0" @change="setDatatoParameter($event, 17)">
                  </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">电网电压</div>
                <div class="item-after">
                    <select @change="setDatatoParameter($event, 18)">
                      <option value="0" selected>请选择</option>
                      <option value="1">220V</option>
                      <option value="2">315V</option>
                      <option value="3">380V</option>
                  </select>
                  <i class="f7-icons size-50">chevron_right</i>
                </div>
              </div>
            </div>
          </li>
          
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">遥设有功功率值</div>
                <div class="item-after">
                    <input type="number" name="email" placeholder="0" @change="setDatatoParameter($event, 20)">
                  </div>
              </div>
            </div>
          </li>


          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">遥设无功功率值</div>
                <div class="item-after">
                    <input type="number" name="email" placeholder="0" @change="setDatatoParameter($event, 21)">
                  </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">遥设功率因数</div>
                <div class="item-after">
                    <input type="number" name="email" placeholder="0" @change="setDatatoParameter($event, 22)">
                  </div>
              </div>
            </div>
          </li>

          
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">有功功率变化率设置</div>
                <div class="item-after">
                    <input type="number" name="email" placeholder="0" @change="setDatatoParameter($event, 26)">
                  </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">无功功率变化率设置</div>
                <div class="item-after">
                    <input type="number" name="email" placeholder="0" @change="setDatatoParameter($event, 27)">
                  </div>
              </div>
            </div>
          </li>
        


          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">设置电网额定频率</div>
                <div class="item-after">
                    <input type="number" name="email" placeholder="0" @change="setDatatoParameter($event, 30)">
                  </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">恢复出厂设置</div>
                <div class="item-after">
                    <input type="number" name="email" placeholder="0" @change="setDatatoParameter($event, 31)">
                  </div>
              </div>
            </div>
          </li>
          
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">电池均充电压</div>
                <div class="item-after">
                  <select @change="setDatatoParameter($event, 32)">
                    <option value="0" selected>请选择</option>
                    <option value="1">2.30V/cell</option>
                    <option value="2">2.32V/cell</option>
                    <option value="3">2.35V/cell</option>
                    <option value="4">2.37V/cell</option>
                    <option value="5">2.40V/cell</option>
                  </select>
                  <i class="f7-icons size-50">chevron_right</i>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">电池浮充电压</div>
                <div class="item-after">
                  <select  @change="setDatatoParameter($event, 33)">
                    <option value="0" selected>请选择</option>
                    <option value="1">2.20V/cell </option>
                    <option value="2">2.22V/cell</option>
                    <option value="3">2.25V/cell</option>
                    <option value="4">2.27V/cell</option>
                    <option value="5">2.30V/cell</option>
                  </select>
                  <i class="f7-icons size-50">chevron_right</i>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">电池周期自检</div>
                <div class="item-after">
                  <select  @change="setDatatoParameter($event, 34)">
                    <option value="0" selected>请选择</option>
                    <option value="1">一个星期</option>
                    <option value="2">两个星期</option>
                    <option value="3">一个月</option>
                    <option value="4">二个月</option>
                    <option value="5">六个月</option>
                  </select>
                  <i class="f7-icons size-50">chevron_right</i>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">电池EOD设置</div>
                <div class="item-after">
                  <select @change="setDatatoParameter($event, 38)">
                    <option value="0" selected>请选择</option>
                    <option value="1">1.65V/cell</option>
                    <option value="2">1.70V/cell</option>
                    <option value="3">1.75V/cell</option>
                  </select>
                  <i class="f7-icons size-50">chevron_right</i>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">电池强制均充使能</div>
                <div class="item-after">
                  <select @change="setDatatoParameter($event, 40)">
                    <option value="0" selected>请选择</option>
                    <option value="52224">使能</option> <!-- 0xCC00 -->
                    <option value="204">禁止</option> <!-- 0x00CC -->
                  </select>
                  <i class="f7-icons size-50">chevron_right</i>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </form>
        <div class="col"><a class="button convert-form-to-data button-outline" href="#" @click="sendSetParameter">下发控制</a></div>
    </div>
  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page, f7BlockTitle } from 'framework7-vue';
  export default {
    data : function(){
      return {
        openflag : null,

        // 设备参数设置命令下发
        deviceParamster : [
          { paramName : "运行模式",                         paramValue : 1, byte : 1, unit : "", isshow : 1 }, //  0   HEX(int8)       1：并网  2：离网  
          { paramName : "基本工作模式",                     paramValue : 0, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   1: 通用模式 2:离网模式3：备用模式4：经济模式
          { paramName : "并网模式设置",                     paramValue : 0, byte : 1, unit : "", isshow : 1 }, //     HEX(int8)   R/W   1：恒流模式2：恒压模式3：恒功率模式（DC）4：恒功率模式（AC） 5：独立逆变
          { paramName : "无功调节方式",                     paramValue : 0, byte : 1, unit : "", isshow : 1 }, //     HEX(int8)   R/W   1:功率值2:百分比3:功率因数
          { paramName : "电网电压跌落调节方式",             paramValue : 0, byte : 1, unit : "", isshow : 1 }, //     HEX(int8)   R/W   1：孤岛保护（默认）2：低电压穿越3：无缝切换
          { paramName : "离网自起机模式设置",               paramValue : 0, byte : 2, unit : "", isshow : 1 }, //  5     HEX(uint16)   W   0XEE00:使能0X00EE:禁止 
          { paramName : "无缝切换手动模式并离网控制",       paramValue : 0, byte : 1, unit : "", isshow : 1 }, //    HEX(uint8)  R/W     1：并网转离网2：离网转并网其他：无效
          { paramName : "恒流模式电流",                     paramValue : 0, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   
          { paramName : "恒压模式限制电流",                 paramValue : 0, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   
          { paramName : "恒压模式电压",                     paramValue : 0, byte : 2, unit : "", isshow : 1 }, //     HEX(uint16)   R/W 
          { paramName : "恒功率模式功率（DC）",             paramValue : 0, byte : 2, unit : "", isshow : 1 }, //  10 HEX(int16)  R/W   
          { paramName : "恒功率模式功率（AC）",             paramValue : 0, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   
          { paramName : "独立逆变电压",                     paramValue : 0, byte : 2, unit : "", isshow : 1 }, //     HEX(uint16)   R/W 
          { paramName : "独立逆变频率",                     paramValue : 0, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   
          { paramName : "输出类型设置",                     paramValue : 0, byte : 1, unit : "", isshow : 0 }, //     HEX(uint8)  R/W      0:三相四线1:三相三线
          { paramName : "无功比例",                         paramValue : 0, byte : 2, unit : "", isshow : 1 }, //  15 HEX(uint16)   R/W 
          { paramName : "自老化模式",                       paramValue : 0, byte : 2, unit : "", isshow : 0 }, //     HEX(int16)  R/W   0XAA00:使能0X00AA:禁止
          { paramName : "额定功率",                         paramValue : 0, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   
          { paramName : "电网电压",                         paramValue : 0, byte : 2, unit : "", isshow : 1 }, //     HEX(uint16)   R/W 1:220V,2:315V3:380V
          { paramName : "电网代码",                         paramValue : 0, byte : 2, unit : "", isshow : 0 }, //     HEX(int16)  R/W   1：GBT199642：IEC617273：IEEE15474：CUSTOM_ISLAND5：CUSTOM_LVRT
          { paramName : "遥设有功功率值",                   paramValue : 0, byte : 2, unit : "", isshow : 1 }, //  20 HEX(int16)  R/W   
          { paramName : "遥设无功功率值",                   paramValue : 0, byte : 2, unit : "", isshow : 1 }, //     HEX(uint16)   R/W 
          { paramName : "遥设功率因数",                     paramValue : 0, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   
          { paramName : "并网过载系数设置",                 paramValue : 0, byte : 2, unit : "", isshow : 0 }, //     HEX(int16)  R/W   
          { paramName : "PV侧电池类型",                     paramValue : 0, byte : 2, unit : "", isshow : 0 }, //     HEX(uint16)   R/W 1:PV2:锂电池 3：铅酸电池
          { paramName : "DC侧电池类型",                     paramValue : 0, byte : 2, unit : "", isshow : 0 }, //  25 HEX(uint16)   R/W 1:锂电池 2：铅酸电池
          { paramName : "有功功率变化率设置",               paramValue : 0, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   
          { paramName : "无功功率变化率设置",               paramValue : 0, byte : 2, unit : "", isshow : 1 }, //     HEX(uint16) R/W 
          { paramName : "设置绝缘阻抗告警值",               paramValue : 0, byte : 2, unit : "", isshow : 0 }, //     HEX(int16)  R/W   
          { paramName : "设置绝缘阻抗保护值",               paramValue : 0, byte : 2, unit : "", isshow : 0 }, //     HEX(int16)  R/W   
          { paramName : "设置电网额定频率",                 paramValue : 0, byte : 2, unit : "", isshow : 1 }, //  30 HEX(uint16)   R/W 
          { paramName : "恢复出厂设置",                     paramValue : 0, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   
          { paramName : "电池均充电压",                     paramValue : 0, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   1: 2.3V/cell 2: 2.32V/cell3: 2.35V/cell4: 2.37V/cell5: 2.40V/cell
          { paramName : "电池浮充电压",                     paramValue : 0, byte : 2, unit : "", isshow : 1 }, //     HEX(uint16)   R/W 1: 2.2V/cell 2: 2.22V/cell3: 2.25V/cell4: 2.27V/cell5: 2.30V/cell
          { paramName : "电池周期自检",                     paramValue : 0, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   1: 一个星期 2: 两个星期3: 一个月4: 二个月5: 六个月
          { paramName : "电池AH设置",                       paramValue : 0, byte : 2, unit : "", isshow : 0 }, //  35 HEX(int16)  R/W   1: 48AH2: 72AH3: 100AH
          { paramName : "电池组数",                         paramValue : 0, byte : 2, unit : "", isshow : 0 }, //     HEX(uint16)   R/W 
          { paramName : "电池节数",                         paramValue : 0, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "电池EOD设置",                      paramValue : 0, byte : 2, unit : "", isshow : 1 }, //     HEX(int16)  R/W   1: 1.65V/cell 2: 1.7V/cell2: 1.75V/cell
          { paramName : "电池均充保护时间设置",             paramValue : 0, byte : 2, unit : "", isshow : 0 }, //     HEX(int16)  R/W   1: 10小时 2: 24小时
          { paramName : "电池强制均充使能",                 paramValue : 0, byte : 2, unit : "", isshow : 1 }, //  40 HEX(uint8)  R/W 0XCC00:使能 0X00CC:禁止
          { paramName : "电池预告警使能",                   paramValue : 0, byte : 1, unit : "", isshow : 0 }, //     HEX(uint8)  R/W 0XBB00:使能 0X00BB:禁止
          { paramName : "Backup模式使能",                   paramValue : 0, byte : 1, unit : "", isshow : 0 }, //     HEX(uint8)  R/W 0: 禁止 1:使能
          { paramName : "单体SOC过高",                      paramValue : 0, byte : 1, unit : "", isshow : 0 }, //     HEX(uint8)  R/W 1：异常 0：正常
          { paramName : "单体SOC过低",                      paramValue : 0, byte : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "单体过温",                         paramValue : 0, byte : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "单体欠温",                         paramValue : 0, byte : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "组端过压",                         paramValue : 0, byte : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "组端欠压",                         paramValue : 0, byte : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "单体过压",                         paramValue : 0, byte : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "单体欠压",                         paramValue : 0, byte : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "保留",                             paramValue : 0, byte : 1, unit : "", isshow : 0 }, //        HEX(uint8) R/W 1：异常 0：正常
          { paramName : "保留",                             paramValue : 0, byte : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "模块温度下限告警",                 paramValue : 0, byte : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "模块温度上限告警",                 paramValue : 0, byte : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "电芯电压差异过大",                 paramValue : 0, byte : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "电池组绝缘故障标志",               paramValue : 0, byte : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "电池组充电过流",                   paramValue : 0, byte : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "电池组放电过流",                   paramValue : 0, byte : 1, unit : "", isshow : 0 }, //        ：异常 0：正常
          { paramName : "电网电压快保护上限设置",           paramValue : 0, byte : 2, unit : "", isshow : 0 }, //   0.1V  HEX(uint16)   R/W 250V-300V
          { paramName : "电网电压快保护上限保护时间设置",   paramValue : 0, byte : 2, unit : "", isshow : 0 }, //    ms  HEX(uint16)   R/W 50ms-5000ms
          { paramName : "电网电压慢保护上限设置",           paramValue : 0, byte : 2, unit : "", isshow : 0 }, //   0.1V  HEX(uint16)   R/W   230V-270V
          { paramName : "电网电压慢保护上限保护时间设置",   paramValue : 0, byte : 2, unit : "", isshow : 0 }, //    0.1s  HEX(uint16)   R/W 500ms-10mins
          { paramName : "电网电压快保护下限设置",           paramValue : 0, byte : 2, unit : "", isshow : 0 }, //   0.1V  HEX(uint16)   R/W   22V-200V
          { paramName : "电网电压快保护下限保护时间设置",   paramValue : 0, byte : 2, unit : "", isshow : 0 }, //    ms  HEX(uint16)   R/W 50ms-5000ms
          { paramName : "电网电压慢保护下限设置",           paramValue : 0, byte : 2, unit : "", isshow : 0 }, //   0.1V  HEX(uint16)   R/W   170V-210V
          { paramName : "电网电压慢保护下限保护时间设置",   paramValue : 0, byte : 2, unit : "", isshow : 0 }, //    ms  HEX(uint16)   R/W   500ms-10s
          { paramName : "电网频率快保护上限设置",           paramValue : 0, byte : 2, unit : "", isshow : 0 }, //   0.01Hz  HEX(uint16)   R/W   50.5Hz-53Hz
          { paramName : "电网频率快保护上限保护时间设置",   paramValue : 0, byte : 2, unit : "", isshow : 0 }, //    ms  HEX(uint16)   R/W 50ms-27000ms 
          { paramName : "电网频率慢保护上限设置",           paramValue : 0, byte : 2, unit : "", isshow : 0 }, //   0.01Hz  HEX(uint16)   R/W   50.2Hz-52Hz
          { paramName : "电网频率慢保护上限保护时间设置",   paramValue : 0, byte : 2, unit : "", isshow : 0 }, //    0.1s  HEX(uint16)   R/W 500ms-10mins
          { paramName : "电网频率快保护下限设置",           paramValue : 0, byte : 2, unit : "", isshow : 0 }, //   0.01Hz  HEX(uint16)   R/W   47Hz-48Hz
          { paramName : "电网频率快保护下限保护时间设置",   paramValue : 0, byte : 2, unit : "", isshow : 0 }, //    ms  HEX(uint16)   R/W 50ms-5000ms
          { paramName : "电网频率慢保护下限保护设置",       paramValue : 0, byte : 2, unit : "", isshow : 0 }, //  0.01Hz  HEX(uint16)   R/W   47.5Hz-49Hz
          { paramName : "电网频率慢保护下限保护时间设置",   paramValue : 0, byte : 2, unit : "", isshow : 0 }, //    0.1s  HEX(uint16)   R/W 500ms-10mins
          { paramName : "脱网重连时间设置",                 paramValue : 0, byte : 2, unit : "", isshow : 0 }, //   0.1s  HEX(uint16)   R/W   10s-10mins
          { paramName : "并网给定电流有效值",               paramValue : 0, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "直流母线给定电压值",               paramValue : 0, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "直流母线比列系数",                 paramValue : 0, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "直流母线积分系数",                 paramValue : 0, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "D轴电流比例系数",                  paramValue : 0, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "D轴电流积分系数",                  paramValue : 0, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "Q轴电流比例系数",                  paramValue : 0, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "Q轴电流积分系数",                  paramValue : 0, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "正序电流比例系数",                 paramValue : 0, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "正序电流积分系数",                 paramValue : 0, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "负序电流比例系数",                 paramValue : 0, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "负序电流积分系数",                 paramValue : 0, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "锁相环比列系数",                   paramValue : 0, byte : 2, unit : "", isshow : 0 }, //         
          { paramName : "锁相环积分系数",                   paramValue : 0, byte : 2, unit : "", isshow : 0 }, //   
          { paramName : "AB线电压系数",                     paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "AC线电压系数",                     paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "BC线电压系数",                     paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "母线电压系数",                     paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "正母线电压系数",                   paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "负母线电压系数",                   paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "并网电流A系数",                    paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "并网电流B系数",                    paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "并网电流C系数",                    paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "输出电流A系数",                    paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "输出电流B系数",                    paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "输出电流C系数",                    paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "电池充电系数",                     paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "电池放电系数",                     paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "PV1电感系数",                      paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "PV2电感系数",                      paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "环境温度系数",                     paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "输出电压A系数",                    paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "输出电压B系数",                    paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "输出电压C系数",                    paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "逆变电压A系数",                    paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "逆变电压B系数",                    paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "逆变电压C系数",                    paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
          { paramName : "系数预留1",                        paramValue : 0, byte : 1, unit : "", isshow : 0 }, //   
        ],
      }
    },
    computed : {
    },
    watch : {
    },
    methods : {
      // 设置参数到数组列表中
      setDatatoParameter : function(e, index){
        var temp = this.deviceParamster[index];
        temp.paramValue = e.target.value;
        // console.log(JSON.stringify(temp, " ", 4));
        this.deviceParamster.splice(index, 1, temp);

      },
      // 下发开关机命令
      sendOpenCtrl : function(){
        var _this = this;
        var message = this.openflag == true ? "下发关机命令吗" : "下发开机命令吗";
        this.$f7.dialog.confirm(message, "确认信息", function(){
          _this.$store.commit('CTRL_SWITCH_CHANGE', _this.openflag);
        }, function(){
          _this.openflag = !_this.openflag;
        });
      },
      // 下发参数设置
      sendSetParameter : function(){

        var _this = this;
        this.$f7.dialog.confirm("确定下发参数设置吗？", "确认参数", function(){
          // 深拷贝
          _this.$store.commit('CTRL_PARAMETER_CHANGE', _this.deviceParamster.slice(0));
        }, function(){
        });
      }
    },
    components: {
      f7Navbar,
      f7Page,
      f7BlockTitle,
    },
  };
</script>

<style>
.setting  .list .item-title{
    -webkit-flex-shrink: 0; 
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.setting  .list .item-after {
    -webkit-flex-shrink: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
}
.setting .block-title {
    font-size: 18px;
    line-height: 24px;
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
.ios .block-title {
    margin: 0px 15px 10px;
}
.ios .toggle input[type="checkbox"]:checked + .toggle-icon{
  background: #19eec2;
}
.ios .list input[type="text"], .ios .list input[type="password"], .ios .list input[type="search"], .ios .list input[type="email"], .ios .list input[type="tel"], .ios .list input[type="url"], .ios .list input[type="date"], .ios .list input[type="datetime-local"], .ios .list input[type="time"], .ios .list input[type="number"], .ios .list select{
  color: inherit;
  direction: rtl;
}
.ios .list .item-after {
    color: #666;
    padding-left: 5px;
}
.ios .block-title {
    font-weight: bold;
}
.f7-icons{
  font-size: 20px;
  line-height: 1.9;
  margin-top: 4px;
  margin-left: 6px;
  color: #ababab;
}
</style>
