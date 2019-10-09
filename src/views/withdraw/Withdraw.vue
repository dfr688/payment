<template>
  <div class="withdraw">
      <Swiper>
        <HeaderTop title="提现">
            <div @click="goRecord">记录</div>
        </HeaderTop>
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in list" :key="index">
                <div class="bank" :class="{one:0 ===item.num,two:1===item.num,three:2===item.num}">
                    <div class="detail">
                        <div class="left">
                            <i :class="{first: 0===item.num,second: 1===item.num,third: 2===item.num}"></i><span>{{ item.bankType }}</span>
                        </div>
                        <div class="right">
                            储蓄卡
                        </div>
                    </div>
                    <p>{{ getNum(item.cardNo) }}</p>
                </div>
            </swiper-slide>
        </swiper>
        <div class="amount">
            <p>提现金额</p>
            <span>¥</span><input type="text" v-model="money" placeholder="请输入提现金额"/>
            <div>
                <div class="left">
                    可提现金额{{ balance }}
                </div>
                <div class="right" @click="allWithdraw">
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
      <!-- <van-popup class="pop" v-model="show2">
        <div class="boxs forgetTip">
            <p>提示</p>
            <span>商户支付终端未授权</span>
            <ul>
            <li @click="goSure">确定</li>
            </ul>
        </div>
      </van-popup> -->
  </div>
</template>

<script>
import Swiper from '../../components/common/Swiper'
import Btn from '../../components/common/Btn'
import HeaderTop from '../../components/common/HeaderTop'
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
import Pay from './Pay'
import {mapState} from 'vuex'
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
        show2: false,
        list: []
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
    ...mapState(["balance"])
  },
  watch: {},
  methods: {
    goRecord() {
        this.$router.push("/record");
    },
    // 全部提现
    allWithdraw() {
        this.money = this.balance;
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
    // 隐藏银行卡号 四位
      getNum(num) {
        return "****"+" "+"****"+" "+"****"+" "+num.substr(num.length-4);
      }, 
  },
  created () {
      let token = localStorage.getItem("token");
      this.baseJs.ajaxReq("/payment/user/bank/card",{},"get",token)
      .then(res => {
        //   console.log(res);
          let bankList = res.data;
          for(let i=0;i<bankList.length;i++){
              if(bankList[i].bankType ==="中国银行"){
                  bankList[i].num = 0
              }else if(bankList[i].bankType ==="邮政储蓄银行"){
                  bankList[i].num = 1
              }else if(bankList[i].bankType ==="中国建设银行"){
                  bankList[i].num = 2
              }
          }
        this.list = bankList;
      })
      .catch(err => {
          console.log(err);
      })
  },
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
                i{
                    display: inline-block;
                    width: .64rem;
                    height: .64rem;
                    margin-bottom: -.18rem;
                    margin-right: .2rem;
                    &.first{
                        @include background_img("../withdraw/images/bank_01.png");
                    }
                    &.second{
                        @include background_img("../withdraw/images/bank_02.png");
                    }
                    &.third{
                        @include background_img("../withdraw/images/bank_03.png");
                    }
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