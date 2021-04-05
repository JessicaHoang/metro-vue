<!-- This is the Component for StationOneInfo. It provides the content for the body of Station One Info.
It has the information about the lines, amenities at the station, and available parking. 

In the future, I would add more information about the lines and make the lines selectable.
Another thing I would change in the future is splitting the content of this body component
into smaller components to make it easier to create other Station's info page.-->
<template>
  <div class="StationOne">
    <h1 class="Station-title">Station 1 <i class="fa fa-train" aria-hidden="true"></i></h1>
    <p id="address">4700 Garden City Dr, New Carrollton, MD 20784 <i class="fa fa-map-marker" aria-hidden="true"></i></p>
    <h2>STATION LINES</h2>
    <div class="table">
        <div>
<!-- This is a list, stylized by mdbvue to display Station Lines, the cars, Destination, 
and Arrival Times. It has a hover attribute that allows the row to change colors upon
hovering. I will add a button to select the line in the future.

I did not have a back-end for this project, so I wasn't able to get the arrival times given 
from the Laravel Backend. However, if I was able to do so, I would sort them to show the 
earliest arrival times relative to the current time to show the most imminent arrival time.-->
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
    <!-- This is a Google Maps API that allows the user to dynamically add marks
    on the map. I added this amenities and other close by.
    Currently, it is not able to load, so I have commented out to fix later. -->
    
    <!-- <div id="Google-maps">
        <h2>MAP</h2>
        <mdb-google-map
            name="reg"
            class="col-md-12"
            :markerCoordinates="coordinates"
            style=" height: 500px"
            :zoom="14">
        </mdb-google-map>
    </div> -->

    <!-- Listing of amenities available at the station are listed along with
    icons from fontawesome-->
    <h2>AMENITIES</h2>
    <ul id="lists">
        <li>Stores <i class="fas fa-store-alt"></i></li>
        <li>Dining <i class="fas fa-utensils"></i></li>
        <li>Phones <i class="fas fa-phone"></i></li>
    </ul>
    <!-- List of information regarding parking. The ul tag contains
    an id, "lists" that makes each list item bulleted. -->
    <h2>PARKING</h2>
    <ul id="lists">
        <li> 396 spaces / 16 handicapped spaces</li>
        <li>Free Parking</li>
        <li>Overnight parking is allowed at parking lot on First St., 
        just east of College Ave. 3 hour posted restriction at areas of the station.</li>
    </ul>

   </div>
    
  </template>
    
<!-- This script tag contains all bootstrap related imports 
and exports-->
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
    // This is data for the Google Maps
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

<!-- CSS styling -->
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

