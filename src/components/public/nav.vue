<template>
  <div id="navv">
    <ul>
      <router-link to="/home" tag="li" active-class="u-link--Active" exat>首页</router-link>
      <router-link to="/2" tag="li" active-class="u-link--Active" exat>所有夺宝</router-link>
      <router-link to="/3" tag="li" active-class="u-link--Active" exat>开奖记录</router-link>
      <router-link to="/invite" tag="li" active-class="u-link--Active" exat>邀请有奖</router-link>
      <router-link to="/guide" tag="li" active-class="u-link--Active" exat>新手指南</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navv',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #navv{
    height: 35px;
    width: 100%;
    background:#666666;
    margin-top:45px;
  }
  #navv ul {
    width:100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content:space-around;
    align-items: center
  }
  #navv ul li{
    height: 35px;
    line-height: 35px;
    color: #fff;
  }
  #navv ul li.u-link--Active{
    color:aquamarine
  }
</style>
