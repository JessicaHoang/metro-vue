<template>
  <div id="app">
          <NavBar />
    <div id="nav">
      <router-link to="/" id="back-button">Go Back</router-link> 
      <!-- router links used for testing routing. -->
      <!-- <router-link to="/about">About</router-link> |
      <router-link to="/StationOneInfo">StationOneInfo</router-link> -->
    </div>
    <router-view/>

      <footerSection />
  </div>
</template>


<script>
import NavBar from '@/components/NavBar.vue'
import footerSection from '@/components/footerSection.vue'

// components of the home page exported
export default {
  name: 'App',
  components: {
    NavBar,
    footerSection
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

$image-path: '~@/../mdb/mdbvue/img';
@import '~@/../mdb/mdbvue/scss/mdb-free.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .back-button {
    display: block;
    flex: 1;
    align-items: right;
  }
}
</style>
