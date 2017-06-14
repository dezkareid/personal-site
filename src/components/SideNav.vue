<template>
  <md-sidenav class="md-left" ref="leftSidenav">
    <SideNavHeader></SideNavHeader>
    <md-list>
      <md-list-item>
        <router-link exact to="/">
          <md-icon>perm_identity</md-icon>
          <span>Yo</span>
        </router-link>
      </md-list-item>
      <md-list-item>
        <md-icon>code</md-icon>
        <span>Yo Developer</span>
        <md-list-expand>
          <md-list>
            <md-list-item class="md-inset">
              <router-link to="/backend">
                <md-icon>computer</md-icon>
                <span>Backend</span>
              </router-link>
            </md-list-item>
            <md-list-item class="md-inset">
              <router-link to="/frontend">
                <md-icon>web</md-icon>
                <span>Frontend</span>
              </router-link>
            </md-list-item>
            <md-list-item class="md-inset">
              <router-link to="/mobile">
                <md-icon>developer_mode</md-icon>
                <span>Mobile</span>
              </router-link>
            </md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>
    </md-list>
  </md-sidenav>
</template>

<script>
  import SideNavHeader from './SideNavHeader'
  export default {
    name: 'sidenav',
    components: {
      SideNavHeader
    },
    methods: {
      toggleLeftSidenav () {
        this.$refs.leftSidenav.toggle()
      }
    }
  }
</script>

<style scoped>

</style>
