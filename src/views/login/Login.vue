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
                     <input type="text" placeholder="请输入手机号"/>
                 </li>
                 <li>
                     <div class="psw_icon"></div>
                     <input type="password" placeholder="请输入密码"/>
                 </li>
             </ul>
             <div class="btn">
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
}
</style>