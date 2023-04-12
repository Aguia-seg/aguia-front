<template>
    <ion-header>
        <ion-toolbar>
        <ion-buttons slot="end">
            <ion-button color="medium" @click="cancel">Sair</ion-button>
        </ion-buttons>
        <ion-title>Cadastro de residência</ion-title>
        </ion-toolbar>
    </ion-header>

</template>

<script lang="ts">
import { modalController } from '@ionic/core';
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'AddHouseForm',

    methods: {
    cancel() {
      return modalController.dismiss(null, 'cancel');
    },
}
})

</script>

<style scoped>

</style>