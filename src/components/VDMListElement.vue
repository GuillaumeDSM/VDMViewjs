<template>
    <v-card>
      <v-card-title class="mt-4" primary-title>
        <div>
          <img src="../assets/vdm_logo.png" />
        </div>
        <v-layout
          align-center
          justify-end
        >
          <v-btn icon @click="onVDMUpvoted" v-show="canUpvote"> 
            <v-icon medium color="blue" class="mr-2">thumb_up</v-icon>
          </v-btn>
          <span class="subheading mr-2">{{ currentUpvoteCount }}</span>
        </v-layout>
      </v-card-title>
      <v-divider light></v-divider>
      <v-card-text>
        <div> {{ text }} </div>
      </v-card-text>
    </v-card>
</template>

<script>
import VDMService from '@/services/VDMService'
export default {
  data() {
    return {
      addedUpvotes: 0
    }
  },
  props: {
    text: {
      type: String,
      required: true
    },
    upvoteCount: {
      type: Number,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    canUpvote: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    currentUpvoteCount() {
      return this.upvoteCount + this.addedUpvotes
    }
  },
  methods: {
    async onVDMUpvoted() {
      try {
        await VDMService.upvoteVDM(this.id);
        this.addedUpvotes++;
      } catch (err) {
        console.err('Error : ', err)
      }
    }
  }
}
</script>
