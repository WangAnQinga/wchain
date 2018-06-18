<template>
  <div class="detail">
    <div class="item">
        <img src="../../assets/bit.jpg" alt="">
        <div class="middle">
          <p>{{item.description['round no']}}期  {{item.description.name}}夺宝</p>
          <p><span class="winner">获得者：{{item.winner_username}} </span><span class="total">夺宝：{{item.price}}人次</span></p>
          <p>商品价值：{{item.price}}平台币</p>
          <p>揭晓时间：{{item.updated_at | formDate}}</p>
          <p>中奖号码：{{item.calc_result}}</p>
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
import moment from 'moment'
export default {
  name: 'detail',
  data () {
    return {
      item:{
        "description":{}
      },
      id:null,
    }
  },
  components:{

  },
  computed:{
    ...mapGetters(['userLoginToken']),
  },
  filters:{
    formDate(str){
      return moment(str*1000).format('YYYY-MM-DD HH:mm')
    }
  },
  methods:{
    ...mapMutations(['USER_SIGNIN']),
    ...mapActions(['userLogout', 'userLogin']),
    getDetail(){
      API.get(API.goodDetial.url,{id:this.id},{}).then(res => {
        if(res.data.code == 200){
          this.item = res.data.data; 
          console.log(res.data.data)
        }
      })
    }
  },
  created(){
    
  },
  mounted(){
    this.id = this.$route.params.id;
    this.getDetail()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item{
  width: 100%;
  padding:10px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 100px;
}
.item img{
  width: 90px;
  height: 90px;
  display: block
}
.item .middle{
  width: 280px;
  height:90px;
  position: relative;
   margin: 0 5px;
}
.moreDetail{
  position: absolute;
  bottom:5px;
  right:5px;
  color:skyblue
}
.middle .winner{
  margin-right:20px;
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
</style>
