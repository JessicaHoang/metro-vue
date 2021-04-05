<template>
  <main>
    <!-- I added mdbSmooth for smooth scrolling capabilities since the page 
    will have more information in the future. -->
    <!--In this panel, the user is able to look at a dropdown menu to select their station-->
  <div id="panel1">
  <mdb-container>
    <mdb-row class="mt-4">
      <mdb-card class="text-center">
        <mdb-card-header>
          <mdb-tab default class="card-header-tabs">
            
            <!-- These are the two tabs for Rail or Bus on the panel. 
            Allows the user to choose which transportation option they 
            would like to use. -->
            <mdb-tab-item :active="active==0" @click.native.prevent="active=0">Rail</mdb-tab-item>
            <mdb-tab-item :active="active==1" @click.native.prevent="active=1">Bus</mdb-tab-item>
          </mdb-tab>
        </mdb-card-header>
        <mdb-card-body>
          <mdb-tab-content>
            <mdb-tab-pane class="fade" key="show1" v-if="active==0">
              <mdb-card-title>Select your Station <i class="fa fa-train" aria-hidden="true"></i></mdb-card-title>
              <mdb-card-text>All Stations are below. Please select one to see more information on the station.</mdb-card-text>
             
             <!-- This select/option portion is for Selecting a Station 
             I was not able to get the dropdown value to redirect the page, depending on the 
             different Stations, so no matter what is selected, it will redirect to Station 1.
             Given more time, I would work on this using PHP backend-->
              <select v-model="myQuery" @change="gotoStation1" class="browser-default custom-select">
                <option selected>Open this select menu</option>
                <option value="1">Station 1</option>
                <option value="2">Station 2</option>
                <option value="3">Station 3</option>
              </select>
              <mdb-btn color="primary" v-if="1">Submit</mdb-btn>
            </mdb-tab-pane>
            <mdb-tab-pane class="fade" key="show2" v-if="active==1">
              <mdb-card-title>Select a route <i class="fa fa-bus" aria-hidden="true"></i></mdb-card-title>
              <mdb-card-text>All bus routes. Please select a route to view more information on the bus route.</mdb-card-text>
                
                <!-- This is the selection for bus routes. I have not put in information
                for Bus routes, so this selector will not work at this time. -->
                <select class="browser-default custom-select">
                <option selected>Open this select menu</option>
                <option value="1">Bus Route 1</option>
                <option value="2">Bus Route 2</option>
                <option value="3">Bus Route 3</option>
              </select>
              <mdb-btn color="primary">Submit</mdb-btn>
            </mdb-tab-pane>
          </mdb-tab-content>
        </mdb-card-body>
      </mdb-card>
    </mdb-row>
  </mdb-container>
  </div>
  </main>
</template>
  <script>
  import { mdbContainer,  mdbRow, mdbCol, 
    mdbBtn, mdbCard, mdbCardTitle, mdbCardText, 
    mdbCardFooter, mdbCardBody, mdbCardHeader, mdbListGroup, 
    mdbListGroupItem, mdbNavItem, mdbCardGroup, mdbIcon, 
    mdbFooter, mdbTab, mdbTabItem, mdbTabContent, mdbTabPane, 
    mdbSmooth } from 'mdbvue';

  export default {
    name: "mainBody",
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbBtn,
      mdbCard,
      mdbCardTitle,
      mdbCardText,
      mdbCardFooter,
      mdbCardBody,
      mdbCardHeader,
      mdbListGroup,
      mdbListGroupItem,
      mdbNavItem,
      mdbCardGroup,
      mdbIcon,
      mdbFooter,
      mdbTab,
      mdbTabItem,
      mdbTabContent,
      mdbTabPane,
    },
    data(){
      return {
        active: 0, 
        basicOptions: [
          { text: "Station nr 1", value: "Station 1" },
          { text: "Station nr 2", value: "Station 2" },
          { text: "Station nr 3", value: "Station 3" }
        ]
      };
    },
    directives: {
      mdbSmooth
    },

    // This method routes the user to Station One's page upon selecting Station 1 button from the drop down.
    methods: {
      gotoStation1(){
        this.$router.push({
          name: 'StationOneInfo',
          query: {
            myQuery: this.myQuery,
          },
        });
      }
    }
  }
</script>

<style scoped lang="scss">
#fade {
  max-Width: 700px;
}
</style>