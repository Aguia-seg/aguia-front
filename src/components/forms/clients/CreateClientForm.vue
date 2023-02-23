<template>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button color="medium" @click="cancel">Cancel</ion-button>
        </ion-buttons>
        <ion-title>Cadastro de Clientes</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="confirm">Confirm</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="stacked">Your name</ion-label>
        <ion-input  placeholder="Your name"></ion-input>
      </ion-item>
    </ion-content>
  </template>
  
  <script lang="ts">
    import {
      IonContent,
      IonHeader,
      IonTitle,
      IonToolbar,
      IonButtons,
      IonButton,
      IonItem,
      IonLabel,
      IonInput,
      modalController,
    } from '@ionic/vue';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      name: 'CreateClientForm',
      components: { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonItem, IonLabel, IonInput },
      methods: {
        cancel() {
          return modalController.dismiss(null, 'cancel');
        },
        confirm() {
          return modalController.dismiss(null, 'confirm');
        },
      },
    });
  </script>