<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- header component -->
    <header1 />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <footer />
    
  </div>
  
</template>

<script>
// @ is an alias to /src
// components of the home page imported
import HelloWorld from '@/components/HelloWorld.vue'
import header1 from '@/components/header1'
import footer from '@/components/footer'

// components of the home page exported
export default {
  name: 'Home',
  components: {
    HelloWorld,
    header1,
    footer
  }
}
</script>

<style scoped lang="scss">
#header1 {
  text-align: left;
}
</style>
