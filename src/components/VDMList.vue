<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <!-- <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img> -->
        <v-img
          :src="require('@/assets/logo_darkian.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
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
        <div v-for="(vdm, index) in reverseVdmList" :key="index" >
          <VDMListElement 
            :upvoteCount="vdm.rating" 
            :text="vdm.text" 
            :id="reverseVdmList.length - index - 1"
            :can-upvote="true"/>
        </div> 
      </v-flex>

      <v-btn 
        icon
        large
        color="red" 
        class="scroll-to-top-btn"
        v-show="showScrollButton"
        @click="scrollToTop">
        <v-icon color="white">keyboard_arrow_up</v-icon>
      </v-btn>

    </v-layout>
    <VDMAddDialog 
      v-if="isDialogOpen" 
      @VDMAddDialog_update:dialogState="onDialogStateChange"
      @VDMAddDialog_add:vdm="onVDMAdded"/>
  </v-container>
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
    return {
      isDialogOpen: false,
      vdmList: [],
      offsetTop: 0
    }
  },
  created() {
    this.fetchVDMs();
    window.addEventListener('scroll', this.onScrollPositionChange);
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScrollPositionChange);
  },
  computed: {
    showScrollButton() {
      return this.offsetTop >= 300
    },
    reverseVdmList() {
      return this.vdmList.slice().reverse();
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
      this.isDialogOpen = state
    },
    onVDMAdded(vdm) {
      this.vdmList.push(vdm)

    },
    onScrollPositionChange() {
      this.offsetTop = window.scrollY
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
  .scroll-to-top-btn {
    position: fixed;
    bottom: 10px;
    right: 10px;
  }
</style>
