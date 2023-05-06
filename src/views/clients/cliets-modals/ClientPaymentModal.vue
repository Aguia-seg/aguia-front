<template>
  <ion-header>    
    <ion-toolbar>
      <ion-buttons slot="end">
        <ion-button color="medium" @click="cancel">Sair</ion-button>
      </ion-buttons>
      <ion-title>Pagamentos</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <div class="row mt-3 ml-4">
        <div class="col-12">
            <div>
                <p><b>Descrição do serviço</b></p>
                <h2>Serviço de xxxxxx</h2>
            </div> 
        </div>
    </div>
    <div class="row mt-3 ml-4 align-items-center">
        <div class="col-6">
            <div>
                <p style="margin: 0px;"><b>Valor total a receber</b></p>
                <h1 style="font-size: 72px;">R$ 800</h1>
            </div>
        </div>
        <div class="col-6">
            <div>
                <p style="margin: 0px;"><b>Data de vencimento</b></p>
                <h1>dd/mm/yyyy</h1>
            </div>
        </div>
    </div>
    <div class="row mt-3 ml-4">
        <div class="col-6">
            <div>
                <p><b>Desconto</b></p>
                <h1>0%</h1>
            </div>
        </div>
        <div class="col-6">
            <div>
                <p><b>Metodo de pagamento</b></p>
                <ion-item style="width: 50%;">
                    <ion-select interface="popover" value="0">
                        <ion-select-option value="0" disabled>..........................</ion-select-option>
                        <ion-select-option value="1">Pix</ion-select-option>
                        <ion-select-option value="1">Cartão de crédito</ion-select-option>
                        <ion-select-option value="1">Dinheiro</ion-select-option>
                    </ion-select>
                </ion-item>
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col-12">
          <ion-button expand="block" color="success">
            Receber
          </ion-button>
        </div>
    </div>
  </ion-content>

</template>

<script lang="ts">
import {
  modalController,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';

export default defineComponent({
    name: 'ClientPaymentModal',
    // data() {
    //     return{

    //     }
    // },
    computed: {
        ...mapState('client', ['client']),
        
    },
    
    methods: {
        cancel(){
            return modalController.dismiss(null, 'cancel');
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