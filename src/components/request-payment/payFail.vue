<template>
  <div>
    <ul style="margin-top: 50px;">
      <li style="text-align: center">
        <van-image :src="require('../../static/img/fail.png')" />
      </li>
      <li style="text-align: center">
        <van-button type="primary" @click="back">返回首页</van-button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      merchantId: this.$route.query.merchantId,
      subjectType: this.$route.query.subjectType,
    };
  },
  methods: {
    back() {
      let _this = this;
      //window.location.href = 'https://www.jiadaoshouyin.com/ttjdac';
      _this.$router.push({
        path: "/",
        query: { merchantId: _this.merchantId, subjectType: _this.subjectType },
      });
    },
  },
};
</script>

<style></style>
