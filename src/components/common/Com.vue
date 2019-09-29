<template>
  <div class="com">
      <i class="back"></i>
      <div class="wrap">
          <div class="title">
              <p>{{ word }}</p>
              <slot name="text"></slot>
          </div>
          <slot name="content"></slot>
      </div>
  </div>
</template>

<script>
export default {
 name: "",
  data () {
    return {
    }
  },
  props: [
      "word"
  ],
  components: {},
  computed: {},
  watch: {},
  methods: {},
  created () {},
  mounted () {},
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_mixins.scss';
.com{
    width: 100%;
    height: 100%;
    padding-top: 2rem;
    @include background_img("./images/bground.png");
    position: relative;
    overflow: hidden;
    .back{
        position: absolute;
        top: .74rem;
        left: .4rem;
        width: .48rem;
        height: .48rem;
        @include background_img("../../views/my/images/back.png");
    }
    .wrap{
        width: 6.7rem;
        margin: 0 auto;
        background-image: linear-gradient(#fff, #fff), linear-gradient(0deg, #0ab6fe 0%, #495aff 100%);
	    box-shadow: 0px 16px 18px 3px rgba(63, 63, 63, 0.14);
        border-radius: .2rem;
        padding: 1rem .3rem;
        .title{
            font-size: .28rem;
            margin-bottom: .9rem;
            p{
                font-size: .54rem;
                margin-bottom: .05rem;
            }
            .context{
                color: #999;
                span{
                    color: #ff0000;
                }
            }
        }
        .detail{
            ul{
                li{
                    font-size: .32rem;
                    padding-bottom: .2rem;
                    margin-bottom: .3rem;
                    border-bottom: 1px solid #f1f1f1;
                    div{
                        height: .44rem;
                        margin-bottom: .24rem;
                        &.phone_icon{
                            width: .3rem;
                            @include background_img("./images/phone_icon.png");
                        }
                        &.psw_icon{
                            width: .36rem;
                            @include background_img("./images/psw_icon.png");
                        }
                    }
                    input{
                        font-size: .32rem;
                        width: 100%;
                    }
                }
            }
            .btn{
                width: 5.2rem;
                height: .8rem;
                background: #495aff;
                border-radius: .4rem;
                font-size: .36rem;
                color: #fff;
                text-align: center;
                line-height: .8rem;
                margin: 0 .4rem;
                margin-top: 1.4rem;
            }
        }
    }
}
</style>