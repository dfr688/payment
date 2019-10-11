<template>
  <div class="dealRecord">
      <Swiper>
        <HeaderTop title="交易记录"/>
        <div class="lately_deal" v-if="show">
            <ul>
                <li>
                    <div class="left">
                        <img src="../home/images/type_01.png" alt=""/>
                        <div>
                            <p>扫一扫</p>
                            <span>2019-06-13</span>
                        </div>
                    </div>
                    <div class="right">
                        -200.50
                    </div>
                </li>
                <li>
                    <div class="left">
                        <img src="../home/images/type_02.png" alt=""/>
                        <div>
                            <p>付款码付款</p>
                            <span>2019-06-13</span>
                        </div>
                    </div>
                    <div class="right">
                        -200.50
                    </div>
                </li>
                <li>
                    <div class="left">
                        <img src="../home/images/type_03.png" alt=""/>
                        <div>
                            <p>收款码收款</p>
                            <span>2019-06-13</span>
                        </div>
                    </div>
                    <div class="right">
                        -200.50
                    </div>
                </li>
            </ul>
        </div>
        <div class="nothing" v-if="!show">
            <div></div>
            暂无交易记录
        </div>
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
        list: [],
        show: false
    }
  },
  components: {
      Swiper,
      HeaderTop
  },
  computed: {},
  watch: {},
  methods: {

  },
  created () {
      let token = localStorage.getItem("token");
      this.baseJs.ajaxReq("/payment/user/transaction/record",{},"get",token)
      .then(res => {
        //   console.log(res);
          if(res.code === 20000){
              this.list = res.data;
              if(this.list.length === 0){
                  this.show = false;
              }
          }
      })
      .catch(err => {
          console.log(err);
      })
  },
  mounted () {},
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_mixins.scss';
.dealRecord{
    height: 100%;
    .lately_deal{
        margin: 0 .4rem;
        margin-top: .7rem;
        ul{
            li{
                @include flex;
                font-size: .32rem;
                padding-bottom: .3rem;
                margin-bottom: .3rem;
                border-bottom: 1px solid #f1f1f1;
                .left{
                    img{
                        width: .6rem;
                        height: .6rem;
                        margin-right: .2rem;
                        margin-bottom: .06rem;
                    }
                    div{
                        display: inline-block;
                        span{
                            font-size: .2rem;
                            color: #999;
                        }
                    }
                }
                .right{
                    color: #ff0000;
                    font-size: .38rem;
                }
            }
        }
    }
    .nothing{
        text-align: center;
        font-size: .32rem;
        color: #999;
        margin-top: 3rem;
        div{
            width: 1.28rem;
            height: 1.28rem;
            @include background_img("./images/nothing.png");
            margin: 0 auto;
            margin-bottom: .2rem;
        }
    }
}
</style>