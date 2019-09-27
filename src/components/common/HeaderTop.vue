<template>
  <div class="headerTop">
      <i></i>{{ title }}<slot></slot>
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
      "title"
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
@import '../../assets/scss/_mixins.scss';
.headerTop{
    padding-top: .66rem;
    font-size: .42rem;
    text-align: center;
    position: relative;
    i{
        position: absolute;
        top: .76rem;
        left: .4rem;
        width: .48rem;
        height: .48rem;
        @include background_img("~@/assets/images/arrow.png");
    }
    div{
        font-size: .36rem;
        color: #3373f3;
        position: absolute;
        top: .7rem;
        right: .4rem;
    }
}
</style>