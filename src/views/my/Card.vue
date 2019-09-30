<template>
  <div class="card">
      <Swiper>
            <HeaderTop title="银行卡">
              <div @click="goAddCard">添加</div>
            </HeaderTop>
            <div class="bank one">
                <div class="detail">
                    <div class="left">
                        <img src="../withdraw/images/bank_01.png" alt=""/><span>中国银行</span>
                    </div>
                    <div class="right">
                        储蓄卡
                    </div>
                </div>
                <p>6666**** **** ****</p>
            </div>
            <div class="bank two">
                <div class="detail">
                    <div class="left">
                        <img src="../withdraw/images/bank_01.png" alt=""/><span>中国银行</span>
                    </div>
                    <div class="right">
                        储蓄卡
                    </div>
                </div>
                <p>6666**** **** ****</p>
            </div>
            <div class="bank three">
                <div class="detail">
                    <div class="left">
                        <img src="../withdraw/images/bank_01.png" alt=""/><span>中国银行</span>
                    </div>
                    <div class="right">
                        储蓄卡
                    </div>
                </div>
                <p>6666**** **** ****</p>
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
    }
  },
  components: {
      Swiper,
      HeaderTop
  },
  computed: {},
  watch: {},
  methods: {
    //添加
    goAddCard() {
        this.$router.push("/addcard");
    }   
  },
  created () {},
  mounted () {},
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_mixins.scss';
.card{
    height: 100%;
     .bank{
        width: 6.7rem;
        height: 3.2rem;
        padding: 0 .3rem;
        padding-top: .3rem;
        margin: 0 auto;
        color: #fff;
        font-size: .32rem;
        .detail{
            @include flex;
            .left{
                img{
                    width: .64rem;
                    height: .64rem;
                    margin-bottom: -.18rem;
                    margin-right: .2rem;
                }
            }
            .right{
                font-size: .24rem;
                opacity: 0.5;
                margin-bottom: -.14rem;
            }
        }
        p{
            text-align: center;
            margin-top: .8rem;
            font-size: .4rem;
        }
    }
    .one{
        @include bg_one;
        margin-top: .8rem;
    }
    .two{
        @include bg_two;
        margin-top: -1.8rem;
        position: relative;
    }
    .three{
        @include bg_three;
        margin-top: -1.8rem;
        position: relative;
    }
}
</style>