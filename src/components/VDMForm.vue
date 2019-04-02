<template>
  <v-flex xs12 sm6 offset-sm3>
    <h1 class="mt-3"> Ajoute ta VDM ! </h1>
    <v-textarea
      class="mt-3"
      name="input-7-1"
      label="vdm"
      placeholder="Aujourd'hui ..."
    ></v-textarea>
    <v-flex md2 offset-md5 xs12>
        <v-btn
          block
          color="success"
          @click="onSubmitVDMClick"
        >
          Valider
        </v-btn>
    </v-flex>
  </v-flex>
</template>

<script>
export default {
  methods: {
    onSubmitVDMClick() {
      // TODO
    }
  }
}
</script>
