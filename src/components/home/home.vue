<template>
  <div class="home">
    <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore" use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh" lock-x ref="scrollerBottom" height="-48">
    <swiper></swiper>
    <p class="notice"><img src="../../assets/voice.png"><span>公告：5月18日 上线WICC充值提现及夺宝奖品</span></p>
    <winner></winner>
    <near-close></near-close>
    <newgoods></newgoods>
    </scroller>
  </div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'
import swiper from './swiper'
import winner from './winner'
import nearClose from './nearclose'
import newgoods from './newgoods'
import {Scroller} from 'vux'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pulldownDefaultConfig:{
        content: '下拉刷新',
        height: 40,
        autoRefresh: false,
        downContent: '下拉刷新',
        upContent: '释放后刷新',
        loadingContent: '正在刷新...',
        clsPrefix: 'xs-plugin-pulldown-'
      },
      pullupDefaultConfig:{
        content: '上拉加载更多',
        pullUpHeight: 60,
        height: 40,
        autoRefresh: false,
        downContent: '释放后加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...',
        clsPrefix: 'xs-plugin-pullup-'
      }
      
    }
  },
  components:{
    swiper,
    newgoods,
    nearClose,
    winner,
    Scroller
  },
  computed:{
    ...mapGetters(['userLoginToken']),
  },
  methods:{
    refresh() {
      
        this.$refs.scrollerBottom.enablePullup()
        this.$refs.scrollerBottom.donePulldown()
    
    },
    loadMore() {
      // this.$refs.scrollerBottom.disablePullup()
      this.$refs.scrollerBottom.donePullup()
      
    }
  },
  created(){

  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .notice{
    width:100%;
    height: 25px;
    display: flex;
    padding-left: 8px;
    flex-flow: row nowrap;
    align-items: center;
  }
  .notice img{
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }

</style>
