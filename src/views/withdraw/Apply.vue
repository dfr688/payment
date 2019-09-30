<template>
  <div class="apply">
      <Swiper>
          <HeaderTop title="提现"/>
          <div class="contain">
              <div></div>
              <p>提现申请成功</p>
              <span>预计2019-06-20  23：59前到账</span>
          </div>
          <Btn text="完成"/>
      </Swiper>    
  </div>
</template>

<script>
import Swiper from '../../components/common/Swiper'
import HeaderTop from '../../components/common/HeaderTop'
import Btn from '../../components/common/Btn'
export default {
 name: "",
  data () {
    return {
    }
  },
  components: {
      Swiper,
      HeaderTop,
      Btn
  },
  computed: {},
  watch: {},
  methods: {},
  created () {},
  mounted () {},
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_mixins.scss';
.apply{
    height: 100%;
    .contain{
        text-align: center;
        font-size: .36rem;
        margin-bottom: .7rem;
        margin-top: 1.2rem;
        div{
            width: 1.28rem;
            height: 1.28rem;
            @include background_img("./images/success.png");
            margin: 0 auto;
            margin-bottom: .5rem;
        }
        p{
            margin-bottom: .1rem;
        }
        span{
            font-size: .28rem;
            color: #999;
        }
    }
}
</style>