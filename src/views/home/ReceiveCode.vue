<template>
  <div class="receiveCode">
      <Swiper>
          <div class="top">
              <i @click="goBack"></i>收款码
          </div>
          <div class="contain">
            <p>扫一扫向我付款</p>
            <div class="write_money" v-if="isShow">
                <span>¥</span><input type="tel" placeholder="金额" v-model="money" readonly onfocus="this.blur()" @click="showPop"/>
            </div>
            <img :class="{pic:isShow}" src="./images/qrcode.png" alt="" v-if="!see"/>
            <div id="qrCode" ref="qrCodeDiv" v-show="see"></div>
            <div class="prompt">
                <i></i>每分钟自动更新，仅限当前使用
            </div>
            <div class="set" @click="setMoney">
                设置收款金额
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
      <van-popup v-model="show">
          <input type="tel" placeholder="输入收款金额" v-model="cost"/>
          <button @click="goSure">确定</button>
      </van-popup>    
  </div>
</template>

<script>
import Swiper from '../../components/common/Swiper'
import QRCode from 'qrcodejs2';
export default {
 name: "",
  data () {
    return {
        isShow: false,
        money: "",
        cost: "",
        show: false,
        see: false,
        bank: "",
        index: 0
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
    //设置金额
    setMoney() {
        this.isShow = true;
    },
    bindQRCode() {
      new QRCode(this.$refs.qrCodeDiv, {
          text: this.cost,
        //   width: 200,
        //   height: 200,
          colorDark: "#333", //二维码颜色
          colorLight: "#fff", //二维码背景色
          correctLevel: QRCode.CorrectLevel.L//容错率，L/M/H
      })
    },
    goSure() {
        this.money = this.cost;
        this.show = false;
        this.see = true;
        this.bindQRCode();
    },
    showPop() {
        this.show = true;
        this.cost = "";
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
.receiveCode{
    width: 100%;
    height: 100%;
    background: #343fcb;
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
            &.pic{
                margin: .2rem 0;
            }
        }
        #qrCode{
            width: 3.46rem;
            height: 3.46rem;
            margin: .2rem auto;
            overflow: hidden;
        }
        .write_money{
            width: 30%;
            margin: 0 auto;
            font-size: .46rem;
            text-align: center;
            span{
                margin-right: .2rem;
                margin-left: .2rem;
            }
            input{
                width: 40%;
                font-size: .32rem;
                text-align: left;
            }
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
        .set{
            width: 3.82rem;
            height: .6rem;
            border-radius: .3rem;
            border: solid 1px #475efe;
            font-size: .3rem;
            color: #495aff;
            text-align: center;
            line-height: .6rem;
            margin: 0 auto;
            margin-top: .2rem;
        }
        .bank{
            margin: .8rem 1rem 0 .6rem;
            @include flex;
            .left{
                span{
                    display: inline-block;
                    width: .64rem;
                    height: .64rem;
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
    .van-popup{
        width: 60%;
        border-radius: .2rem;
        font-size: .3rem;
        text-align: center;
        padding: .4rem 0;
        input{
            width: 100%;
            text-align: center;
            margin-bottom: .2rem;
        }
        button{
            width: 100%;
        }
    }
}
</style>