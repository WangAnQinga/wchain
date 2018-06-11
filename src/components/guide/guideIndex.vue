<template>
  <div class="guide">
    <h3>常见问题解答：</h3>
    <p>一、怎么人民币充值夺宝？</p>
    <p>二、如何夺宝？</p>
    <p>三、如何场外充值？</p>
    <p>四、中奖规则？</p>
    <p>五、问题反馈</p>
  </div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'

export default {
  name: 'temp',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{

  },
  computed:{
    ...mapGetters(['userLoginToken']),
  },
  methods:{
    ...mapMutations(['USER_SIGNIN']),
    ...mapActions(['userLogout', 'userLogin']),
  },
  created(){

  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .guide {
    width: 100%;
    padding:30px 15px 0;
    font-size: 14px;
  }
  .guide h3 {
    height: 40px;
    line-height: 40px;
    color: #000
  }
  .guide p{
    margin:10px 0;
    font-size: 14px;
  }
</style>
