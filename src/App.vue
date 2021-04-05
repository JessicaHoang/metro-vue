<!--This is the App Component. It is the official main page that displays the Home page.
The NavBar and FooterSection are both here because no matter what page I am directed to
it will always display. -->

<template>
  <div id="app">
          <NavBar />
<!-- The router link is used as the Go back button because we only have two pages so far. -->
    <div id="nav">
      <router-link to="/" id="back-button">Go Back</router-link> 
    </div>
    <router-view/>

      <footerSection />
  </div>
</template>

<!-- Script contains the components imported and exported for the App.vue -->
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

<!-- CSS Styles -->
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
