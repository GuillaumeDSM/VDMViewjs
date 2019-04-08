<template>
  <v-container>
    <v-layout text-xs-center v-if="loading">
      <v-flex xs12>
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout text-xs-center wrap v-else>
      <v-flex lg8 offset-lg2 xs12>
        <VDMListElement 
          :upvoteCount="vdm.rating" 
          :text="vdm.text" 
          :id="1"
          :can-upvote="false"
          class="mt-5"
        />
      </v-flex>
      <v-flex lg2 offset-lg5 sm6 offset-sm3 xs12 class="mt-3">
        <v-btn block class="primary" @click="fetchRandomVDM">Random VDM</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VDMListElement from './VDMListElement'
import VDMService from '@/services/VDMService'
export default {
  components: {
    VDMListElement
  },
  data() {
    return {
      vdm: {},
      loading: true
    }
  },
  created() {
    this.fetchRandomVDM();
  },
  methods: {
    async fetchRandomVDM() {
      const res = await VDMService.getRandomVDM()
      this.vdm = res.data
      this.loading = false;
    },
    setData (vdm) {
      this.vdm = vdm
    }
  }
}
</script>
