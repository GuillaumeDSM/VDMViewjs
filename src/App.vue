<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span @click="onLogoClick" class="app-title">DARKIAN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      //
    }
  },
  methods: {
    onLogoClick() {
      this.$router.push('/')
    }
  }
}
</script>


<style lang="css">
 body {
   background-color: #eee !important
 }
 .app-title {
   cursor: pointer;
 }
</style>