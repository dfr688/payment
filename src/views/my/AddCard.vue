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
                  <input type="text" placeholder="请填写您的姓名"/>
              </li>
              <li>
                  <p>开户银行</p>
                  <input type="text" placeholder="请填写您银行卡的开户行"/>
              </li>
              <li>
                  <p>银行卡号</p>
                  <input type="text" placeholder="请填写银行卡卡号"/>
              </li>
              <li>
                  <p>手机号</p>
                  <input type="text" placeholder="请填写银行预留手机号"/>
              </li>
              <li class="code_input">
                  <p>验证码</p>
                  <div class="wrap">
                      <input type="text" placeholder="请填写手机验证码"/>
                      <div>
                          <Vcode/>
                      </div>
                  </div>
              </li>
          </ul>
          <Btn text="提交"/>
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
  methods: {},
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
        }
    }
}
</style>