<template>
  <div class="record">
      <Swiper>
        <HeaderTop title="提现记录"/>
        <ul class="detail" v-if="show">
          <li>
            <div class="left">
              <p>发起提现</p>
              <span>2019-06-13</span>
            </div>
            <div class="right">
              <span>提现中</span>
              <p>-102.50</p>
            </div>
          </li>
          <li>
            <div class="left">
              <p>发起提现</p>
              <span>2019-06-13</span>
            </div>
            <div class="right">
              <span>提现中</span>
              <p>-102.50</p>
            </div>
          </li>
          <li>
            <div class="left">
              <p>发起提现</p>
              <span>2019-06-13</span>
            </div>
            <div class="right">
              <span>提现中</span>
              <p>-102.50</p>
            </div>
          </li>
        </ul>
        <div class="nothing" v-if="!show">
            <div></div>
            暂无提现记录
        </div>
      </Swiper>  
  </div>
</template>

<script>
import Swiper from '../../components/common/Swiper'
import HeaderTop from '../../components/common/HeaderTop'
export default {
 name: "",
  data () {
    return {
      show: false
    }
  },
  components: {
    Swiper,
    HeaderTop
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
.record{
  height: 100%;
  .detail{
    margin: 0 .4rem;
    margin-top: .7rem;
    li{
      @include flex;
      font-size: .32rem;
      padding-bottom: .3rem;
      margin-bottom: .3rem;
      border-bottom: 1px solid #f1f1f1;
      .left{
        span{
          font-size: .2rem;
          color: #999;
        }
      }
      .right{
        text-align: right;
        span{
          font-size: .24rem;
          color: #999;
        }
        p{
          color: #ff0000;
          font-size: .36rem;
        }
      }
    }
  }
  .nothing{
        text-align: center;
        font-size: .32rem;
        color: #999;
        margin-top: 3rem;
        div{
            width: 1.28rem;
            height: 1.28rem;
            @include background_img("../my/images/nothing.png");
            margin: 0 auto;
            margin-bottom: .2rem;
        }
    }
}
</style>