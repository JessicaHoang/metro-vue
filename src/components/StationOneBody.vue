<!-- This is the Component for StationOneInfo. It provides the body content
It has the information about the lines, amenities at the station, and available parking. -->
<template>
  <div class="StationOne">
    <h1 class="Station-title">Station 1 <i class="fa fa-train" aria-hidden="true"></i></h1>
    <p id="address">4700 Garden City Dr, New Carrollton, MD 20784 <i class="fa fa-map-marker" aria-hidden="true"></i></p>
    <h2>STATION LINES</h2>
    <div class="table">
        <div>
    <mdb-tbl hover>
      <mdb-tbl-head>
        <tr>
          <th>Lines</th>
          <th>Cars</th>
          <th>Destination</th>
          <th>Arrival Time</th>
        </tr>
      </mdb-tbl-head>
      <mdb-tbl-body>
        <tr>
          <th>OR</th>
          <td>8</td>
          <td>Vienna</td>
          <td>7:00 AM</td>
        </tr>
        <tr>
          <th>GR</th>
          <td>8</td>
          <td>Branch Ave</td>
          <td>7:45 AM</td>
        </tr>
        <tr>
          <th>OR</th>
          <td>8</td>
          <td>Vienna</td>
          <td>8:15 AM</td>
        </tr>
        <tr>
          <th>SV</th>
          <td>8</td>
          <td>Wiehle-Reston East</td>
          <td>9:30 AM</td>
        </tr>
        <tr>
          <th>--</th>
          <td>--</td>
          <td>--</td>
          <td>--</td>
        </tr>
      </mdb-tbl-body>
    </mdb-tbl>
  </div>
    </div>
    <div id="Google-maps">
        <h2>GOOGLE MAPS</h2>
        <mdb-google-map
            name="reg"
            class="col-md-12"
            :markerCoordinates="coordinates"
            style=" height: 500px"
            :zoom="14">
        </mdb-google-map>
    </div>

    <h2>AMENITIES</h2>
    <ul id="lists">
        <li>Stores <i class="fas fa-store-alt"></i></li>
        <li>Dining <i class="fas fa-utensils"></i></li>
        <li>Phones <i class="fas fa-phone"></i></li>
    </ul>
    <h2>PARKING</h2>
    <ul id="lists">
        <li> 396 spaces / 16 handicapped spaces</li>
        <li>Free Parking</li>
        <li>Overnight parking is allowed at parking lot on First St., 
        just east of College Ave. 3 hour posted restriction at areas of the station.</li>
    </ul>

   </div>
    
  </template>
    

<script>
  import { mdbTbl, mdbTblHead, mdbTblBody, mdbSmooth, mdbGoogleMap } from 'mdbvue';
  export default {
    name: 'TablePage',
    components: {
      mdbTbl,
      mdbTblHead,
      mdbTblBody,
      mdbGoogleMap
    },
    directives: {
        mdbSmooth
    },
    data() {
        return {
            coordinates: [{
            latitude: 38.950473,
            longitude: -76.866374,
            title: 'New Carrollton, MD'
        }]
      }
    }
  }
</script>

<style scoped lang="scss">
.StationOne {
    text-align: left;
    padding-left: 80px;
}
h2 {
    padding-top: 40px;
    font-weight:900;
}
.lists {
    display:inline;
}

</style>

