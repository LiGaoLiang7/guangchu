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
                  <label class="toggle toggle-init">
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
                    <select name="runningmodel">
                      <option value="1" selected>通用模式</option>
                      <option value="2">离网模式</option>
                      <option value="3">备用模式</option>
                      <option value="4">经济模式</option>
                    </select>
                  </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">并网模式设置</div>
                <div class="item-after">
                  <select name="runningmodel">
                    <option value="1" selected>恒流模式</option>
                    <option value="2">恒压模式</option>
                    <option value="3">恒功率(DC)</option>
                    <option value="4">恒功率(AC)</option>
                    <option value="5">独立逆变</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">并网模式设置</div>
                <div class="item-after">
                  <select name="runningmodel">
                    <option value="1" selected>功率值</option>
                    <option value="2">百分比</option>
                    <option value="3">功率因数</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
          </li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">电网电压跌落调节方式</div>
                <div class="item-after">
                  <select name="gender">
                    <option value="1" selected>孤岛保护（默认）</option>
                    <option value="2">低电压穿越</option>
                    <option value="3">无缝切换</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
          </li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">离网自起机模式设置</div>
                <div class="item-after">
                  <select name="gender">
                    <option value="EE00" selected>使能</option>
                    <option value="00EE">禁止</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
          </li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">无缝切换手动模式并离网控制</div>
                <div class="item-after">
                  <select name="gender">
                    <option value="EE00" selected>并网转离网</option>
                    <option value="00EE">离网转并网</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">恒流模式电流</div>
                  <div class="item-after">
                    <input type="number" name="email" placeholder="0">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">恒压模式限制电流</div>
                  <div class="item-after">
                    <input type="number" name="email" placeholder="0">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">恒功率模式功率（DC）</div>
                  <div class="item-after">
                    <input type="number" name="email" placeholder="0">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">恒功率模式功率（AC）</div>
                  <div class="item-after">
                    <input type="number" name="email" placeholder="0">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">独立逆变电压</div>
                  <div class="item-after">
                    <input type="number" name="email" placeholder="0">
                  </div>
                </div>
              </div>
            </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">独立逆变频率</div>
                <div class="item-after">
                    <input type="number" name="email" placeholder="0">
                  </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">无功比例</div>
                <div class="item-after">
                    <input type="number" name="email" placeholder="0">
                  </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">额定功率</div>
                <div class="item-after">
                    <input type="number" name="email" placeholder="0">
                  </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">电网电压</div>
                <div class="item-after">
                    <select name="gender">
                    <option value="1" selected>220V</option>
                    <option value="2">315V</option>
                    <option value="3">380V</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
          
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">遥设有功功率值</div>
                <div class="item-after">
                    <input type="number" name="email" placeholder="0">
                  </div>
              </div>
            </div>
          </li>


          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">遥设无功功率值</div>
                <div class="item-after">
                    <input type="number" name="email" placeholder="0">
                  </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">遥设功率因数</div>
                <div class="item-after">
                    <input type="number" name="email" placeholder="0">
                  </div>
              </div>
            </div>
          </li>

          
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">有功功率变化率设置</div>
                <div class="item-after">
                    <input type="number" name="email" placeholder="0">
                  </div>
              </div>
            </div>
          </li>


          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">无功功率变化率设置</div>
                <div class="item-after">
                    <input type="number" name="email" placeholder="0">
                  </div>
              </div>
            </div>
          </li>
        


          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">设置电网额定频率</div>
                <div class="item-after">
                    <input type="number" name="email" placeholder="0">
                  </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">恢复出厂 设置</div>
                <div class="item-after">
                    <input type="number" name="email" placeholder="0">
                  </div>
              </div>
            </div>
          </li>
          
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">电池均充电压</div>
                <div class="item-after">
                  <select name="gender">
                    <option value="1" selected>2.30V/cell</option>
                    <option value="2">2.32V/cell</option>
                    <option value="3">2.35V/cell</option>
                    <option value="4">2.37V/cell</option>
                    <option value="5">2.40V/cell</option>
                  </select>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">电池浮充电压</div>
                <div class="item-after">
                  <select name="gender">
                    <option value="1" selected>2.20V/cell </option>
                    <option value="2">2.22V/cell</option>
                    <option value="3">2.25V/cell</option>
                    <option value="4">2.27V/cell</option>
                    <option value="5">2.30V/cell</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">电池周期自检</div>
                <div class="item-after">
                  <select name="gender">
                    <option value="1">一个星期</option>
                    <option value="2">两个星期</option>
                    <option value="3">一个月</option>
                    <option value="4">二个月</option>
                    <option value="5">六个月</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">电池EOD设置</div>
                <div class="item-after">
                  <select name="gender">
                    <option value="1">1.65V/cell</option>
                    <option value="2">1.70V/cell</option>
                    <option value="3">1.75V/cell</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">电池强制均充使能</div>
                <div class="item-after">
                  <select name="gender">
                    <option value="CC00">使能</option>
                    <option value="00CC">禁止</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </form>
        <div class="col"><a class="button convert-form-to-data button-outline" href="#">下发控制</a></div>
    </div>
  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page, f7BlockTitle } from 'framework7-vue';
  export default {
    data : function(){
      return {
        openflag : null,
      }
    },
    computed : {
    },
    watch : {
      openflag : function(){   // 当开关机按钮变动
        this.$store.commit('CTRL_SWITCH_CHANGE', this.openflag);
      },
    },
    methods : {

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
</style>
