<template>
  <div id="app" class="container-fluid">
    <app-header></app-header>
    <router-view id="viewContainer"></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: 'app',
  components:{
    appHeader: Header,
    appFooter: Footer
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

  #app {
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  #viewContainer {
    min-height: 70vh;
    margin: 0;
    /*width: 100vw;*/
  }

  .font{
    font-family: "IRAN Sans";
    font-size: 12px;
  }
</style>
