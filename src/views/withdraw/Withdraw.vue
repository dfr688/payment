<template>
  <div class="withdraw">
      <Swiper>
        <HeaderTop title="提现">
            <div @click="goRecord">记录</div>
        </HeaderTop>
        <swiper :options="swiperOption">
            <swiper-slide>
                <div class="bank one">
                    <div class="detail">
                        <div class="left">
                            <img src="./images/bank_01.png" alt=""/><span>中国银行</span>
                        </div>
                        <div class="right">
                            储蓄卡
                        </div>
                    </div>
                    <p>6666**** **** ****</p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="bank two">
                    <div class="detail">
                        <div class="left">
                            <img src="./images/bank_01.png" alt=""/><span>中国银行</span>
                        </div>
                        <div class="right">
                            储蓄卡
                        </div>
                    </div>
                    <p>6666**** **** ****</p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="bank three">
                    <div class="detail">
                        <div class="left">
                            <img src="./images/bank_01.png" alt=""/><span>中国银行</span>
                        </div>
                        <div class="right">
                            储蓄卡
                        </div>
                    </div>
                    <p>6666**** **** ****</p>
                </div>
            </swiper-slide>
        </swiper>
        <div class="amount">
            <p>提现金额</p>
            <span>¥</span><input type="text" v-model="money" placeholder="请输入提现金额"/>
            <div>
                <div class="left">
                    可提现金额520.00
                </div>
                <div class="right">
                    全部提现
                </div>
            </div>
        </div>
        <Btn text="提现" @withDraw="withDraw"/>
      </Swiper>
      <!-- 密码弹出层 -->
      <van-popup v-model="show" position="bottom">
        <Pay ref="pay" @closePopup="closePopup" @forgetPopup="forgetPopup"/>
      </van-popup>
      <van-popup class="pop" v-model="show2">
        <div class="boxs forgetTip">
            <p>提示</p>
            <span>商户支付终端未授权</span>
            <ul>
            <li @click="goSure">确定</li>
            </ul>
        </div>
      </van-popup>
  </div>
</template>

<script>
import Swiper from '../../components/common/Swiper'
import Btn from '../../components/common/Btn'
import HeaderTop from '../../components/common/HeaderTop'
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
import Pay from './Pay'
export default {
 name: "",
  data () {
    return {
        swiperOption: {
			effect : 'coverflow',
            slidesPerView: 2,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 30,
                stretch: 10,
                depth: 60,
                modifier: 2,
                slideShadows : false 
            }
        },
        money: "",
        show: false,
        show2: false
    }
  },
  components: {
    Swiper,
    HeaderTop,
    swiper,
    swiperSlide,
    Btn,
    Pay
  },
  computed: {
    
  },
  watch: {},
  methods: {
    goRecord() {
        this.$router.push("/record");
    },
    // 提现按钮
    withDraw() {
        if(this.money === ""){
            this.$toast.fail({
                message: '请输入提现金额',
                duration: 1000,
            });
        }else{
            this.show = true;
        }
    },
    //关闭弹出层
    closePopup() {
        this.show = false;
    },
    // 忘记密码弹框中的确定按钮
    goSure() {
        this.show2 = false;
    },
    // 忘记密码弹框
    forgetPopup() {
        this.show2 = true;
    },
  },
  created () {},
  mounted () {},
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_mixins.scss';
.withdraw{
    height: 100%;
    .bank{
        width: 5rem;
        height: 2.87rem;
        padding: 0 .3rem;
        padding-top: .3rem;
        margin-top: .8rem;
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
            margin-top: .6rem;
            font-size: .4rem;
        }
    }
    .one{
        @include bg_one;
        margin-left: -1.2rem;
    }
    .two{
        @include bg_two;
    }
    .three{
        @include bg_three;
    }
    .amount{
        font-size: .36rem;
        margin: 0 .4rem;
        margin-top: 1.2rem;
        p{
            margin-bottom: .3rem;
        }
        span{
            font-size: .6rem;
            margin-right: .1rem;
        }
        input{
            font-size: .4rem;
            width: 80%;
        }
        div{
            @include flex;
            margin-top: .2rem;
            margin-bottom: 1rem;
            .right{
                color: #ff0000;
            }
        }
    }
    .pop{
        border-radius: .2rem;
    }
    .boxs{
        width: 5rem;
        background: #fff;
        margin: 0 auto;
        font-size: .3rem;
        padding-top: .2rem;
        border-radius: .2rem;
        p{
            text-align: center;
            font-size: .4rem;
            margin-bottom: .2rem;
        }
        span{
            display: block;
            text-align: center;
            color: #999;
            margin-bottom: .2rem;
        }
        ul{
            display: flex;
            li{
                flex:1;
                text-align: center;
                padding: .2rem 0;
                border-top: 1px solid #f1f1f1;
                &:first-child{
                    border-right: 1px solid #f1f1f1;
                }
            }
        }
    }
    .forgetTip li{
        border-right: none!important;
    }
}
</style>