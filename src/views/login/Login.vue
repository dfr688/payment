<template>
  <div class="login">
      <Com word="登录">
          <div class="context" slot="text">
              没有账号？立即<span @click="goRegister">注册</span>
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
             </ul>
             <div class="btn" @click="goLogin">
                 登录
             </div>
          </div>
      </Com>    
  </div>
</template>

<script>
import Com from '../../components/common/Com'
export default {
 name: "",
  data () {
    return {
        phone: "",
        psw: ""
    }
  },
  components: {
      Com
  },
  computed: {},
  watch: {},
  methods: {
      goRegister() {
          this.$router.push("/register");
      },
    //登录按钮
    goLogin() {
      if(this.phone == ""){
        this.$toast({
            message: '手机号不能为空',
            duration: 1000
        });
      }else if(this.psw == ""){
        this.$toast({
            message: '密码不能为空',
            duration: 1000
        });
      }else{
        this.baseJs.ajaxReq("/payment/user/signIn",{phone:this.phone,password:this.psw},'post',"")
        .then(res => {
        // console.log(res);
          if(res.code != 20000){
            this.$toast({
                message: res.msg,
                duration: 1000
            });
          }else{
          // 缓存token
          localStorage.setItem("token",res.data);
          // 缓存手机号
          localStorage.setItem("phone",this.phone);
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
.login{
    width: 100%;
    height: 100%;
    .detail{
        ul{
            li{
                .psw{
                    -webkit-text-security:disc;
                }
            }
        }
    }
}
</style>