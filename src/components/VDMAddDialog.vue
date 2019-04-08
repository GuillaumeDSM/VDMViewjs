<template>
  <v-layout row justify-center>
    <v-dialog v-model="isDialogOpen" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Ajouter une VDM</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="onCloseDialog">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-layout wrap>
            <v-flex xs12>
              <v-form v-model="isFormValid" ref="form">
                <v-textarea
                  class="mt-3"
                  name="input-7-1"
                  v-model="vdmText"
                  required
                  :rules="rules"
                  label="VDM"
                  placeholder="Aujourd'hui ..."
                ></v-textarea>
              </v-form>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-btn
            block
            color="success"
            @click="onSubmitVDMClick"
            :disabled="!isFormValid"
          >
          Valider
        </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import VDMService from '@/services/VDMService'
export default {
  data() {
    return {
      isDialogOpen: true,
      isFormValid: false,
      vdmText: '',
      rules: [
        v => !!v || 'Champ requis',
        v =>  (v && v.length >= 5 && v.length <= 500) || 'La description doit être comprise entre 5 et 200 caractères'
      ]
    }
  },
  watch: {
    isDialogOpen(newVal, oldVal) {
      if (newVal != oldVal) {
        this.isDialogOpen = newVal;
        this.$emit('VDMAddDialog_update:dialogState');
      }
    }
  },
  methods: {
    async onSubmitVDMClick() {
      const newVdm = {
        text: this.vdmText,
        rating: 0
      }
      await VDMService.addVDM(newVdm);
      this.$emit('VDMAddDialog_add:vdm', newVdm);
      this.onCloseDialog();
    },
    onCloseDialog() {
      this.isDialogOpen = false
    }
  }
}
</script>
