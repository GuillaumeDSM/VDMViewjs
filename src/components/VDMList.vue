<template>
  <div>
    <v-container id="scroll-target" class="scroll-y">
      <v-layout
        text-xs-center
        wrap
        v-scroll:#scroll-target="onScroll"
      >
        <v-flex xs12>
          <!-- <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
          ></v-img> -->
          <img src="../assets/logo_darkian.png"/>
        </v-flex>


        <v-flex lg4 offset-lg4 md4 offset-md4 sm8 offset-sm2 xs12>
          <v-btn
            block
            color="success"
            @click="onOpenDialog"
          >
            Ajouter une VDM
            <v-icon right>add</v-icon>
          </v-btn>
        </v-flex>

        <v-flex lg8 offset-lg2 xs12>
          <div v-for="(vdm, index) in vdmList" :key="index">
            <VDMListElement :upvoteCount="vdm.rating" :text="vdm.text" />
          </div> 
        </v-flex>

        <v-flex>
          <v-btn 
            ref="button" 
            color="primary" 
            block
            v-show="showScrollButton"
            @click="$vuetify.goTo(0, scrollOptions)">
            scroll
          </v-btn>
        </v-flex>

      </v-layout>
      <VDMAddDialog 
        v-if="isDialogOpen" 
        @VDMAddDialog_update:dialogState="onDialogStateChange"
        @VDMAddDialog_add:vdm="onVDMAdded"/>
    </v-container>
  </div>
</template>

<script>
import VDMAddDialog from './VDMAddDialog';
import VDMListElement from './VDMListElement';
import VDMService from '../services/VDMService';
export default {
  components: {
    VDMAddDialog,
    VDMListElement
  },
  data() {
    const vdmList = []
    return {
      cardText: "Aujourd'hui, je rejoins une amie qui doit me présenter quelqu'un. De loin, son ami fait tellement de gestes que j’en déduis qu'il est muet. Ayant quelques bases, je le salue et lui demande s'il va bien en langue des signes. Il n'est pas muet, il est italien. VDM",
      isDialogOpen: false,
      vdmList,
      duration: 300,
      offset: 0,
      offsetTop: 0
    }
  },
  created() {
    this.fetchVDMs();
  },
  computed: {
    scrollOptions() {
      return {
        duration: this.duration,
        offset: this.offset
      }
    },
    showScrollButton() {
      return this.offsetTop >= 50;
    }
  },
  methods: {
    fetchVDMs(){
      VDMService.getVDMs().then((response) => {
        this.vdmList = response.data
      })
    },
    onOpenDialog() {
      this.isDialogOpen = true
    },
    onDialogStateChange(state) {
      this.isDialogOpen = state;
    },
    onVDMAdded(vdm) {
      this.vdmList.unshift(vdm);
    },
    onScroll(e) {
      this.offsetTop = e.target.scrollTop
      console.log('offset top : ', this.offsetTop)
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
