<template>
  <div class="phone-viewport">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">CV - Joel Humberto Góme Paredes</h2>
    </md-toolbar>
    <SideNav ref="sidenav"></SideNav>
  </div>
</template>

<script>
  import SideNav from './SideNav'
  export default {
    name: 'navbar',
    components: {
      SideNav
    },
    methods: {
      toggleLeftSidenav () {
        this.$refs.sidenav.toggleLeftSidenav()
      }
    }
  }
</script>

<style scoped>

</style>
