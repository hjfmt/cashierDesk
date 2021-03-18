<template>
    <div>
        <ul style="margin-top: 50px;">
            <li style="text-align: center"><h2>支付成功</h2></li>
            <li  style="text-align: center">
                <van-cell-group>
                    <van-button type="primary" @click="back">返回首页</van-button>
                </van-cell-group
            ></li>
        </ul>
    </div>
</template>
<script>
    export default {
        components: {

        },
        data() {
            return {
                merchantId: this.$route.query.merchantId,
                subjectType: this.$route.query.subjectType,
            }
        },
        methods: {
            back() {
                let _this = this;
                //window.location.href = 'https://www.jiadaoshouyin.com/ttjdac';
                _this.$router.push({path: '/',query: {merchantId:_this.merchantId,subjectType:_this.subjectType}})
            }

        },

    }
</script>

<style>
</style>

