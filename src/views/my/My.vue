<template>
  <div class="my">
      <Swiper>
          <div class="my_account">
            <i class="back" @click="goBack"></i><p>账户</p>
            <div class="info">
              <i></i><span v-if="isLogin">用户名<span class="user">{{ phone }}</span></span><span v-if="!isLogin" @click="goLogin">登录/注册</span>
            </div>
          </div>
          <div class="total">
            <p>累计收款<i :class="{noSee:isSee}" @click="isSee =!isSee"></i></p>
            <div>
              <div class="left" v-if="!isSee">
                ¥ {{ amount }}
              </div>
              <div class="left" v-if="isSee">
                * * * *
              </div>
              <div class="right" @click="goWithdraw">
                提现
              </div>
            </div>
            <ul>
              <li class="confirm" @click="goIdentify"></li>
              <li class="bank" @click="goCard"></li>
              <li class="record" @click="goDealRecord"></li>
            </ul>
          </div>
          <ul class="types">
            <li @click="goModify">
              <div class="left">
                <i class="type_one"></i><span>登录密码</span>
              </div>
              <div class="right">
                <span></span>
              </div>
            </li>
            <li @click="goDealPsw">
              <div class="left">
                <i class="type_two"></i><span>交易密码</span>
              </div>
              <div class="right">
                <span></span>
              </div>
            </li>
            <li @click="goPrivacy">
              <div class="left">
                <i class="type_three"></i><span>隐私政策</span>
              </div>
              <div class="right">
                <span></span>
              </div>
            </li>
            <li>
              <div class="left">
                <i class="type_four"></i><span>版本信息</span>
              </div>
              <div class="right">
                v2.1
              </div>
            </li>
          </ul>
          <Btn text="退出登录" @signOut="signOut"/>
      </Swiper>    
  </div>
</template>

<script>
import Swiper from '../../components/common/Swiper'
import Btn from '../../components/common/Btn'
import {mapState} from 'vuex'
export default {
 name: "",
  data () {
    return {
      isLogin: false,
      isSee: false,
      phone: ""
    }
  },
  components: {
      Swiper,
      Btn
  },
  computed: {
    ...mapState(["amount"])
  },
  watch: {},
  methods: {
    goBack() {
      this.$router.push("/home");
    },
    // 提现
    goWithdraw() {
      this.$router.push("/withdraw");
    },
    // 登录/注册
    goLogin() {
      this.$router.push("/login");
    },
    // 实名认证
    goIdentify() {
      this.$router.push("/identify");
    },
    // 银行卡
    goCard() {
      this.$router.push("/card");
    },
    // 交易记录
    goDealRecord() {
      this.$router.push("/dealrecord");
    },
    // 修改密码
    goModify() {
      this.$router.push("/modify");
    },
    // 交易密码
    goDealPsw() {
      this.$router.push("/dealpsw");
    },
    // 隐私政策
    goPrivacy() {
      this.$router.push("/privacy");
    },
    //隐藏手机中间四位
		geTel(tel) {
			return tel.substring(0, 3)+"****"+tel.substr(tel.length-4);
    },
    //退出登录
    signOut() {
      localStorage.removeItem("phone");
      localStorage.removeItem("token");
      this.isLogin = false;
      this.$router.push("/login");
    }
  },
  created () {
    this.phone = localStorage.getItem("phone");
		if(this.phone != null){
		  this.phone = this.geTel(this.phone);
		  this.isLogin = true;
    }
  },
  mounted () {},
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_mixins.scss';
.my{
    height: 100%;
    .my_account{
      width: 100%;
      height: 4.86rem;
      @include bg_image;
      color: #fff;
      font-size: .42rem;
      padding-top: .66rem;
      position: relative;
      i{
        width: .48rem;
        height: .48rem;
        &.back{
          position: absolute;
          top: .74rem;
          left: .4rem;
          @include background_img("./images/back.png");
        }
      }
      p{
        text-align: center;
      }
      .info{
        margin-left: .4rem;
        margin-top: .8rem;
        i{
          display: inline-block;
          @include background_img("../home/images/person.png");
          margin-bottom: -.08rem;
          margin-right: .2rem;
        }
        span{
          .user{
            font-size: .32rem;
            margin-left: .3rem;
          }
        }
      }
    }
    .total{
      font-size: .32rem;
      width: 6.7rem;
      margin: 0 auto;
      margin-top: -1.8rem;
      border-radius: .1rem .1rem 0 0;
      position: relative;
      background: #fff;
      padding: .3rem;
      p{
        color: #666;
        i{
          display: inline-block;
          width: .38rem;
          height: .24rem;
          @include background_img("./images/eye.png");
          margin-left: .1rem;
          &.noSee{
            @include background_img("./images/eye_01.png");
          }
        }
      }
      >div{
        @include flex;
        margin-top: .2rem;
        .left{
          font-size: .6rem;
        }
        .right{
          width: 1.4rem;
          height: .6rem;
          line-height: .6rem;
          background: #495aff;
          border-radius: .3rem;
          text-align: center;
          color: #fff;
          margin-left: 1rem;
        }
      }
      ul{
        display: flex;
        margin-top: .7rem;
        li{
          width: 2rem;
          height: 2rem;
          margin: 0 .15rem;
          &.confirm{
            @include background_img("./images/confirm.png");
          }
          &.bank{
            @include background_img("./images/bank.png");
          }
          &.record{
            @include background_img("./images/record.png");
          }
        }
      }
    }
    .types{
      font-size: .32rem;
      margin: 0 .4rem;
      li{
        @include flex;
        padding-bottom: .3rem;
        margin-bottom: .3rem;
        border-bottom: 1px solid #f1f1f1;
        &:last-child{
          border-bottom: none;
        }
        .left{
          i{
            display: inline-block;
            width: .33rem;
            height: .46rem;
            margin-bottom: -.16rem;
            margin-right: .26rem;
            &.type_one{
              @include background_img("./images/type_01.png");
            }
            &.type_two{
              @include background_img("./images/type_02.png");
            }
            &.type_three{
              @include background_img("./images/type_03.png");
            }
            &.type_four{
              @include background_img("./images/type_04.png");
            }
          }
        }
        .right{
          color: #999;
          span{
            display: inline-block;
            width: .48rem;
            height: .48rem;
            @include background_img("./images/rocket.png");
            margin-bottom: -.08rem;
          }
        }
      }
    }
}
</style>