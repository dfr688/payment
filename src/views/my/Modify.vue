<template>
  <div class="modify">
      <Swiper>
          <HeaderTop title="修改密码"/>
          <ul>
              <li>
                  <input class="psw" type="tel" placeholder="请输入原密码" v-model="oldPsw"/>
              </li>
              <li>
                  <input class="psw" type="tel" placeholder="请输入新密码" v-model="newPsw"/>
              </li>
          </ul>
          <Btn text="确定" @goSure="goSure"/>
      </Swiper>    
  </div>
</template>

<script>
import Swiper from '../../components/common/Swiper'
import HeaderTop from '../../components/common/HeaderTop'
import Btn from '../../components/common/Btn'
export default {
 name: "",
  data () {
    return {
        oldPsw: "",
        newPsw: ""
    }
  },
  components: {
      Swiper,
      HeaderTop,
      Btn
  },
  computed: {},
  watch: {},
  methods: {
      goSure() {
         if(this.oldPsw === ""){
             this.$toast({
                 message: "请输入原密码",
                 duration: 1000
             });
         }else if(this.newPsw === ""){
             this.$toast({
                 message: "请输入新密码",
                 duration: 1000
             });
         }else if(!/^[0-9]{6,18}$/.test(this.newPsw)){
             this.$toast({
                 message: "请输入6到18位数字！",
                 duration: 1000
             });
         }else{
             let token = localStorage.getItem("token");
             this.baseJs.ajaxReq("/payment/user/resetPassword",{password:this.oldPsw,newPassword:this.newPsw},"post",token)
             .then(res => {
                //  console.log(res);
                 if(res.code === 20000){
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
.modify{
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
        }
    }
}
</style>