<template>
  <div class="paymentCode">
      <Swiper>
          <div class="top">
              <i></i>付款码
          </div>
          <div class="contain">
              <p>扫描下方二维码付款</p>
              <img src="./images/qrcode.png" alt=""/>
              <div class="prompt">
                  <i></i>每分钟自动更新，仅限当前使用
              </div>
          </div>
      </Swiper>    
  </div>
</template>

<script>
import Swiper from '../../components/common/Swiper'
export default {
 name: "",
  data () {
    return {
    }
  },
  components: {
      Swiper
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
.paymentCode{
    width: 100%;
    height: 100%;
    background: #b359fc;
    .top{
        font-size: .42rem;
        color: #fff;
        text-align: center;
        padding-top: .66rem;
        position: relative;
        i{
            position: absolute;
            top: .74rem;
            left: .4rem;
            width: .48rem;
            height: .48rem;
            @include background_img("../my/images/back.png");
        }
    }
    .contain{
        width: 6.08rem;
        height: 9.14rem;
        margin: 0 auto;
        margin-top: 1rem;
        text-align: center;
        font-size: .32rem;
        padding-top: .8rem;
        @include background_img("./images/bg_img.png");
        img{
            width: 3.46rem;
            height: 3.46rem;
            margin: .4rem 0;
        }
        .prompt{
            font-size: .28rem;
            color: #999;
            i{
                display: inline-block;
                width: .34rem;
                height: .27rem;
                @include background_img("./images/update.png");
                margin-right: .1rem;
                margin-bottom: -.03rem;
            }
        }
    }
}
</style>