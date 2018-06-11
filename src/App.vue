<template>
  <div id="app">
    <pub-header :title="headerTitle" v-if="showHeader"></pub-header>
    <pub-nav v-if="showNav"></pub-nav>
    <router-view ></router-view>
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
import pubNav from "@/components/public/nav"
export default {
  name: 'app',
  data(){
    return{
      showHeader:true,
      showNav:true
    }
  },
  components:{
    pubHeader,
    pubNav
  },
  computed:{
    ...mapGetters(['userLoginToken']),
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

  [v-cloak] {
        display: none
    }
    /* zteict reset css v2.0 | 20120626 */
    
    html,
    body,
    div,
    span,
    input,
    textarea,
    applet,
    object,
    iframe,
    p,
    pre,
    a,
    abbr,
    acronym,
    address,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    caption,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */

    table,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td{
        margin: 0;
        padding: 0;
        font-size: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }
    ul li ,ol li {
      list-style: none;
    }
</style>
