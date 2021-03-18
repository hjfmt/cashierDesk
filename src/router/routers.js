import Vue from "vue";
import Router from "vue-router";
const index = () => import("../components/index");
const payFail = () => import("../components/request-payment/payFail");
const paySuccess = () => import("../components/request-payment/paySuccess");

const cashierDesk = () =>
  import("../components/request-payment/cashierDesk.vue");
// 引入cashierDesk路由

const notFound = () => {
  import("../components/error/notFound.vue");
};

Vue.use(Router);

export const constantRoutes = [
    {
      path: "/", //代表根目录
      component: cashierDesk, //以引入index.vue为例
    },
    {
      path: "/index",
      name: "index",
      component: index,
    },
    {
      path: "/payFail",
      name: "payFail",
      component: payFail,
    },
    {
      path: "/paySuccess",
      name: "paySuccess",
      component: paySuccess,
    },
    {
      path: "/cashierDesk",
      name: "cashierDesk",
      component: cashierDesk,
    },

  ]

const createRouter = () => new Router({
    mode: 'history', // 去掉url中的#
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})
const router = createRouter()
export default router;
