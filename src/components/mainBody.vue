<template>
  <main>
    <!--Navigation links with a v-mdb-smooth directive-->
    <mdb-row>
      <ul class="smooth-scroll list-unstyled">
        <li><h5><a href="#test1" v-mdb-smooth>Click to scroll to section 1</a></h5></li>
        <br>
        <li><h5><a href="#test2" v-mdb-smooth>Click to scroll to section 2</a></h5></li>
        <br>
      </ul>
    </mdb-row>
    <!--Dummy sections some distance away with IDs coressponding with the links above-->
      <div id="test1">
        <h3>Section 1</h3>
        <hr>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
      </div>
      <div id="test2">
        <h3>Section 2</h3>
        <hr>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
      </div>
    </main>
  </template>

  <script>
  import { mdbRow, mdbSmooth } from 'mdbvue';

  export default {
    name: "mainBody",
    components: {
      mdbRow,
    },
    directives: {
      mdbSmooth
    }
  }
</script>