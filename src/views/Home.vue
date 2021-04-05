<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <mainBody />
  </div>
  
</template>

<script>
// @ is an alias to /src
// components of the home page imported

import mainBody from '@/components/mainBody.vue'

// components of the home page exported
export default {
  name: 'Home',
  components: {
    mainBody
  }
}
</script>

<style scoped lang="scss">
#header1 {
  text-align: left;
}
</style>
