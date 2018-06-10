<template>
  <div class="hello">
      <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name" type="text" v-model="username"></x-input>
      <x-input title="密码" name="password" placeholder="请输入姓名" type="password" v-model="password"></x-input>

      <x-button @click.native="clickLogin()" type="primary"> set success</x-button>
  </div>
</template>

<script>
import { XInput , XButton} from 'vux'
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username:null,
      password:null,
    }
  },
  components:{
      XInput,
      XButton
  },
  methods:{
      clickLogin(){
          const form = {
              username:this.username,
              password:this.password
          };
          API.post(API.login.url,{},form).then(res => {
              console.log(res)
          })
      }
  },
  mounted(){
      console.log(1111)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
