<template>
  <div class="dealPsw">
      <Swiper>
          <HeaderTop title="修改密码"/>
          <ul>
              <li>
                  <input class="psw" type="tel" placeholder="请输入新的支付密码" v-model="dealPsw"/>
              </li>
              <li>
                  <input type="tel" placeholder="请输入手机号" v-model="phone"/>
              </li>
              <li>
                  <div>
                      <input type="tel" placeholder="请输入验证码" v-model="code"/>
                      <Vcode :phone="phone"/>
                  </div>
              </li>
          </ul>
          <Btn text="确定" @goConfirm="goConfirm"/>
      </Swiper>    
  </div>
</template>

<script>
import Swiper from '../../components/common/Swiper'
import HeaderTop from '../../components/common/HeaderTop'
import Btn from '../../components/common/Btn'
import Vcode from '../../components/common/Vcode'
export default {
 name: "",
  data () {
    return {
        dealPsw: "",
        phone: "",
        code: ""
    }
  },
  components: {
      Swiper,
      HeaderTop,
      Btn,
      Vcode
  },
  computed: {},
  watch: {},
  methods: {
      goConfirm() {
         if(this.dealPsw === ""){
             this.$toast({
                 message: "请输入新的支付密码！",
                 duration: 1000
             });
         }else if(this.phone === ""){
             this.$toast({
                 message: "请输入手机号!",
                 duration: 1000
             });
         }else if(this.code === ""){
             this.$toast({
                 message: "请输入验证码！",
                 duration: 1000
             });
         }else{
             this.baseJs.ajaxReq("/payment/user/resetPayPassword",{payPassword:this.dealPsw,phone:this.phone,smsCode:this.code},"post","")
             .then(res => {
                // console.log(res);
                 if(res.code !== 20000){
                     this.$toast({
                        message: res.msg,
                        duration: 1000
                    });
                 }else{
                     this.$toast({
                        message: res.msg,
                        duration: 1000
                    });
                     this.$router.push("/my");
                 }
             })
             .catch(err => {
                 console.log(err);
             })
         }
      }
  },
  created () {},
  mounted () {},
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_mixins.scss';
.dealPsw{
    height: 100%;
    ul{
        margin: 1rem .4rem;
        li{
            margin-bottom: .3rem;
            padding-bottom: .3rem;
            border-bottom: 1px solid #f1f1f1;
            font-size: .32rem;
            input{
                font-size: .32rem;
                &.psw{
                    -webkit-text-security:disc;
                }
            }
            div{
                @include flex;
            }
        }
    }
}
</style>