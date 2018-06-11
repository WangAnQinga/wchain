<template>
  <div class="home">
    <swiper></swiper>
    <p class="notice"><img src="../../assets/voice.png"><span>公告：5月18日 上线WICC充值提现及夺宝奖品</span></p>
    <div class="items">
      <p class="itemTitle">
       <span class="title">最新开奖</span>
        <span class="more">更多··· </span>
      </p>
      <div class="itemList">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>

    <div class="items">
      <p class="itemTitle">
       <span class="title">最新开奖</span>
        <span class="more">更多··· </span>
      </p>
      <div class="itemList">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>


    <div class="items">
      <p class="itemTitle">
       <span class="title">最新开奖</span>
        <span class="more">更多··· </span>
      </p>
      <div class="itemList">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
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
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      
    }
  },
  components:{
    swiper
  },
  computed:{
    ...mapGetters(['userLoginToken']),
  },
  methods:{
    getList(){
      API.get(API.goodsList.url,{},{}).then(res => {
        console.log(res)
      })
    }
  },
  created(){

  },
  mounted(){
    this.getList();
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
  .items .itemTitle {
    height: 30px;
    line-height: 30px;
    text-align: center;
    background:#666666;
    padding:0 10px;
    color: #fff;
  }
  .itemTitle span.more{
    float: right;
  }
  .itemList{
    width:100%;
    display: flex;
    flex-flow: row nowrap;
    height: 100px;
    width: 100%;
  }
  .itemList .item{
    flex:1
  }
  .itemList .item{
    border-right: 2px solid #333
  }
  .itemList .item:nth-child(3){
    border:none
  }
</style>
