<template>
  <div class="sellList">
    <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore" use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh" lock-x ref="scrollerBottom" height="-48">
      <div style="width:100%;height:200px;display:none"></div>
      <div class="item" v-for="(item,index) in items" :key="index">
        <img src="../../assets/bit.jpg" alt="">
        <div class="middle">
          <h4>标题：1BTC 一枚比特币夺宝</h4>
           <div class="progress">
              <span class="bar" id="bar" :style="'width:'+ (item.price - item.remaining)*100/(item.price) + '%'"></span>  
            </div>
            <div class="detail">
              <ul>
                <li>{{item.price - item.remaining}}</li>
                <li>{{item.price}}</li>
                <li>{{ item.remaining}}</li>
                <li>已参与</li>
                <li>总人数</li>
                <li>剩余</li>
              </ul>
            </div>
        </div>
        <button class="buy" :disabled="item.remaining == 0 ? true:false">我要购买</button>
      </div>
      </scroller>
  </div>
</template>

<script>
import {Scroller} from 'vux'
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
      items: null,
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
        pullUpHeight: 30,
        height: 150,
        autoRefresh: false,
        downContent: '释放后加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...',
        clsPrefix: 'xs-plugin-pullup-'
      }
    }
  },
  components:{
    Scroller
  },
  computed:{
    ...mapGetters(['userLoginToken']),
  },
  methods:{
    ...mapMutations(['USER_SIGNIN']),
    ...mapActions(['userLogout', 'userLogin']),
    get_list(){
      API.get(API.newsgoods.url,{},{}).then(res => {
        if(res.data.code ==200){
          this.items = res.data.data
        }
      })
    },
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
    this.get_list()
  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item{
  width: 100%;
  padding:10px 10px 20px 10px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 100px;
  border-bottom: 1px dotted #666
}
.item img{
  width: 70px;
  height: 70px;
 
  display: block
}
.item .middle{
  width: 210px;
  height:70px;
   margin: 0 5px;
}
.middle h4{
  height: 25px;
  line-height: 25px;
}

.item button{
  width:70px;
  height: 26px;
  border:1px solid #333;
  font-size:12px;
  border-radius:3px;
  color:#0e90d2;
  background:#fff;

}
.item button:disabled {
      color:graytext;
      background:#cfcfcf;
      border:1px solid #cfcfcf
    }
.detail ul{
  display: flex;
  height: 30px;
  margin-top:5px;
  flex-flow: row wrap;

}
.detail ul li{
  width: 33%;
  font-size:10px;
  line-height: 1;
  color:#666
}

.detail ul li:nth-child(1){
    color: #C7163D
  }
.detail ul li:nth-child(3){
  color:#4FC8DA
} 
.detail ul li:nth-child(2),.detail ul li:nth-child(5){
  text-align: center;
}
.detail ul li:nth-child(3),.detail ul li:nth-child(6){
  text-align: right;
}
.middle .progress {  
      height: 15px;
      width:100%;
      margin:2px 0;
      overflow: hidden;  
      background-color: #f7f7f7;  
      background-image: -moz-linear-gradient(top, #999999, #999999);  
      background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#999999), to(#999999));  
      background-image: -webkit-linear-gradient(top, #999999, #999999);  
      background-image: -o-linear-gradient(top, #999999, #999999);  
      background-image: linear-gradient(to bottom, #999999, #999999);  
      background-repeat: repeat-x;  
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5', endColorstr='#fff9f9f9', GradientType=0);  
      -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);  
      -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);  
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);  
      -webkit-border-radius: 4px;  
      -moz-border-radius: 4px;  
      border-radius: 4px;  
  }
  .progress .bar {  
      width: 0%;  
      height: 100%;  
      color: #ffffff;  
      float: left;  
      font-size: 12px;  
      text-align: center;  
      align-items: center;  
      display: flex;  
      justify-content: center;  
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);  
      background-color: #0e90d2;  
      background-image: -moz-linear-gradient(top, #FA0019, #FA0019);  
      background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#FA0019), to(#FA0019));  
      background-image: -webkit-linear-gradient(top, #FA0019, #FA0019);  
      background-image: -o-linear-gradient(top, #FA0019, #FA0019);  
      background-image: linear-gradient(to bottom, #FA0019, #FA0019);  
      background-repeat: repeat-x;  
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff149bdf', endColorstr='#ff0480be', GradientType=0);  
      -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);  
      -moz-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);  
      box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);  
      -webkit-box-sizing: border-box;  
      -moz-box-sizing: border-box;  
      box-sizing: border-box;  
      -webkit-transition: width 0.6s ease;  
      -moz-transition: width 0.6s ease;  
      -o-transition: width 0.6s ease;  
      transition: width 0.6s ease;  
    } 
</style>
