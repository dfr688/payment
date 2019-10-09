<template>
  <div class="login register">
      <Com word="注册">
          <div class="context" slot="text">
              已有账号？立即<span @click="goLogin">登录</span>
          </div>
          <div class="detail" slot="content">
             <ul>
                 <li>
                     <div class="phone_icon"></div>
                     <input type="tel" placeholder="请输入手机号" v-model="phone"/>
                 </li>
                 <li>
                     <div class="psw_icon"></div>
                     <input class="psw" type="tel" placeholder="请输入密码" v-model="psw"/>
                 </li>
                 <li class="code_input">
                     <div class="code_icon"></div>
                     <div class="cover">
                         <input type="tel" placeholder="请输入验证码" v-model="code"/>
                         <div>
                             <Vcode :phone="phone"/>
                         </div>
                     </div>
                 </li>
             </ul>
             <div class="btn" @click="goRegister">
                 注册
             </div>
          </div>
      </Com>  
  </div>
</template>

<script>
import Com from '../../components/common/Com'
import Vcode from '../../components/common/Vcode'
export default {
 name: "",
  data () {
    return {
        phone: "",
        psw: "",
        code: ""
    }
  },
  components: {
      Com,
      Vcode
  },
  computed: {},
  watch: {},
  methods: {
      goLogin() {
          this.$router.push("/login");
      },
    //注册按钮
      goRegister() {
        if(this.phone == ""){
            this.$toast({
              message: "手机号不能为空",
              duration: 1000
            });
        }else if(this.psw == ""){
             this.$toast({
              message: "密码不能为空",
              duration: 1000
            });
        }else if(!/^[0-9]{6,18}$/.test(this.psw)){
            this.$toast({
              message: "请输入6到18位数字！",
              duration: 1000
            });
        }else if(this.code == ""){
             this.$toast({
              message: "验证码不能为空",
              duration: 1000
            });
        }else{
            this.baseJs.ajaxReq("/payment/user/signUp",{phone:this.phone,password:this.psw,smsCode:this.code},'post',"")
            .then(res => {
                // console.log(res);
                if(res.code != 20000){
                    this.$toast({
                      message: res.msg,
                      duration: 1000
                    });
                }else{
                    this.$toast({
                      message: res.msg,
                      duration: 1000
                    });
                    this.$router.push("/login");
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
.register{
    width: 100%;
    height: 100%;
    .detail{
        ul{
            li{
                .psw{
                    -webkit-text-security:disc;
                }
                &.code_input{
                    .code_icon{
                        width: .34rem;
                        height: .4rem;
                        @include background_img("../..//components/common/images/code_icon.png");
                    }
                    .cover{
                        display: flex;
                        input{
                            width: 60%!important;
                        }
                    }
                }
            }
        }
        .btn{
            margin-top: .7rem!important;
        }
    }
}
</style>