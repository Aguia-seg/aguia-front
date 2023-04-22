<template>
<ion-header>
        <ion-toolbar>
            <ion-buttons slot="end">
                <ion-button color="medium" @click="cancel">Sair</ion-button>
            </ion-buttons>
            <ion-title>Alterar situação</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <div class="container d-flex justify-content-center align-items-center" style="height: 100%;">
            <form @submit.prevent="validate();">
                <div class="row">
                <div class="col-12">
                    <ion-item>
                    <ion-select v-model="badgeIdModel" placeholder="Situação">
                    <ion-select-option selected value="5">Tem morador mas não houve contato</ion-select-option>
                    <ion-select-option value="2">Ficou para retornar</ion-select-option>
                    <ion-select-option value="3">Não teve interesse</ion-select-option>
                    <ion-select-option value="4">Em contrato</ion-select-option>
                    <ion-select-option value="6">Desabitado</ion-select-option>
                </ion-select>
                    </ion-item>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                <ion-button :disabled="editDisabled" type="submit" expand="block" color="secondary">
                    Editar
                </ion-button>
                </div>
            </div>
            </form>
        </div>
        
    </ion-content>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { loadingController, modalController } from '@ionic/core';
import { mapState, mapActions } from "vuex";

export default defineComponent({
    name: 'ChangeBadgetForm',
    data(){
        return{
            editDisabled: false,
            badgeIdModel: ''
            
        }
    },
    computed: {
        ...mapState('house', ['houses', 'house'])
    },
    methods: {
        cancel() {
                return modalController.dismiss(null, 'cancel');
            },

        validate(){
            this.house[0].badget_id = this.badgeIdModel;
            this.updateBadget(this.house[0]);
            this.cancel();
            console.log(this.house[0].badget_id);
            console.log(this.badgeIdModel);
        },    
        ...mapActions('house', ['getHouse', 'updateBadget'])    
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