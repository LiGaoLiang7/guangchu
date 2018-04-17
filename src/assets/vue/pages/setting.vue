<template>
  <f7-page>
    <f7-navbar title="系统设置" back-link="Back" >
    </f7-navbar>
    <div class="block block-strong">
      <div class="block-title">控制命令设置</div>
      <form class="list" id="my-form">
        <ul>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">开关机</div>
                <div class="item-after">
                  <label class="toggle toggle-init">
                    <input type="checkbox" name="toggle" value="yes"><i class="toggle-icon"></i>
                  </label>
                </div>
              </div>
            </div>
           </li>
         </ul>
     </form>  
    </div>
    <div class="block block-strong">
      <div class="block-title">工作参数设置</div>
      <form class="list" id="my-form">
        <ul>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">运行模式</div>
              <div class="item-input-wrap">
                <select name="gender">
                  <option value="male" selected>并网</option>
                  <option value="female">离网</option>
                </select>
              </div>
            </div>
          </div>
        </li>
         </li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">电网电压跌落调节方式</div>
              <div class="item-input-wrap">
                <select name="gender">
                  <option value="male" selected>孤岛保护（默认）</option>
                  <option value="female">低电压穿越</option>
                  <option value="fema啊le">无缝切换</option>
                </select>
              </div>
            </div>
          </div>
        </li>
         </li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">离网自起机模式设置</div>
              <div class="item-input-wrap">
                <select name="gender">
                  <option value="male" selected>使能</option>
                  <option value="female">禁止</option>
                </select>
              </div>
            </div>
          </div>
        </li>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-label">无功比例</div>
                <div class="item-input-wrap">
                  <input type="email" name="email" placeholder="0">
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-label">额定功率</div>
                <div class="item-input-wrap">
                  <input type="email" name="email" placeholder="0">
                </div>
              </div>
            </div>
          </li>
  
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">电网电压</div>
              <div class="item-input-wrap">
                <select name="gender">
                  <option value="male" selected>1:220V</option>
                  <option value="female">2:315V</option>
                  <option value="fema1le">3:380V</option>
                </select>
              </div>
            </div>
          </div>
        </li>


        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">PV侧电池类型</div>
              <div class="item-input-wrap">
                <select name="gender">
                  <option value="male" selected>PV</option>
                  <option value="female">锂电池 </option>
                  <option value="fema1le">铅酸电池</option>
                </select>
              </div>
            </div>
          </div>
        </li>
        
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">DC侧电池类型</div>
              <div class="item-input-wrap">
                <select name="gender">
                  <option value="female">1:锂电池 </option>
                  <option value="fema1le">铅酸电池</option>
                </select>
              </div>
            </div>
          </div>
        </li>

        
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">恢复出厂 设置</div>
              <div class="item-input-wrap">
                <select name="gender">
                  <option value="fema1le" selected>否</option>
                  <option value="female">是 </option>
                </select>
              </div>
            </div>
          </div>
        </li>
          


        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">电池周期自检</div>
              <div class="item-input-wrap">
                <select name="gender">
                  <option value="female">一个星期</option>
                  <option value="fema1le">两个星期</option>
                  <option value="fema2le">一个月</option>
                  <option value="fema3le">二个月</option>
                  <option value="fema4le">六个月</option>
                </select>
              </div>
            </div>
          </div>
        </li>
        
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">电池周期自检</div>
              <div class="item-input-wrap">
                <select name="gender">
                  <option value="female">48AH</option>
                  <option value="fema1le">72AH</option>
                  <option value="fema2le">100AH</option>
                </select>
              </div>
            </div>
          </div>
        </li>
        </ul>
      </form>
      
      <div class="block block-strong row">
        <div class="col"><a class="button convert-form-to-data" href="#">下发控制</a></div>
      </div>

    </div>
  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page, f7BlockTitle } from 'framework7-vue';
  export default {
    components: {
      f7Navbar,
      f7Page,
      f7BlockTitle,
    },
  };
</script>
