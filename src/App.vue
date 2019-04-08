<template>
  <v-app :dark="isDark">
    <v-toolbar app>
      <a href="/">
        <img
          :src="require('@/assets/logo.svg')"
          height="40">
      </a>
      <v-toolbar-title class="headline text-uppercase">
        <span @click="onLogoClick" class="app-title">DARKIAN</span>
      </v-toolbar-title>
      <v-toolbar-items class="ml-2">
        <v-btn flat @click="goToVdmList" class="toolbar-nav-text">VDMs</v-btn>
        <v-btn flat @click="goToRandomVdmPage" class="toolbar-nav-text">Random</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat class="dark-switch-btn-wrapper">
          <v-switch
            class="dark-switch-btn" 
            v-model="isDark" 
            hide-details>
          </v-switch>
          <span class="switch-btn-label mt-1">Go Dark !</span>
        </v-btn>
      </v-toolbar-items>
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
      isDark: false
    }
  },
  methods: {
    onLogoClick() {
      this.$router.push('/')
    },
    goToVdmList() {
      this.$router.push('/')
    },
    goToRandomVdmPage() {
      this.$router.push('random-vdm')
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
 .toolbar-nav-text {
   font-size: 14px;
 }
 @media(max-width: 767px) {
  .dark-switch-btn label {
    display: none;
  }
  .app-title {
    display: none;
  }
  .switch-btn-label {
    display: none;
  }
  .v-toolbar__items {
    margin-left: 0px !important;
  }
 }
</style>