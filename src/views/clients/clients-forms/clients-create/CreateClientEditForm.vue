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
                    <ion-input placeholder="Nome" v-model="editedClient.name"></ion-input>
                </ion-item>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <ion-item>
                    <ion-label position="floating">CPF/CNPJ</ion-label>
                    <ion-input placeholder="CPF/CNPJ" v-model="editedClient.cpf_cnpj"></ion-input>
                </ion-item>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <ion-item>
                    <ion-label position="floating">Telefone</ion-label>
                    <ion-input placeholder="Telefone" v-model="editedClient.phone"></ion-input>
                </ion-item>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <ion-item>
                    <ion-label position="floating">Email</ion-label>
                    <ion-input placeholder="Email" v-model="editedClient.email"></ion-input>
                </ion-item>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <ion-item>
                    <ion-label position="floating">Veículo(s)</ion-label>
                    <ion-input placeholder="Veículo(s)" v-model="editedClient.veicle"></ion-input>
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
    import { mapState, mapActions } from "vuex";

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
        mounted() {
            this.changeEditedClient()
            
        },
        computed: {
        ...mapState('client', ['client'])
         },
        methods: {
            cancel() {
                return modalController.dismiss(null, 'cancel');
            },
            confirm() {
                return modalController.dismiss(null, 'confirm');
            },
            changeEditedClient(){
                this.editedClient.name = this.client.name
                console.log(this.editedClient.name)
            },

            ...mapActions('client', ['updateClient']),
            validate(){
                this.updateClient(this.client.id, this.editedClient)
                console.log(this.client.id)
                console.log(this.editedClient)
                console.log(this.updateClient(this.client.id, this.editedClient))
            }
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