<template>
  <div id="app">
    <router-link to="about">aaa</router-link>
    <!-- <router-link to="/carousel/dfsf">aaa</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Block from './components/Block'
import Child from './components/Child'

export default {
  name: 'app',
  components: { Block, Child },
  data () {
    return {
      message: 'Hello webpack + vue.js'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
