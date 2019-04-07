<template>
  <v-app :dark="isDark">
    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon></v-toolbar-side-icon>
      </span>
      <a href="/">
        <img
          :src="require('./assets/logo.svg')"
          height="45">
      </a>
      <v-toolbar-title class="headline text-uppercase">
        <span @click="onLogoClick" class="app-title">DARKIAN</span>
      </v-toolbar-title>
      <v-toolbar-items class="ml-3 hidden-sm-and-down">
        <v-btn @click="goToVdmList">VDMs</v-btn>
        <v-btn @click="goToRandomVdmPage">Random</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn>
          <v-switch 
            label="GO Dark !" 
            v-model="isDark" 
            hide-details>
          </v-switch>
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
</style>