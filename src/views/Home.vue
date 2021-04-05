<!-- This component is the Home Page. It is the first page 
we see when opening up the application. The homepage is where
we can select our station to redirect to StationOneInfo page.-->
<template>
  <div class="home">
    <mainBody />
  </div>
  
</template>

<script>
// imported components
import mainBody from '@/components/mainBody.vue'

// components of the home page exported
export default {
  name: 'Home',
  components: {
    mainBody
  }
}
</script>

<!-- CSS Styling -->
<style scoped lang="scss">
#header1 {
  text-align: left;
}
</style>
