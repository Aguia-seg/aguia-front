<template>
    <ion-header>
    <ion-toolbar>
      <ion-buttons slot="end">
        <ion-button color="medium" @click="cancel()">Sair</ion-button>
      </ion-buttons>
      <ion-title>Editar Cliente</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <div class="container">
        <form>
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
                    <ion-label position="floating">CPF/CNPJ</ion-label>
                    <ion-input placeholder="CPF/CNPJ"></ion-input>
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
                    <ion-label position="floating">Email</ion-label>
                    <ion-input placeholder="Email"></ion-input>
                </ion-item>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <ion-item>
                    <ion-label position="floating">Veículo(s)</ion-label>
                    <ion-input placeholder="Veículo(s)"></ion-input>
                </ion-item>
            </div>
        </div>
        <div class="row">
        <div class="col-12">
          <ion-button type="submit" expand="block" color="secondary">
            Editar
          </ion-button>
        </div>
      </div>
    </form>
    </div>
    
  </ion-content>
</template>

<script lang="ts">
    import {
    modalController,
    } from '@ionic/vue';
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'CreateClientEditForm',
        data(){
            return{
                editedClient: {
                    name:  '',
                    cpf_cnpj: '',
                    phone: '',
                    email: '',
                    veicle: '',
                }
            }
        },
        methods: {
            cancel() {
                return modalController.dismiss(null, 'cancel');
            },
            confirm() {
                return modalController.dismiss(null, 'confirm');
            },
        }
    })
</script>

<style scoped>
    ion-item {
    --border-width: 1px;
    --border-radius: 20px;
    --highlight-color-focused: #ffc409;
    --color-focused: #000000;
    --detail-font-color: #ffc409;
    --highlight-height: 8px;
    margin-bottom: 10px;
    margin-top: 10px;
    }
</style>