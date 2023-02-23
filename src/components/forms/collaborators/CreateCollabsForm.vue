<template>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button color="medium" @click="cancel">Cancel</ion-button>
        </ion-buttons>
        <ion-title>Cadastro de colaboradores</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="confirm">Confirm</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="row">
        <div class="col-6">
            <ion-item>
                <ion-select interface="popover" placeholder="Tipo">
                    <ion-select-option value="1">Vendedor</ion-select-option>
                    <ion-select-option value="2">Cobrador</ion-select-option>
                </ion-select>
            </ion-item>  
        </div> 
    </div>
<div class="row">
    <div class="col-12">
        <ion-item>
            <ion-label position="floating">Nome</ion-label>
            <ion-input placeholder="Nome"></ion-input>
        </ion-item>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <ion-item>
            <ion-label position="floating">E-mail</ion-label>
            <ion-input placeholder="E-mail"></ion-input>
        </ion-item>
    </div>
</div>    
<div class="row">
    <div class="col-12">
        <ion-item>
            <ion-label position="floating">CPF</ion-label>
            <ion-input placeholder="CPF"></ion-input>
        </ion-item>
    </div>
</div>    
<div class="row">
    <div class="col-12">
        <ion-item>
            <ion-label position="floating">Telefone</ion-label>
            <ion-input placeholder="Telefone"></ion-input>
        </ion-item>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <ion-item>
            <ion-label position="floating">Celular</ion-label>
            <ion-input placeholder="Celular"></ion-input>
        </ion-item>
    </div>
</div>
 
    </ion-content>
  </template>
  
  <script lang="ts">
    import {
      modalController,
    } from '@ionic/vue';
    import { defineComponent } from 'vue';
    
  
    export default defineComponent({
      name: 'CreateCollabsForm',
      
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

<style scoped>
  ion-item{
    --border-width: 1px;
    --border-radius: 20px;
    --highlight-color-focused: #ffc409;
    --color-focused: #000000;
    --detail-font-color: #ffc409;
    --highlight-height: 8px;
    margin-bottom: 20px;
    margin-top: 20px;   
    }
</style>