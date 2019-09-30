<template>
  <div class="home">
      <Swiper>
        <div class="home_bg">
            <ul class="top">
                <li>
                    首页
                </li>
                <li>
                    <span @click="goMy"></span>
                </li>
            </ul>
            <div class="today_receive">
                <p><i>¥</i> 1388.52</p>
                <span>今日收款</span>
            </div>
            <ul class="sort">
                <li>
                    <span class="scan"></span>
                    <p>扫一扫</p>
                </li>
                <li @click="goReceiveCode">
                    <span class="receive_code"></span>
                    <p>收款码</p>
                </li>
                <li>
                    <span class="payment_code"></span>
                    <p>付款码</p>
                </li>
            </ul>
        </div>
        <div class="lately_deal">
            <div class="title">
                <div class="left">
                    <i></i>最近交易
                </div>
                <div class="right" @click="goDealRecord">
                    更多
                </div>
            </div>
            <ul>
                <li>
                    <div class="left">
                        <img src="./images/type_01.png" alt=""/>
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
                        <img src="./images/type_02.png" alt=""/>
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
                        <img src="./images/type_03.png" alt=""/>
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
      </Swiper>    
  </div>
</template>

<script>
import Swiper from '../../components/common/Swiper'
export default {
 name: "",
  data () {
    return {
    }
  },
  components: {
      Swiper
  },
  computed: {},
  watch: {},
  methods: {
    //我的页面
    goMy() {
        this.$router.push("/my");
    },
    //更多
    goDealRecord() {
        this.$router.push("/dealrecord");
    },
    // 收款
    goReceiveCode() {
        this.$router.push("/receivecode");
    }
  },
  created () {},
  mounted () {},
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_mixins.scss';
.home{
    height: 100%;
    .home_bg{
        width: 100%;
        height: 8.47rem;
        @include background_img("./images/bg.png");
        color: #fff;
        font-size: .36rem;
        .top{
            margin: 0 .5rem;
            padding-top: 1.1rem;
            @include flex;
            li{
                font-size: .42rem;
                span{
                    display: inline-block;
                    width: .48rem;
                    height: .48rem;
                    @include background_img("./images/person.png");
                    margin-bottom: -.18rem;
                }
            }
        }
        .today_receive{
            width: 3.15rem;
            height: 3.15rem;
            margin: 0 auto;
            margin-top: .6rem;
            text-align: center;
            @include background_img("./images/receive.png");
            padding-top: .8rem;
            p{
                font-size: .44rem;
                color: #333;
                i{
                    font-size: .24rem;
                    font-style: normal;
                }
            }
            span{
                font-size: .28rem;
                color: #999;
            }
        }
        .sort{
            display: flex;
            margin: 0 .3rem;
            margin-top: 1.2rem;
            li{
                flex: 1;
                text-align: center;
                p{
                    margin-top: .1rem;
                }
                span{
                    display: inline-block;
                    width: .58rem;
                    height: .58rem;
                    &.scan{
                        @include background_img("./images/sort_01.png");
                    }
                    &.receive_code{
                        @include background_img("./images/sort_02.png");
                    }
                    &.payment_code{
                        @include background_img("./images/sort_03.png");
                    }
                }
            }
        }
    }
    .lately_deal{
        margin: 0 .4rem;
        margin-top: .4rem;
        .title{
            @include flex;
            font-size: .36rem;
            margin-bottom: .5rem;
            .left{
                i{
                    display: inline-block;
                    width: .09rem;
                    height: .32rem;
                    background: #2e42f7;
                    border-radius: .02rem;
                    margin-right: .2rem;
                    margin-bottom: -.04rem;
                }
            }
            .right{
                color: #3373f3;
                font-size: .32rem;
                margin-bottom: -.02rem;
            }
        }
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
}
</style>