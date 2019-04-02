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
          <v-btn icon @click="onVDMUpvoted"> 
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
    } 
  },
  computed: {
    currentUpvoteCount() {
      return this.upvoteCount + this.addedUpvotes
    }
  },
  methods: {
    onVDMUpvoted() {
      this.addedUpvotes++;
      // TODO http call
    }
  }
}
</script>
