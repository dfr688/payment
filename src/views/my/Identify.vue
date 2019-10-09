<template>
  <div class="identify">
      <Swiper>
          <HeaderTop title="实名认证"/>
          <div class="notice">
              <i></i>为有效保障您的资金安全，请填写与您身份证一致的信息，认证后不可更改。
          </div>
          <ul>
              <li>
                  <p>姓名</p>
                  <input type="text" placeholder="请填写您本人的真实姓名" v-model="personName"/>
              </li>
              <li>
                  <p>身份证号</p>
                  <input type="tel" placeholder="请填写您本人的身份证号" v-model="idCard"/>
              </li>
          </ul>
          <Btn text="提交认证" @submitIdentify="submitIdentify"/>
      </Swiper>    
  </div>
</template>

<script>
import Swiper from '../../components/common/Swiper'
import HeaderTop from '../../components/common/HeaderTop'
import Btn from '../../components/common/Btn'
import { Dialog } from 'vant';
export default {
 name: "",
  data () {
    return {
        personName: "",
        idCard: ""
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
    //提交认证按钮
    submitIdentify() {
        if(this.personName === ""){
            this.$toast({
                message: "请输入您本人的真实姓名！",
                duration: 1000
            });
        }else if(this.idCard === ""){
            this.$toast({
                message: "请输入您本人的身份证号！",
                duration: 1000
            });
        }else{
            let token = localStorage.getItem("token");
            this.baseJs.ajaxReq("/payment/user/info",{name:this.personName,idCardNo:this.idCard},"post",token)
            .then(res => {
                // console.log(res);
                if(res.code === 20000){
                    Dialog.alert({
                    message: '认证成功'
                    }).then(() => {
                        this.$router.push("/my");
                    });
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
.identify{
    height: 100%;
    .notice{
        color: #ff0202;
        font-size: .32rem;
        margin: 0 .4rem;
        margin-top: .7rem;
        line-height: .5rem;
        i{
            display: inline-block;
            width: .37rem;
            height: .37rem;
            @include background_img("./images/notice.png");
            margin-right: .1rem;
            margin-bottom: -.05rem;
        }
    }
    ul{
        margin-top: .88rem;
        margin-bottom: 1rem;
        li{
            margin: 0 .4rem;
            font-size: .32rem;
            padding-bottom: .2rem;
            margin-bottom: .4rem;
            border-bottom: 1px solid #f1f1f1;
            p{
                margin-bottom: .4rem;
            }
            input{
                font-size: .32rem;
                width: 100%;
            }
        }
    }
}
</style>