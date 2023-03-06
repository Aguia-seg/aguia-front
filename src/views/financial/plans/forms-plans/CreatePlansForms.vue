<template>
    <ion-header>
    <ion-toolbar>
      <ion-buttons slot="end">
        <ion-button color="medium" @click="cancel">Sair</ion-button>
      </ion-buttons>
      <ion-title>Cadastro de Planos</ion-title>
    </ion-toolbar>
  </ion-header>
    <ion-content class="ion-padding">
        <form @submit.prevent="validate()">
            <div class="row">
                <div class="col-12">
                <ion-item>
                    <ion-label position="floating">Descrição</ion-label>
                    <ion-input placeholder="Descrição" v-model="plans.description" required></ion-input>
                </ion-item>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                <ion-item>
                    <ion-label position="floating">Valor</ion-label>
                    <ion-input placeholder="Valor" v-model="plans.value" required></ion-input>
                </ion-item>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <ion-item>
                        <ion-select interface="popover" placeholder="Status" v-model="plans.status">
                        <ion-select-option value="1">Ativo</ion-select-option>
                        <ion-select-option value="0">Inativo</ion-select-option>
                        </ion-select>
                    </ion-item>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                <ion-button type="submit" expand="block" color="success">
                    Cadastrar
                </ion-button>
                </div>
            </div>
        </form>
    </ion-content>
</template>

<script lang="ts">
import {
  modalController,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex'

export default defineComponent({
    name: 'CreatePlansForm',
    data(){
        return{
            plans: {
                description: '',
                value: '',
                status: '',
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

    ...mapActions('plan', ['registerPlans']),

    async registerFields(){
        await this.registerPlans(this.plans)
        this.cancel()
    },
    
    validate() {
      const inputs: any = this.plans
      console.log(inputs)
      const clientsform = Object.keys(this.plans)
      let cont = 0
      clientsform.forEach((res) => {
        if (inputs[res] == '') {
          cont++;
        }
      })
      if (cont !== 0) {
        alert('Preencha todos os campos')
      }
      else {
        console.log('caiu aqui')
        this.registerFields()
      }
    },
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
</style>