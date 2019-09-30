<template>
  <div class="modify">
      <Swiper>
          <HeaderTop title="修改密码"/>
          <ul>
              <li>
                  <input type="text" placeholder="请输入原密码"/>
              </li>
              <li>
                  <input type="text" placeholder="请输入新密码"/>
              </li>
          </ul>
          <Btn text="确定"/>
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
    }
  },
  components: {
      Swiper,
      HeaderTop,
      Btn
  },
  computed: {},
  watch: {},
  methods: {},
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
            }
        }
    }
}
</style>