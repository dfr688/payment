<template>
  <div class="card">
      <Swiper>
            <HeaderTop title="银行卡">
              <div @click="goAddCard">添加</div>
            </HeaderTop>
            <div class="bank" :class="{one:0 ===item.num,two:1===item.num,three:2===item.num}" v-for="(item,index) in list" :key="index">
                <div class="detail">
                    <div class="left">
                        <i :class="{first: 0===item.num,second: 1===item.num,third: 2===item.num}"></i><span>{{ item.bankType }}</span>
                    </div>
                    <div class="right">
                        储蓄卡
                    </div>
                </div>
                <p>{{ getNum(item.cardNo) }}</p>
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
        list: []
    }
  },
  components: {
      Swiper,
      HeaderTop
  },
  computed: {},
  watch: {},
  methods: {
    //添加
    goAddCard() {
        this.$router.push("/addcard");
    },
    // 隐藏银行卡号 四位
      getNum(num) {
        return "****"+" "+"****"+" "+"****"+" "+num.substr(num.length-4);
      },   
  },
  created () {
      let token = localStorage.getItem("token");
      this.baseJs.ajaxReq("/payment/user/bank/card",{},"get",token)
      .then(res => {
        //   console.log(res);
          let bankList = res.data;
          for(let i=0;i<bankList.length;i++){
              if(bankList[i].bankType ==="中国银行"){
                  bankList[i].num = 0
              }else if(bankList[i].bankType ==="邮政储蓄银行"){
                  bankList[i].num = 1
              }else if(bankList[i].bankType ==="中国建设银行"){
                  bankList[i].num = 2
              }
          }
        this.list = bankList;
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
.card{
    height: 100%;
     .bank{
        width: 6.7rem;
        height: 3.2rem;
        padding: 0 .3rem;
        padding-top: .3rem;
        margin: 0 auto;
        color: #fff;
        font-size: .32rem;
        .detail{
            @include flex;
            .left{
                i{
                    display: inline-block;
                    width: .64rem;
                    height: .64rem;
                    margin-bottom: -.18rem;
                    margin-right: .2rem;
                    &.first{
                        @include background_img("../withdraw/images/bank_01.png");
                    }
                    &.second{
                        @include background_img("../withdraw/images/bank_02.png");
                    }
                    &.third{
                        @include background_img("../withdraw/images/bank_03.png");
                    }
                }
            }
            .right{
                font-size: .24rem;
                opacity: 0.5;
                margin-bottom: -.14rem;
            }
        }
        p{
            text-align: center;
            margin-top: .8rem;
            font-size: .4rem;
        }
    }
    .one{
        @include bg_one;
        margin-top: .8rem;
    }
    .two{
        @include bg_two;
        margin-top: -1.8rem;
        position: relative;
    }
    .three{
        @include bg_three;
        margin-top: -1.8rem;
        position: relative;
    }
}
</style>