<template>
  <div id="app">
    <HeaderPartial></HeaderPartial>
    <router-view></router-view>
  </div>
</template>

<script>
// import HomePage from './components/HomePage.vue'
 import HeaderPartial from './partials/HeaderPartial.vue'

export default {
    name: 'App',
    data() {
      return {
      }
    },
    methods: {

    },
    components: {
      HeaderPartial,
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
}
</style>
