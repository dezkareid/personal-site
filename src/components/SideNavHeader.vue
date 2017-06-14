<template>
  <md-toolbar class="md-account-header">
    <md-list class="md-transparent">
      <md-list-item class="md-avatar-list">
        <md-avatar class="md-large">
          <img src="https://placeimg.com/64/64/people/8" alt="People">
        </md-avatar>
      </md-list-item>
      <md-list-item>
        <div class="md-list-text-container">
          <span>Joel Humberto Gómez Paredes</span>
          <span>elmaildeldezkareid@gmail.com</span>
        </div>
      </md-list-item>
    </md-list>
  </md-toolbar>
</template>

<script>
  export default {
    name: 'sidenavheader'
  }
</script>

<style>

  .md-account-header .md-transparent .md-list-item-container:hover {
    background-color: transparent !important;
    text-decoration: none !important;
  }
</style>
