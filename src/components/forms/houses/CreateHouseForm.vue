<template>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button color="medium" @click="cancel">Cancel</ion-button>
        </ion-buttons>
        <ion-title>Cadastro de residências</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="confirm">Confirm</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <div class="row">
        <div class="col-6">
            <ion-item>
                <ion-select interface="popover" placeholder="Cidade">
                    <ion-select-option value="1">Petrolina</ion-select-option>
                    <ion-select-option value="2">Juazeiro</ion-select-option>
                </ion-select>
            </ion-item>  
        </div> 
        <div class="col-6">
            <ion-item>
                <ion-select interface="popover" placeholder="Tipo">
                    <ion-select-option value="1">Apartamento</ion-select-option>
                    <ion-select-option value="2">Casa</ion-select-option>
                </ion-select>
            </ion-item>  
        </div>
    </div>
<div class="row">
    <div class="col-12">
        <ion-item>
            <ion-label position="floating">CEP</ion-label>
            <ion-input placeholder="CEP"></ion-input>
        </ion-item>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <ion-item>
            <ion-label position="floating">Rua</ion-label>
            <ion-input placeholder="Rua"></ion-input>
        </ion-item>
    </div>
</div>    
    <div class="row">
        <div class="col-12">
        <ion-item>
            <ion-label position="floating">Bairro</ion-label>
            <ion-input placeholder="Bairro"></ion-input>
        </ion-item>
    </div>
    </div>
<div class="row">
    <div class="col-12">
        <ion-item>
            <ion-label position="floating">Número</ion-label>
            <ion-input placeholder="Número"></ion-input>
        </ion-item>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <ion-item>
            <ion-label position="floating">Bloco</ion-label>
            <ion-input placeholder="Bloco"></ion-input>
        </ion-item>
    </div>
</div>  
<div class="row">
    <div class="col-12">
        <ion-item>
            <ion-label position="floating">Veículo</ion-label>
            <ion-input placeholder="Veículo"></ion-input>
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
      name: 'CreateClientForm',
      
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