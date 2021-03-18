<template>
  <div>
      <ul style="margin-top: 50px;">
          <li><h3>请打开微信扫描商户二维码</h3></li>
          <!--<li><a @click="sys_click"><van-image :src="require('../static/img/QR-code.png')" onerror="defaultImg"/></a></li>-->
          <!--<li><a @click="sys_click"><h4>扫一扫</h4></a></li>-->
      </ul>
  </div>
</template>
<script>
    import wx from "weixin-js-sdk";
    import { Toast } from 'vant';
    export default {
        components: {

        },

        data() {
            return {
                defaultImg: 'this.src="' + require('../static/img/QR-code.png') + '"'
            }
        },

        methods: {
            // sys_click : function() {
            //     //这里【url参数一定是去参的本网址】
            //     let _this = this;
            //     let url = location.href.split('#')[0];
            //     // let url = "https://www.jiadaoshouyin.com/ac";
            //     _this.$http.post('/jssdk/config',{url:url}).then(res => {
            //         wx.config({
            //             // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            //             debug: false ,
            //             // 必填，公众号的唯一标识
            //             appId: 'wxe587220eaa6e3ff0',
            //             // 必填，生成签名的时间戳
            //             timestamp: res.data.data.timestamp,
            //             // 必填，生成签名的随机串
            //             nonceStr: res.data.data.nonceStr,
            //             // 必填，签名
            //             signature: res.data.data.signature,
            //             // 必填，需要使用的JS接口列表，所有JS接口列表
            //             jsApiList: ['checkJsApi', 'scanQRCode']
            //         });
            //         wx.ready(function () {
            //             wx.checkJsApi({
            //                 jsApiList: ['scanQRCode'],
            //                 success: function (res) {
            //                 }
            //             });
            //             wx.scanQRCode({
            //                 needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            //                 scanType: ["qrCode"], // 可以指定扫二维码还是一维码，默认二者都有
            //                 success: function (res) {
            //                     let result; // 当needResult 为 1 时，扫码返回的结果
            //                     let a = res.resultStr.split('=');
            //                     if(a.length>1){
            //                         result = a[1];
            //                     }else{
            //                         result = res.resultStr;
            //                     }
            //                     // if(result.toString().length==32){
            //                         _this.$router.push({path: '/payment',query: {id:result}})
            //                     // }else{
            //                     //     Toast.fail('请重新扫码正确的二维码！');
            //                     // }
            //                 }
            //             });
            //             wx.error(function (res) {
            //                 alert("出错了：" + res);//这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
            //                 console.log(res)
            //             });
            //         });
            //     });
            // },
            //
            // checkQRcode(){//判断二码合一
            //     let _this = this;
            //     debugger
            //     let merchantId = _this.$route.query.merchantId;
            //     let type = _this.$route.query.type;
            //     if(merchantId=='undefined'||merchantId==undefined||merchantId==null||merchantId=='null'||merchantId==''){
            //         //为空不操作
            //     }else{
            //         //不为空，跳转至选择产品页面
            //         let code = this.getQueryVariable('code');
            //         if(code=='undefined'||code==undefined||code==null||code=='null'||code==''){//code不为空
            //             let appid = 'wxe587220eaa6e3ff0';
            //             let url = "https://www.jiadaoshouyin.com/ttjdac/#/?merchantId="+merchantId;
            //             let redirect_uri = encodeURIComponent(url);
            //             let response_type = "code";
            //             let scope = "snsapi_base";
            //             let urls = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+appid+"&redirect_uri="+redirect_uri+"&response_type="+response_type+"&scope="+scope+"&connect_redirect=1#wechat_redirect";
            //             window.location.href = urls;
            //         }else{
            //             _this.$router.push({path: '/payment',query: {id:merchantId}})
            //         }
            //     }
            // },
            //
            // getQueryVariable(queryName) {//url取参
            //     var reg = new RegExp("(^|&)" + queryName + "=([^&]*)(&|$)", "i");
            //     var r = window.location.search.substr(1).match(reg);
            //     if ( r != null ){
            //         return decodeURI(r[2]);
            //     }else{
            //         return null;
            //     }
            // },
            //

        },

        mounted() {
            // const s = document.createElement('script');
            // s.type = 'text/javascript';
            // s.src = 'http://res2.wx.qq.com/open/js/jweixin-1.6.0.js';
            // document.body.appendChild(s);
        },

        created(){
          //  this.checkQRcode();
        }
    }
</script>

<style>
    /*@import '//at.alicdn.com/t/font_1341925_bg9lyx6rp6n.css';*/
    /*#app {*/
        /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
        /*-webkit-font-smoothing: antialiased;*/
        /*-moz-osx-font-smoothing: grayscale;*/
        /*text-align: center;*/
        /*color: #2c3e50;*/
    /*}*/
</style>
