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
                     <input type="text" placeholder="请输入手机号"/>
                 </li>
                 <li>
                     <div class="psw_icon"></div>
                     <input type="password" placeholder="请输入密码"/>
                 </li>
                 <li class="code_input">
                     <div class="code_icon"></div>
                     <div class="cover">
                         <input type="text" placeholder="请输入验证码"/>
                         <div>
                             <Vcode/>
                         </div>
                     </div>
                 </li>
             </ul>
             <div class="btn">
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
            .code_input{
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
        .btn{
            margin-top: .7rem!important;
        }
    }
}
</style>