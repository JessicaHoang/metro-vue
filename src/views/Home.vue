<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <NavBar />
    <mainBody />
    <footerSection />
    
  </div>
  
</template>

<script>
// @ is an alias to /src
// components of the home page imported
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'
import footerSection from '@/components/footerSection.vue'
import mainBody from '@/components/mainBody.vue'

// components of the home page exported
export default {
  name: 'Home',
  components: {
    HelloWorld,
    NavBar,
    mainBody,
    footerSection
  }
}
</script>

<style scoped lang="scss">
#header1 {
  text-align: left;
}
</style>
