import Vue from "vue";
import App from "./App.vue";
import router from "./router/routers";
import store from "./store/index";
import $ from "jquery";
import Vant from "vant";
import "vant/lib/index.css";
import utils from "./static/js/utils";
import http from "./service/http";
import VueLazyload from "vue-lazyload";
import { Toast } from "vant";
import { CountDown } from "vant";
Vue.use(Toast);
Vue.use(CountDown);

import axios from "axios";

//引入公用css， js
import "@static/css/common.css";
import "@static/fonts/iconfont.css";

Vue.prototype.$ = $;
Vue.config.productionTip = false;
Vue.prototype.axios = axios;

const publicPath = process.env.BASE_URL;
Vue.prototype.$publicPath = publicPath;
Vue.prototype.utils = utils;

const plugins = [utils]; // 插件列表
plugins.map((plg) => Vue.use(plg)); // 引入插件
Object.assign(Vue.prototype, { $http: http });

Vue.use(Vant);
Vue.use(VueLazyload);

new Vue({
  el: "#app",
  router: router,
  store,
  render: (h) => h(App),
}).$mount("#app");
