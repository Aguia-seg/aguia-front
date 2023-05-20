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
                <h4>Serviço de {{ client.contracts[0].plan.description }}</h4>
            </div> 
        </div>
    </div>
    <div class="row mt-3 ml-4 align-items-center">
        <div class="col-6">
            <div>
                <p style="margin: 0px;"><b>Valor total a receber</b></p>
                <h1 style="font-size: 56px;">R$ {{ invoice[0].value }}</h1>
            </div>
        </div>
        <div class="col-6">
            <div>
                <p style="margin: 0px;"><b>Data de vencimento</b></p>
                <h1>{{ invoice[0].expiration }}</h1>
            </div>
        </div>
    </div>
    <div class="row mt-3 ml-4">
        <div class="col-6">
            <div>
                <p><b>Desconto</b></p>
                <h1>{{ invoice[0].off }}%</h1>
            </div>
        </div>
        <div class="col-6">
            <div>
                <p><b>Metodo de pagamento</b></p>
                <!-- <ion-item style="width: 50%;">
                    <ion-select interface="popover" value="0">
                        <ion-select-option value="0" disabled>..........................</ion-select-option>
                        <ion-select-option value="1">Pix</ion-select-option>
                        <ion-select-option value="1">Cartão de crédito</ion-select-option>
                        <ion-select-option value="1">Dinheiro</ion-select-option>
                    </ion-select>
                </ion-item> -->
                <div class="d-flex">
                <ion-button class="payment" @click="activate('avista')" :color="(inCashActive) ? 'warning' : 'medium'"><ion-icon :icon="cashOutline"></ion-icon></ion-button>
                <ion-button class="payment" @click="activate('cartao')" :color="(creditActive) ? 'warning' : 'medium'"><ion-icon :icon="cardOutline"></ion-icon></ion-button>
                <ion-button class="payment" @click="activate('pix')" :color="(pixActive) ? 'warning' : 'medium'"><ion-icon :icon="logoUsd"></ion-icon></ion-button>
            </div>
            </div>
            
        </div>
    </div>
    <div class="row mt-5">
        <div class="col-12">
          <ion-button @click="cancel(), payInvoice(invoice[0].id), getInvoices()" expand="block" color="success">
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
import { cardOutline ,cashOutline, logoUsd } from 'ionicons/icons'

export default defineComponent({
    name: 'ClientPaymentModal',
    data() {
        return{
            
            creditActive: false,
            inCashActive: true,
            pixActive: false,
            paymentMethod: ''
        }
    },
    computed: {
        ...mapState('client', ['client']),
        ...mapState('invoice', ['invoice']),
    },
    
    methods: {
        cancel(){
            return modalController.dismiss(null, 'cancel');
        },

        activate(metodo: any){
            if(metodo == 'avista'){
                this.inCashActive = true;
                this.creditActive = false;
                this.pixActive = false;
                this.paymentMethod = 'A vista';
            }
            if(metodo == 'cartao'){
                this.inCashActive = false;
                this.creditActive = true;
                this.pixActive = false;
                this.paymentMethod = 'Crédito';
            }
            if(metodo == 'pix'){
                this.inCashActive = false;
                this.creditActive = false;
                this.pixActive = true;
                this.paymentMethod = 'Pix';
            }
        },
        ...mapActions('invoice', ['getInvoice', 'getInvoices', 'payInvoice']),   
        ...mapActions('client', ['getClients']),   
    },

    setup() {
        return {
            cashOutline,
            cardOutline,
            logoUsd,
        }
    },
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

ion-icon{
    height: 50px;
    width: 50px;
}
ion-button.payment{
    height: 60px;
    width: 60px;
}
</style>