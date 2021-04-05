<!--This page is the Station One Info Page. We are redirected to this page
upon selecting any item on the drop down menu on the home page. In the 
future I will make more components to add on this page. -->
<template>
  <div class="StationOneInfo">
    <StationOneBody />
  </div>
</template>

<script>
// @ is an alias to /src
// components of the home page imported
import StationOneBody from '@/components/StationOneBody.vue'


// components of the home page exported
export default {
  name: 'StationOneInfo',
  components: {
    StationOneBody
  }
}
</script>