<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <button @click="test">Test button</button>
  </div>
</template>

<script lang="ts">
import { getModule } from 'vuex-module-decorators';
import { Component, Vue,  } from 'vue-property-decorator';
import AppModule from './store/appModule';

@Component({})
export default class App extends Vue {
  private appModule = getModule(AppModule, this.$store);
  private test () {
    console.log(this.appModule.appState.val)
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
