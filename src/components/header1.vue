<template>
<div class="header1">
        <!-- header -->
  <div class="container-fluid">
        <div class="row bg-dark">
          <div class="col-lg-12">
            <p id="header1" class="text-left text-light display-4 pt-2" style="font-size:25px;">Metro Stations</p>
          </div>
        </div>
      </div>
      <!-- body -->
      <div class="container">
        <div class="row mt-3">
          <div class="col-lg-6">
            <h3 class="text-info">Stations</h3>
          </div>
          <div class="col-lg-6">
            <button class="btn btn-info float-right">
              <i class="fas fa-user"></i>&nbsp;&nbsp; Add New User 
            </button>
          </div>
        </div>
        <hr class="bg-info">
      </div>
</div>
</template>

<script>
export default {
  name: 'header1',
  props: {
    msg: String
  }
}
</script>