<template>
  <div id="app">
    <pub-header :title="headerTitle" v-if="showHeader"></pub-header>
    <router-view></router-view>
  </div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'
import pubHeader from "@/components/public/header"
export default {
  name: 'app',
  data(){
    return{
      showHeader:true,
      showNav:true
    }
  },
  components:{
    pubHeader
  },
  computed:{
    ...mapGetters(['userLoginInfo']),
    headerTitle(){
      return  window.document.title
    }
  },
  methods:{
    ...mapMutations(['USER_SIGNIN']),
    ...mapActions(['userLogout', 'userLogin']),
    //判断路由
    routerShow(){
       if (this.$route.path.indexOf('/login') > -1 || this.$route.path.indexOf('/register') > -1 || this.$route.path.indexOf('/findpwd') > -1) {
            this.showHeader = false;
            this.showNav = false;
        } else {
            this.showHeader = true;
            this.showNav = true;
        }
    }

  },
  created(){
    document.title = '6666'
  },
  mounted(){
    this.routerShow()
  },
  watch: {
    $route() {
       this.routerShow()
    }
  },
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
