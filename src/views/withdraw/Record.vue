<template>
  <div class="record">
      <Swiper>
        <HeaderTop title="提现记录"/>
        <ul class="detail">
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
}
</style>