<template>
  <div>
    <van-cell-group title="请输入付款金额">
      <van-field
        v-model="money"
        type="number"
        @blur="blur"
        placeholder="￥0.00元"
      >
        <div slot="label" class="fontSize">金额:</div>
      </van-field>
    </van-cell-group>
    <van-cell-group title="请选择支付方式" class="left">
      <van-cell is-link center :title-style="titleStyle" @click="quickPassPay">
        <div slot="title">银联云闪付</div>
        <div slot="icon">
          <img src="../../static/img/unionpay.png" class="ImgSize" />
        </div>
      </van-cell>
      <van-cell is-link center :title-style="titleStyle" @click="ysStagesPay">
        <div slot="title">银联分期支付</div>
        <div slot="icon">
          <img src="../../static/img/unionpay.png" class="ImgSize" />
        </div>
      </van-cell>
      <van-cell is-link center :title-style="titleStyle" @click="ysWxPay">
        <div slot="title">银联微信支付</div>
        <div slot="icon">
          <img src="../../static/img/WXpayment.png" class="ImgSize" />
        </div>
      </van-cell>
      <!-- <van-cell is-link center :title-style="titleStyle">
        <div slot="title">花呗分期</div>
        <div slot="label" class="red">3期0费率</div>
        <div slot="icon">
          <img src="../../static/img/huabei.png" class="ImgSize" />
        </div>
      </van-cell>
      <van-cell is-link center :title-style="titleStyle">
        <div slot="title">掌上生活</div>
        <div slot="label">需安装掌上生活客户端</div>
        <div slot="icon">
          <img src="../../static/img/handheldLife.png" class="ImgSize" />
        </div>
      </van-cell> -->
      <!-- <van-cell center id="flex">
              <div slot="title">查看更多支付方式</div>
              <van-icon name="arrow-down" />
            </van-cell> -->
    </van-cell-group>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      money: "",
      testMoney: false,
      merchantId: this.$route.query.merchantId,
      subjectType: this.$route.query.subjectType,
      titleStyle: {
        textAlign: "left",
        marginLeft: "7px",
        fontSize: "1.5em",
      },
    };
  },
  methods: {
    // 输入框失焦时判断金额
    blur() {
      let _this = this;
      if (_this.merchantId) {
        let reg = new RegExp(
          "^(([1-9][0-9]*)|(([0]\\.\\d{1,2}|[1-9][0-9]*\\.\\d{1,2})))$"
        );
        let obj = this.money;
        if (obj <= 0) {
          Toast.fail("请输入正确金额!");
          return _this.testMoney;
        } else if (!reg.test(obj)) {
          Toast.fail("请输入正确金额!");
          return _this.testMoney;
        }
        _this.testMoney = true;
        return _this.testMoney;
      } else {
        Toast.fail("请先扫描商户二维码!");
        return _this.testMoney;
      }
    },

    //银商微信支付
    ysWxPay() {
      let _this = this;
      if (_this.testMoney) {
        let transactionOrder = {};
        transactionOrder.orderMoney = _this.money * 100;
        transactionOrder.orderStore = _this.merchantId;
        transactionOrder.subjectType = _this.subjectType;
        _this.$http
          .post("/ys/wx/pay", { transactionOrder: transactionOrder })
          .then((res) => {
            //console.log(res.data.data);
            if (res.data.SUCCESS == 200) {
              window.location.href = res.data.data;
              _this.$router.push({
                path: "/paySuccess",
                query: {
                  merchantId: _this.merchantId,
                  subjectType: _this.subjectType,
                },
              });
            } else {
              _this.$router.push({
                path: "/payFail",
                query: {
                  merchantId: _this.merchantId,
                  subjectType: _this.subjectType,
                },
              });
            }
          });
      }
    },

    //银联分期支付
    ysStagesPay() {
      let _this = this;
      if (_this.testMoney) {
        let transactionOrder = {};
        transactionOrder.orderMoney = _this.money * 100;
        transactionOrder.orderStore = _this.merchantId;
        transactionOrder.subjectType = _this.subjectType;
        _this.$http
          .post("/ys/sdk/sdkPay", { transactionOrder: transactionOrder })
          .then((res) => {
            if (res.data.SUCCESS == 200) {
              _this.testHtml = res.data.data;
              if (_this.testHtml != null) {
                _this.$nextTick(() => {
                  document.forms["pay_form"].submit();
                });
              }
              _this.$router.push({
                path: "/paySuccess",
                query: {
                  merchantId: _this.merchantId,
                  subjectType: _this.subjectType,
                },
              });
            } else {
              _this.$router.push({
                path: "/payFail",
                query: {
                  merchantId: _this.merchantId,
                  subjectType: _this.subjectType,
                },
              });
            }
          });
      }
    },

    //银联云闪付
    quickPassPay() {
      let _this = this;
      if (_this.testMoney) {
        let transactionOrder = {};
        transactionOrder.orderMoney = _this.money * 100;
        transactionOrder.orderStore = _this.merchantId;
        transactionOrder.subjectType = _this.subjectType;
        _this.$http
          .post("/ys/quickPass/quickPassPay", {
            transactionOrder: transactionOrder,
          })
          .then((res) => {
            if (res.data.SUCCESS == 200) {
              _this.testHtml = res.data.data;
              if (_this.testHtml != null) {
                _this.$nextTick(() => {
                  document.forms["pay_form"].submit();
                });
              }
              _this.$router.push({
                path: "/paySuccess",
                query: {
                  merchantId: _this.merchantId,
                  subjectType: _this.subjectType,
                },
              });
            } else {
              _this.$router.push({
                path: "/payFail",
                query: {
                  merchantId: _this.merchantId,
                  subjectType: _this.subjectType,
                },
              });
            }
          });
        _this.$router.push({
          path: "/payFail",
          query: {
            merchantId: _this.merchantId,
            subjectType: _this.subjectType,
          },
        });
      }
    },
  },
  mounted() {
    document.body.style.backgroundColor = "#eeeeee";
  },

  created() {},
};
</script>
<style scoped>
.bgcolorWhite {
  background-color: white;
}

.bgcolorYellow {
  background-color: yellow;
}

#underLine {
  text-decoration: underline;
}

.left {
  text-align: left;
}

#flex {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.fontSize {
  font-size: 1.5em;
}

.red {
  color: #ba4057;
  font-size: 1em;
}

#imgRight {
  margin-right: 6px;
}

.titleRight {
  margin-right: 5px;
}

.ImgSize {
  width: 40px;
  height: 40px;
}
</style>
