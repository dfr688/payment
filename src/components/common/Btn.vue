<template>
  <div class="btn" @click="handle">
      <van-button type="primary">{{ text }}</van-button>
  </div>
</template>

<script>
export default {
 name: "",
  data () {
    return {
    }
  },
  props: [
      "text"
  ],
  components: {},
  computed: {},
  watch: {},
  methods: {
    handle() {
      // 提现按钮
      this.$emit("withDraw");
      // 退出登录按钮
      this.$emit("signOut");
      // 修改密码确定按钮
      this.$emit("goSure");
      // 修改支付密码确定按钮
      this.$emit("goConfirm");
      // 提交认证按钮
      this.$emit("submitIdentify");
      // 添加银行卡提交按钮
      this.$emit("submitInfo");
    }
  },
  created () {},
  mounted () {},
}
</script>
<style lang="scss" scoped>
.btn{
    width: 6.7rem;
    height: .8rem;
    line-height: .8rem;
    font-size: .36rem;
    margin: 0 auto;
    margin-bottom: .3rem;
    .van-button{
        font-size: .36rem;
        width: 6.7rem;
        height: .8rem;
        line-height: .8rem;
        background: #495aff;
        border-radius: .4rem;
        border: none;
    }
}
</style>