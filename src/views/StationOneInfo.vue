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