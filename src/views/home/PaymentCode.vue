<template>
  <div class="paymentCode">
      <Swiper>
          <div class="top">
              <i @click="goBack"></i>付款码
          </div>
          <div class="contain">
                <p>扫描下方二维码付款</p>
                <img src="./images/qrcode.png" alt=""/>
                <div class="prompt">
                    <i></i>每分钟自动更新，仅限当前使用
                </div>
                <div class="bank">
                    <div class="left">
                        <span :class="{one: 1===index,two:2===index,three: 3===index}"></span>
                        <div>
                            <p>{{ bank.bankType }}</p>
                            <p v-if="bank.cardNo !=undefined">{{ hiddenNum(bank.cardNo) }}</p>
                        </div>
                    </div>
                    <div class="right">
                        <!-- 更换 -->
                    </div>
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
        index : 0,
        bank: ""
    }
  },
  components: {
      Swiper
  },
  computed: {},
  watch: {},
  methods: {
      goBack() {
          this.$router.push("/home");
      },
      // 隐藏卡号中间几位
    hiddenNum(num){
        return num.substr(0,4) +" ******* "+ num.substr(-4);
    }
  },
  created () {
      let token = localStorage.getItem("token");
      this.baseJs.ajaxReq("/payment/user/bank/card",{},"get",token)
      .then(res => {
        // console.log(res);
        this.bank = res.data[0];
        if(this.bank.bankType ==="中国银行"){
            this.index = 1;
            return;
        }
        if(this.bank.bankType ==="邮政储蓄银行"){
            this.index = 2;
            return;
        }
        if(this.bank.bankType ==="中国建设银行"){
            this.index = 3;
            return;
        }
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
        .bank{
            margin: 1.8rem 1rem 0 .6rem;
            @include flex;
            .left{
                span{
                    display: inline-block;
                    width: .64rem;
                    height: .64rem;
                    @include background_img("../withdraw/images/bank_03.png");
                    margin-bottom: -.05rem;
                    &.one{
                        @include background_img("../withdraw/images/bank_01.png");
                    }
                    &.two{
                        @include background_img("../withdraw/images/bank_02.png");
                    }
                    &.three{
                        @include background_img("../withdraw/images/bank_03.png");
                    }
                }
                div{
                    display: inline-block;
                    margin-left: .2rem;
                    font-size: .24rem;
                    text-align: left;
                }
            }
            .right{
                font-size: .24rem;
                color: #999;
                margin-top: .3rem;
            }
        }
    }
}
</style>