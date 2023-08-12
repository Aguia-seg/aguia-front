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
        <form @submit.prevent="validate();">
        <div class="row">
            <div class="col-12">
                <ion-item>
                    <ion-label position="floating">Nome</ion-label>
                    <ion-input placeholder="Nome" v-model="client.name"></ion-input>
                </ion-item>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <ion-item>
                    <ion-label position="floating">CPF/CNPJ</ion-label>
                    <ion-input placeholder="CPF/CNPJ" v-model="client.cpf_cnpj"></ion-input>
                </ion-item>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <ion-item>
                    <ion-label position="floating">Telefone</ion-label>
                    <ion-input placeholder="Telefone" v-model="client.phone"></ion-input>
                </ion-item>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <ion-item>
                    <ion-label position="floating">Celular</ion-label>
                    <ion-input placeholder="Celular" v-model="client.cellphone"></ion-input>
                </ion-item>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <ion-item>
                    <ion-label position="floating">Email</ion-label>
                    <ion-input placeholder="Email" v-model="client.email"></ion-input>
                </ion-item>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <ion-item>
                    <ion-label position="floating">Veículo(s)</ion-label>
                    <ion-input placeholder="Veículo(s)" v-model="client.veicle"></ion-input>
                </ion-item>
            </div>
        </div>
        <div class="row">
        <div class="col-12">
          <ion-button :disabled="editButton" type="submit" expand="block" color="secondary">
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
    import { mapState, mapActions } from "vuex";
    import { alertController, loadingController } from '@ionic/vue';

    export default defineComponent({
        name: 'CreateClientEditForm',
       data(){
        return{
            editButton: false
        }
       },
        computed: {
        ...mapState('client', ['client', 'clients'])
         },
        methods: {
            cancel() {
                return modalController.dismiss(null, 'cancel');
            },

            ...mapActions('client', ['updateClient', 'getClients', 'editClient']),
            
            async validate(){
                
                await this.updateClient(this.client);
                // this.editButton = true;                        
                this.cancel();
                //console.log(this.client)
                
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