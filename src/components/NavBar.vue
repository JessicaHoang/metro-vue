script
<template>
  <mdb-navbar color="indigo" dark>
    <mdb-navbar-brand href="#">
      Washington Metro Vue
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle"  waves-fixed>Service</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>Rail</mdb-dropdown-item>
            <mdb-dropdown-item>Bus</mdb-dropdown-item>
            <mdb-dropdown-item>MetroAccess</mdb-dropdown-item>
            <mdb-dropdown-item>Elevatos and Escalators</mdb-dropdown-item>
            <mdb-dropdown-item>Upcoming Track Work</mdb-dropdown-item>
            <mdb-dropdown-item>Dailry Service Reports</mdb-dropdown-item>
            <mdb-dropdown-item>Status and Alerts</mdb-dropdown-item>
            <mdb-dropdown-item>Covid-19</mdb-dropdown-item>
            <mdb-dropdown-item>Bikes</mdb-dropdown-item>
            <mdb-dropdown-item>Parking</mdb-dropdown-item>
            <mdb-dropdown-item>Other Transportation Options</mdb-dropdown-item>
            <mdb-dropdown-item>Platform Improvement</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle"  waves-fixed>Schedules & Maps</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>Trip Planner</mdb-dropdown-item>
            <mdb-dropdown-item>Timetables</mdb-dropdown-item>
            <mdb-dropdown-item>Maps</mdb-dropdown-item>
            <mdb-dropdown-item>Next Arrivals</mdb-dropdown-item>
            <mdb-dropdown-item>Service Nearby</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle"  waves-fixed>Rider Guide</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>Stations</mdb-dropdown-item>
            <mdb-dropdown-item>Subscribe to Alerts</mdb-dropdown-item>
            <mdb-dropdown-item>New Riders</mdb-dropdown-item>
            <mdb-dropdown-item>Transfers</mdb-dropdown-item>
            <mdb-dropdown-item>Safety and Security</mdb-dropdown-item>
            <mdb-dropdown-item>Lost and Found</mdb-dropdown-item>
            <mdb-dropdown-item>Commitment to Civil Rights - Title VI</mdb-dropdown-item>
            <mdb-dropdown-item>Language Assistance</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle"  waves-fixed>Fares</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>Cost to Ride</mdb-dropdown-item>
            <mdb-dropdown-item>Mobile Pay</mdb-dropdown-item>
            <mdb-dropdown-item>Student Progrmas</mdb-dropdown-item>            
            <mdb-dropdown-item>Reduced Fares</mdb-dropdown-item>
            <mdb-dropdown-item>Buy Now</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
  import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown, mdbDropdownToggle, mdbDropdownItem, mdbDropdownMenu } from 'mdbvue';
  export default {
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbDropdown,
      mdbDropdown,
      mdbDropdownToggle,
      mdbDropdownItem,
      mdbDropdownMenu
    }
  }
</script>

<style scoped lang="scss">
#nav-item {
  text-align: right;
}
</style>