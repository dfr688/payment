<template>
  <div class="addCard">
      <Swiper>
          <HeaderTop title="添加银行卡"/>
          <div class="notice">
              <i></i>请绑定持卡人本人的银行卡！
          </div>
          <ul>
              <li>
                  <p>姓名</p>
                  <input type="text" placeholder="请填写您的姓名" v-model="personName"/>
              </li>
              <li>
                  <p>开户银行</p>
                  <select v-model="selected">
                        <option disabled value="">请选择您银行卡的开户行</option>
                        <option>中国银行</option>
                        <option>邮政储蓄银行</option>
                        <option>中国建设银行</option>
                  </select>
              </li>
              <li>
                  <p>银行卡号</p>
                  <input type="tel" placeholder="请填写银行卡卡号" v-model="bankNum"/>
              </li>
              <li>
                  <p>手机号</p>
                  <input type="tel" placeholder="请填写银行预留手机号" v-model="phone"/>
              </li>
              <li class="code_input">
                  <p>验证码</p>
                  <div class="wrap">
                      <input type="tel" placeholder="请填写手机验证码" v-model="code"/>
                      <div>
                          <Vcode :phone="phone"/>
                      </div>
                  </div>
              </li>
          </ul>
          <Btn text="提交" @submitInfo="submitInfo"/>
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
        personName: "",
        selected: "",
        bankNum: "",
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
    //提交按钮
    submitInfo() {
        if(this.personName === ""){
            this.$toast({
                message: "请填写您的姓名！",
                duration: 1000
            });
        }else if(this.selected ===""){
            this.$toast({
                message: "请选择您银行卡的开户行！",
                duration: 1000
            });
        }else if(this.bankNum ===""){
            this.$toast({
                message: "请填写银行卡卡号！",
                duration: 1000
            });
        }else if(this.phone ===""){
            this.$toast({
                message: "请填写银行预留手机号！",
                duration: 1000
            });
        }else if(this.code ===""){
            this.$toast({
                message: "请填写手机验证码!",
                duration: 1000
            });
        }else{
            let token = localStorage.getItem("token");
            let data = {
                name: this.personName,
                bankType: this.selected,
                cardNo: this.bankNum,
                phone: this.phone,
                smsCode: this.code
            }
            this.baseJs.ajaxReq("/payment/user/bank/card",data,"post",token)
            .then(res => {
                // console.log(res);
                if(res.code === 20000){
                    this.$toast({
                        message: res.msg,
                        duration: 1000
                    });
                    this.$router.push("/card");
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
.addCard{
    height: 100%;
    .notice{
        color: #ff0101;
        font-size: .32rem;
        margin-left: .4rem;
        margin-top: .7rem;
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
        margin: 0 .4rem;
        margin-top: .8rem;
        margin-bottom: .6rem;
        li{
            font-size: .32rem;
            padding-bottom: .2rem;
            margin-bottom: .4rem;
            border-bottom: 1px solid #f1f1f1;
            p{
                margin-bottom: .3rem;
            }
            input{
                font-size: .32rem;
                width: 100%;
            }
            &.code_input{
                .wrap{
                    @include flex;
                }
            }
            select{
                font-size: .32rem;
                border: none;
                appearance:none; /*清除select默认样式 */
                -moz-appearance:none;
                -webkit-appearance:none;
                margin-left: -.1rem;
            }
        }
    }
}
</style>