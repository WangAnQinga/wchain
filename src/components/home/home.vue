<template>
  <div class="home">
    <div id="minirefresh" class="minirefresh-wrap">     
      <div class="minirefresh-scroll">
        <swiper></swiper>
        <p class="notice"><img src="../../assets/voice.png"><span>公告：5月18日 上线WICC充值提现及夺宝奖品</span></p>
        <winner></winner>
        <near-close></near-close>
        <newgoods></newgoods>
      </div>
    </div>
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
import MiniRefreshTools from 'minirefresh';
import 'minirefresh/dist/debug/minirefresh.css'
export default {
  name: 'home',
  data () {
    return {
      minirefresh: null,
      maxDataSize: 30,
      requestDelayTime: 600,
      
    }
  },
  components:{
    swiper,
    newgoods,
    nearClose,
    winner,
  },
  computed:{
    ...mapGetters(['userLoginToken']),
  },
  methods:{
    downCallback() {
        var self = this;
        setTimeout(() =>{
            self.miniRefresh.endDownLoading(true);
        }, self.requestDelayTime);
    },
    upCallback() {
        var self = this;
        setTimeout(function() {
            self.miniRefresh.endUpLoading(true);
        }, self.requestDelayTime);
    },
  },
  created(){

  },
  mounted(){
    var self = this;
    self.miniRefresh = new MiniRefresh({
      container: '#minirefresh',
      down: {
          callback: self.downCallback
      },
      isScrollBar:false,
      up: {
          isLock:true,
          isAuto: true,
          callback: self.upCallback
      }
  })
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .home .notice{
    width:100%;
    height: 25px;
    display: flex;
    padding-left: 8px;
    flex-flow: row nowrap;
    align-items: center;
  }
  .home .notice img{
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }

  .home .minirefresh-wrap{
    top:75px
  }
  .home .minirefresh-theme-default .minirefresh-upwrap {
    display: none !important;
  }

</style>
