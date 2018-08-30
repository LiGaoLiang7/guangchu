<template>
  <f7-page>
    <f7-navbar>
      <div class="title">{{$t('app.setting.title')}}</div>
    </f7-navbar>
    <f7-block class="block block-strong setting cf">
      <div class="cf">
        <input type="text" class="l ipaddress" name="IP" style="text-align: left;" placeholder="IP" v-model="ip"><!--disabled="disabled"-->
        <f7-icon v-show="!connectedState" f7="close_round" style="margin: 0;line-height: 1;" size="27px" color="red"></f7-icon>
        <f7-icon v-show="connectedState" f7="check_round" style="margin: 0;line-height: 1;" size="27px" color="green"></f7-icon>
        <!--<input type="number" class="l port" name="PORT" min="0" max="9999" v-model="port" placeholder="端口">-->
      </div>
      <f7-button fill @click='connectSocket' style="width:100%;margin-top:10px;">{{$t('app.common.connectbutton')}}</f7-button>
    </f7-block>

    <f7-block class="block block-strong cf">
      <div class="titlea">{{$t('app.common.updatePCU')}}</div>
      <!-- <textarea name="" id="fileinput" cols="25" rows="5"></textarea> -->
      <!-- <img src="https://placehold.it/150x140" alt="图片" id="imageFile" width="150" height="140"> -->
      <div class="cf">
        <input type="file" accept="application/octet-stream" @change="getfile($event,1)" class="filechoose" id="pcufile">
        <label for="pcufile" class="choosefilebutton textEllipsis l" v-show="filepath1 == ''">{{$t('app.message.installpcu')}}</label>
        <label for="pcufile" class="choosefilebutton textEllipsis l" v-show="filepath1 != ''">{{filepath1}}</label>
        <button class="button r" :class="isDisabled?'button-disabled':'button-fill'" @click="loadFile(filepath1,1)" :disabled="isDisabled">上传</button>
      </div>
    </f7-block>
    <f7-block class="block block-strong">
      <div class="titlea">{{$t('app.common.updateDSP')}}</div><!-- <img src="https://placehold.it/150x140" alt="图片" id="imageFile"   width="150" height="140"> {{$t('app.common.update')}} -->
      <div class="cf">
        <input type="file" accept="application/octet-stream" @change="getfile($event,2)" class="filechoose" id="DSPfile">
        <label for="DSPfile" class="choosefilebutton textEllipsis l" v-show="!filepath2">{{$t('app.message.installdsp1')}}</label>
        <label for="DSPfile" class="choosefilebutton textEllipsis l" v-show="filepath2">{{filepath2}}</label>
        <button class="button r" :class="isDisabled?'button-disabled':'button-fill'" @click="loadFile(filepath2,2)" :disabled="isDisabled">上传</button>
      </div>
      <div class="cf">
        <input type="file" accept="application/octet-stream" @change="getfile($event,3)" class="filechoose" id="DSPfile2">
        <label for="DSPfile2" class="choosefilebutton textEllipsis l" v-show="!filepath3">{{$t('app.message.installdsp2')}}</label>
        <label for="DSPfile2" class="choosefilebutton textEllipsis l" v-show="filepath3">{{filepath3}}</label>
        <button class="button r" :class="isDisabled?'button-disabled':'button-fill'" @click="loadFile(filepath3,3)" :disabled="isDisabled">上传</button>
      </div>
    </f7-block>
    <!--<f7-block  class="block block-strong cf">-->
    <!--<div class="cf">-->
    <!--<input type="file" accept="application/octet-stream" @change="getfile($event,3)" class="filechoose" id="DSPfile2">-->
    <!--<label for="DSPfile2" class="choosefilebutton textEllipsis l" v-show="filepath3 == ''">{{$t('app.message.installdsp2')}}</label>-->
    <!--<label for="DSPfile2" class="choosefilebutton textEllipsis l" v-show="filepath3 != ''">{{filepath3}}</label>-->
    <!--<f7-button fill class=" r"  @click="loadFile(filepath3, 3)"  icon="iconfont icon-gongnengshengji"></f7-button>-->
    <!--</div>-->
    <!--</f7-block>-->
    <f7-block class="block block-strong">
      <div class="titlea">{{$t('app.common.languageset')}}</div>
      <div class="item-content languageswitch" style="height: 32px;">
        <div class="item-inner">
          <div class="item-title abs" style="margin-top: 3px;">{{$t('app.common.language')}}</div>
          <div class="item-after abs" style="right: 15px;">
            <label class="toggle toggle-init" @click="switchLanguage">
              <input type="checkbox" name="toggle" value="yes" v-model="lang"><i class="toggle-icon"></i>
            </label>
          </div>
        </div>
      </div>
    </f7-block>
    <f7-block class="abs">
      {{$t('app.common.company')}}
    </f7-block>
  </f7-page>
</template>
<script>
    import Vue from "vue";
    export default {
        data() {
            return {
                ip: "10.10.100.254",
                port: 8899,
                connectedState: 0,
                lang: true,
                filepath1: "",
                filepath2: "",
                filepath3: "",
                isDisabled: true
            };
        },
        mounted: function() {
          this.initFilePlugin();
          this.lang = localStorage.getItem("lang") == "zh-CN" ? true : false;
        },
        computed: {
            Connected: function() {
                return this.$store.state.connected;
            },
            Disabled: function() {
                return this.$store.state.IsDisabled;
            }
        },
        watch: {
            Connected: function() {
                this.connectedState = this.Connected;
            },
            Disabled: function() {
                this.isDisabled = this.Disabled;
            }
        },
        methods: {
            getfile: function(e,index) {
                // this.$f7.dialog.alert(e.target.value, this.$t('app.message.tip'));
                if (index == 2) {
                    this.filepath2 = e.target.value;
                    this.filepath2 = this.filepath2.substring(
                        this.filepath2.lastIndexOf("\\") + 1,
                        this.filepath2.length
                    );
                } else if(index == 3) {
                    this.filepath3 = e.target.value;
                    this.filepath3 = this.filepath3.substring(
                        this.filepath3.lastIndexOf("\\") + 1,
                        this.filepath3.length
                    );
                }else {
                    this.filepath1 = e.target.value;
                    this.filepath1 = this.filepath1.substring(
                        this.filepath1.lastIndexOf("\\") + 1,
                        this.filepath1.length
                    );
                }
            },
            connectSocket: function() {
                this.$store.commit("CONN_DATA_CHANGE", { ip: this.ip, port: this.port });
            },
            switchLanguage: function(lang) {
                var language = this.lang == true ? "en" : "zh-CN";
                Vue.config.lang = language;
                localStorage.setItem("lang", language);
            },
            // 打开文件操作
            loadFile: function(filename, index) {
                if (filename == "") {
                    this.$f7.dialog.alert(
                        this.$t("app.message.pickafile"),
                        this.$t("app.message.tip")
                    );
                }else if (index == 1 && filename != "Update_PCU.bin") {
                    this.filepath1 = "";
                    this.$f7.dialog.alert(
                        this.$t("app.message.filepickerror"),
                        this.$t("app.message.tip")
                    );
                } else if (index == 2 && filename != "Update_DSP_1.bin") {
                    this.filepath2 = "";
                    this.$f7.dialog.alert(
                        this.$t("app.message.filepickerror"),
                        this.$t("app.message.tip")
                    );
                } else if (index == 3 && filename != "Update_DSP_2.bin") {
                    this.filepath3 = "";
                    this.$f7.dialog.alert(
                        this.$t("app.message.filepickerror"),
                        this.$t("app.message.tip")
                    );
                } else {
                    var _this = this;
                    window.requestFileSystem(LocalFileSystem.PERSISTENT,5 * 1024 * 1024,function(fs) {
                            //TEMPORARY
                            // _this.$f7.dialog.alert('打开的文件系统: ' + fs.name);
                            // _this.$f7.dialog.alert("DirectoryEntry："+fs.root);  // DirectoryEntry 对象
                            // _this.$f7.dialog.alert("DirectoryEntry isFile："+fs.root.isFile);  //false
                            // _this.$f7.dialog.alert("DirectoryEntry isDirectory："+fs.root.isDirectory);  //true
                            // _this.$f7.dialog.alert("DirectoryEntry name："+fs.root.name);  //""
                            // _this.$f7.dialog.alert("DirectoryEntry fullPath："+fs.root.fullPath);  // /
                            // _this.$f7.dialog.alert("DirectoryEntry fileSystem："+fs.root.fileSystem);  // undefined
                            // _this.$f7.dialog.alert("DirectoryEntry nativeURL："+fs.root.nativeURL);
                            fs.root.getFile(filename,{ create: false, exclusive: false },
                                function(fileEntry) {
                                    _this.readBinaryFile(fileEntry, index);
                                },
                                _this.onErrorCreateFile
                            );
                        }, _this.onErrorLoadFs
                    );
                }
            },
            // 读取二进制文件
            readBinaryFile: function(fileEntry, index) {
                var _this = this;
                fileEntry.file(function (file) {
                    var reader = new FileReader();
                    reader.onloadend = function() {
                        // _this.$f7.dialog.alert(JSON.stringify(this.result));
                        var blob = new Blob([new Uint8Array(this.result)], { type: "text/plain" });
                        // alert("blob size : " + blob.size);
                        // _this.$f7.dialog.alert("result : " + this.result + " typeof :" + typeof this.result);
                        _this.displayBuffer(this.result, index);
                    };
                    // reader.readAsText(file);
                    reader.readAsArrayBuffer(file);
                }, _this.onErrorReadFile);

            },

            displayBuffer: function(buffer, index) {
                // var _this = this;
                // var result = "";
                // for(var i = 0; i < blob.size; i++){
                //   var reader = new FileReader();
                //   var newblob = blob.slice(i, i+1);
                //   reader.onload = function(evt){
                //       var uint8View = new DataView(evt.target.result);
                //       result = result + " " + uint8View.getUint8(0, false);
                //   }
                //   reader.readAsArrayBuffer(newblob);
                // }

                // 将arraybuffer传递到main.vue中
                var sub_buffer = buffer.slice(114688);
                if(index == 1){
                    this.$store.commit("PCUData_CHANGE", buffer);
                }else if(index == 2){
                    this.$store.commit("DSPData_1_CHANGE", sub_buffer);
                } else if(index == 3){
                    this.$store.commit("DSPData_2_CHANGE", sub_buffer);
                }
                // var uint8View = new DataView(arraybuffer);

                // for(var i = 0; i < uint8View.byteLength; i++){
                //   result = result + uint8View.getUint8(i, false) + " ";
                // }
                // // this.$f7.dialog.alert(result);
                // var txtArea = document.getElementById('fileinput');
                // txtArea.value = result;
            },
            // readfile successfuly
            successCallback: function(fs) {
                var _this = this;
                fs.root.getFile(
                    "log.txt",
                    {},
                    function(fileEntry) {
                        fileEntry.file(function(file) {
                            var reader = new FileReader();

                            reader.onloadend = function(e) {
                                var txtArea = document.getElementById("fileinput");
                                txtArea.value = this.result;
                            };
                            reader.readAsText(file);
                        }, _this.onErrorReadFile);
                    },
                    _this.onErrorReadFile
                );
            },
            onErrorReadFile: function() {
                this.$f7.dialog.alert(
                    this.$t("app.message.filereadfaild"),
                    this.$t("app.message.tip")
                );
            },
            onErrorCreateFile: function() {
                this.$f7.dialog.alert(
                    this.$t("app.message.filecreatefaild"),
                    this.$t("app.message.tip")
                );
            },
            onErrorLoadFs: function() {
                this.$f7.dialog.alert(
                    this.$t("app.message.fileloadfailed"),
                    this.$t("app.message.tip")
                );
            },
            onDeviceReady() {
                // this.$f7.dialog.alert("device is ready");
                // this.$f7.dialog.alert(cordova.file);
            },
            initFilePlugin: function() {
                document.addEventListener("deviceready", this.onDeviceReady, false);
                // window.addEventListener('filePluginIsReady', function(){ console.log('File plugin is ready');}, false);
            }
        }
    };
</script>
<style>
  .ipaddress {
    /*width:80%;*/
    line-height: 27px;
  }
  .port {
    /*width:20%;*/
    line-height: 27px;
  }

  .filechoose {
    visibility: hidden;
    display: none;
  }
  .choosefilebutton {
    text-align: center;
    border: 1px solid #007aff;
    width: 80%;
    display: inline-block;
    line-height: 27px;
    border-radius: 5px;
    color: #007aff;
  }
  html.with-panel-left-cover .panel-left {
    background-color: rgb(239, 239, 244);
  }
  .panel-left {
    height: 100%;
    box-shadow: 0px 0 1px #5d5959;
    padding-right: 0px;
    border-right: 1px solid #ddd;
  }
  .titlea {
    font-weight: bold;
    line-height: 37px;
    font-size: 16px;
  }
  .toggle-init {
    position: relative;
  }
  .languageswitch .toggle-init::before {
    content: "EN";
    display: block;
    top: 6px;
    left: 4px;
    position: absolute;
    color: #fff;
    z-index: 5;
  }
  .margin_top20 {
    margin-top: 20px;
  }
  .ios .block {
    margin: 5px 0 0px 0;
  }
  .panel-backdrop {
    background-color: rgba(0, 0, 0, 0.53) !important;
  }
  .ios .toggle-icon {
    background: #007aff !important;
  }
  .cf{
    margin: 10px 0;
  }
  .cf > .button{
    font-size: 12px;
    padding: 0 !important;
    color: #fff !important;
    width: calc(20% - 5px);
    border: none !important;
  }
  .button-disabled{
    background-color: #ddd;
  }
</style>
