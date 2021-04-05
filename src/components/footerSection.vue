<!-- This is the FooterSection of the website. It is imported
and exported in the App.vue file. It provides links on the footer section.
This beautifull designed footer was from https://mdbootstrap.com/docs/vue/navigation/footer/ -->

<template>
  <!-- Footer -->
  <mdb-footer color="stylish-color-dark" class="font-small pt-4 mt-4">
    <mdb-container class="text-center text-md-left">
      <mdb-row class="text-center text-md-left mt-3 pb-3">
        <mdb-col md="3" lg="3" xl="3" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Washington Metro Vue</h6>
          <p>Washington Metro Vue was developed to provide the arrival times for each station and line to make planning for using the Metros in Washington quick and easy.</p>
        </mdb-col>
        <hr class="w-100 clearfix d-md-none" />
        <mdb-col md="2" lg="2" xl="2" class="mx-auto mt-3">
<!-- Transit Information Column. Provides links for these services.
In the future the href links will point to the correct Component page. -->
          <h6 class="text-uppercase mb-4 font-weight-bold">Transit Information</h6>
          <p><a href="#!">Bus Maps </a></p>
          <p><a href="#!">Bus Schedules</a></p>
          <p><a href="#!">Rail Maps</a></p>
          <p><a href="#!">Rail Stations</a></p>
          <p><a href="#!">Elevators & Escalators</a></p>
          <p><a href="#!">Fairs & Transfers</a></p>
          <p><a href="#!">Biking</a></p>
          <p><a href="#!">Parking</a></p>
          <p><a href="#!">Accessibility</a></p>
        </mdb-col>
        <hr class="w-100 clearfix d-md-none" />
        <mdb-col md="3" lg="2" xl="2" class="mx-auto mt-3">
<!-- Report Issues Column. Provides links for these services. -->
          <h6 class="text-uppercase mb-4 font-weight-bold">Report Issues</h6>
          <p><a href="#!">Contact Us</a></p>
          <p><a href="#!">Transit Police</a></p>
          <p><a href="#!">Customer Comment Form</a></p>
          <p><a href="#!">Lost & Found</a></p>
        </mdb-col>
        <hr class="w-100 clearfix d-md-none" />
        <mdb-col md="4" lg="3" xl="3" class="mx-auto mt-3">
<!-- Washington Metro information column. Provides links contact information for this site.-->
          <h6 class="text-uppercase mb-4 font-weight-bold">Washington Metro Information</h6>
          <p><i class="fas fa-home mr-3"></i> Washington, D.C 20001, US</p>
          <p><i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
          <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
        </mdb-col>
      </mdb-row>
      <hr />
      <mdb-row class="d-flex align-items-center">
        <mdb-col md="8" lg="8">
          <p class="text-center text-md-left grey-text">&copy; 2020 Copyright: <a href="https://www.MDBootstrap.com">
              MDBootstrap.com </a></p>
        </mdb-col>
        <mdb-col md="4" lg="4" class="ml-lg-0">
          <div class="text-center text-md-right">
            <ul class="list-unstyled list-inline">
<!-- These list items are social links. In the future it can be implemented to link
to the social medias. -->
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-facebook"></i></a></li>
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-twitter"></i></a></li>
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-google-plus"></i></a></li>
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </mdb-footer>
  <!-- Footer -->
</template>

<!-- Script has necessary imports and exports-->
<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'footerSection',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>