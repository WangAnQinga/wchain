<template>
    <x-header :left-options="{showBack: false}" id="xHeader">
        <p v-if="!userLoginInfo">
            <router-link to="/login" exact>
                <img src="../../../static/images/mine.png">
                <span>登录/注册</span>
            </router-link>
            
        </p>
        <p v-if="userLoginInfo">
            个人中心
        </p>
        {{title}}
    </x-header>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'
import { XHeader } from 'vux'
export default {
  props:['title'],
  name: 'xheader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
      XHeader
  },
  computed:{
    ...mapGetters(['userLoginInfo']),
  },
  methods:{
    ...mapMutations(['USER_SIGNIN']),
    ...mapActions(['userLogout', 'userLogin']),
  },
  created(){

  },
  mounted(){
      console.log(1111111111)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #xHeader p a{
        position: absolute;
        left: 10px;
        top:0;
        bottom:0;
        margin:auto;
        display: flex;
        color:#fff;
        flex-flow: row nowrap;
        align-items: center;
        font-size: 12px;
    }
    #xHeader p a img{
        margin-right: 5px;
    }
</style>
