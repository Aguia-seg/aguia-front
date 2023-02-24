<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Cadastro de Clientes</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <div class="row">
      <div class="col-6">
        <ion-item>
          <ion-select interface="popover" placeholder="Tipo de cliente" required>
            <ion-select-option value="PF">Pessoa física</ion-select-option>
            <ion-select-option value="PJ">Pessoa jurídica</ion-select-option>
          </ion-select>
        </ion-item>
      </div>
      <div class="col-6">
        <ion-item>
          <ion-select interface="popover" placeholder="Situação">
            <ion-select-option value="1">Ativo</ion-select-option>
            <ion-select-option value="2">Inativo</ion-select-option>
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
          <ion-input type="email" placeholder="E-mail"></ion-input>
        </ion-item>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <ion-item>
          <ion-label position="floating">Telefone</ion-label>
          <ion-input type="number" placeholder="Telefone"></ion-input>
        </ion-item>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <ion-item>
          <ion-label class="d-flex" position="floating">
            <h5>Veículo</h5>
            <p>(opcional)</p>
          </ion-label>
          <ion-textarea placeholder="Cliente possui veículo?"></ion-textarea>
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
ion-item {
  --border-width: 1px;
  --border-radius: 20px;
  --highlight-color-focused: #ffc409;
  --color-focused: #000000;
  --detail-font-color: #ffc409;
  --highlight-height: 8px;
  margin-bottom: 20px;
  margin-top: 20px;
}
.row{
  height: 80px;
}
</style>