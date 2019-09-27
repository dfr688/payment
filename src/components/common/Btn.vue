<template>
  <div class="btn">
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
  methods: {},
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