<template>
  <div id="app">
    <input type="text" v-model="username">
    <input type="text" v-model="password">
    <button @click="login">登录</button>
    <button @click="getUser">获取所有用户</button>

  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import request from "./utils/request";

  export default {
    name: 'App',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    components: {
      HelloWorld
    },
    created() {


    },
    methods:{
      async login() {
        let res = await request('/login', {method: 'POST', body: {username: this.username, password: this.password}})
        localStorage.setItem('token', res.token);
      },
      async getUser() {
        let res = await request('/user', {method: 'GET', body: {username: this.username, password: this.password}})
        localStorage.setItem('token', res.token);
      },

    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
