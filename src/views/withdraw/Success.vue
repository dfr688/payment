<template>
  <div class="success">
      <Swiper>
          <HeaderTop title="提现详情"/>
          <div class="sign">
              <div></div>
              提现成功
          </div>
          <ul>
              <li>
                  <div>收款银行：</div>
                  <div>中国银行</div>
              </li>
              <li>
                  <div>收款银行账号：</div>
                  <div>60072*********38267</div>
              </li>
              <li>
                  <div>姓名：</div>
                  <div>张三</div>
              </li>
              <li>
                  <div>提现金额：</div>
                  <div>¥ 5600.00</div>
              </li>
              <li>
                  <div>申请日期：</div>
                  <div>2019-06-18</div>
              </li>
          </ul>
      </Swiper>    
  </div>
</template>

<script>
import Swiper from '../../components/common/Swiper'
import HeaderTop from '../../components/common/HeaderTop'
export default {
 name: "",
  data () {
    return {
    }
  },
  components: {
      Swiper,
      HeaderTop
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
.success{
    height: 100%;
    .sign{
        text-align: center;
        font-size: .36rem;
        margin-top: .9rem;
        div{
            width: 1.28rem;
            height: 1.28rem;
            @include background_img("./images/success.png");
            margin: 0 auto;
            margin-bottom: .3rem;
        }
    }
    ul{
        font-size: .32rem;
        margin: 0 .4rem;
        margin-top: 1.2rem;
        li{
            display: flex;
            margin-bottom: .3rem;
        }
    }
}
</style>