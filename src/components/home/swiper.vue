<template>
  <div class="swiperContent">
    <swiper loop auto height="4rem">
      <swiper-item class="swiper-demo-img" v-for="(item, index) in list" :key="index">
        <img :src="item.img">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'
import { Swiper,SwiperItem } from 'vux'
export default {
  name: 'temp',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[{
        url: 'javascript:',
        img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=921920820,4244580496&fm=15&gp=0.jpg',
        title: '送你一朵fua'
      }, {
        url: 'javascript:',
        img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2007503708,3861572893&fm=27&gp=0.jpg',
        title: '送你一次旅行',
        fallbackImg: 'https://static.vux.li/demo/3.jpg'
      },{
        url: 'javascript:',
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2451895492,3012828830&fm=27&gp=0.jpg',
        title: '送你一次旅行',
        fallbackImg: 'https://static.vux.li/demo/3.jpg'
      },{
        url: 'javascript:',
        img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2218944267,3992097490&fm=15&gp=0.jpg',
        title: '送你一次旅行',
        fallbackImg: 'https://static.vux.li/demo/3.jpg'
      },{
        url: 'javascript:',
        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1082794138,3969310495&fm=15&gp=0.jpg',
        title: '送你一次旅行',
        fallbackImg: 'https://static.vux.li/demo/3.jpg'
      }]
    }
  },
  components:{
    Swiper,
    SwiperItem
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
.swiperContent{
  height: 150px;
}
.swiperContent .vux-slider{
  height: 100%;
}

.swiperContent .vux-slider .vux-swiper img{
  width:100%;
  height:100%;
}
</style>
