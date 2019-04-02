<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-container>
      <v-layout
          text-xs-center
          wrap
        >
        <v-flex xs12>
          <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
          ></v-img>
        </v-flex>
      </v-layout>
    </v-container>


    <v-flex md4 offset-md4 xs12>
      <v-btn
        block
        color="success"
        @click="onAddVdmClick"
      >
        Ajouter une VDM
        <v-icon right>add</v-icon>
      </v-btn>
    </v-flex>
    <v-card>
      <v-card-title class="mt-4" primary-title>
        <div>
          <img src="../assets/vdm_logo.png" />
        </div>
        <v-layout
          align-center
          justify-end
        >
          <v-icon medium color="red" class="mr-2 favorite-icon">favorite</v-icon>
          <span class="subheading mr-2">256</span>
        </v-layout>
      </v-card-title>
      <v-divider light></v-divider>
      <v-card-text>
        <div> {{ cardText }} </div>
      </v-card-text>
    </v-card>
    <v-card class="mt-3">
      <v-card-title primary-title>
        <div>
          <img src="../assets/vdm_logo.png" />
        </div>
        <v-layout
          align-center
          justify-end
        >
          <v-icon medium color="red" class="mr-2 favorite-icon">favorite</v-icon>
          <span class="subheading mr-2">256</span>
        </v-layout>
      </v-card-title>
      <v-divider light></v-divider>
      <v-card-text>
        <div> {{ cardText }} </div>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      cardText: "Aujourd'hui, je rejoins une amie qui doit me présenter quelqu'un. De loin, son ami fait tellement de gestes que j’en déduis qu'il est muet. Ayant quelques bases, je le salue et lui demande s'il va bien en langue des signes. Il n'est pas muet, il est italien. VDM"
    }
  },
  methods: {
    onAddVdmClick() {
      this.$router.push('/create-vdm')
    }
  }
}
</script>

<style lang="css" scoped>
  .favorite-icon {
    cursor: pointer;
  }
  .test {
    display: inline-block
  }
</style>
