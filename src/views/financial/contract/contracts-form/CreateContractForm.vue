<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="end">
        <ion-button color="medium" @click="cancel">Sair</ion-button>
      </ion-buttons>
      <ion-title>Cadastro de Imóvel e Serviço</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <div class="container">
      <form @submit.prevent="registerService();">
        <div class="row">
          <div class="col-12">
            <ion-item>
              <select class="form-control" required style="border: none;" v-model="service.plano">
                <option value="">Escolha o plano do Cliente</option>
                <option :value="plan" v-for="plan in plans" :key="plan.id">{{ plan.description }} | R$ {{ plan.value }}
                </option>
              </select>
            </ion-item>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <ion-item>
              <ion-select interface="action-sheet" placeholder="Data de pagamento" v-model="service.payday" required>
                <ion-select-option value="5"> 05</ion-select-option>
                <ion-select-option value="8"> 08</ion-select-option>
                <ion-select-option value="9"> 09</ion-select-option>
                <ion-select-option value="10"> 10</ion-select-option>
                <ion-select-option value="12"> 12</ion-select-option>
                <ion-select-option value="15"> 15</ion-select-option>
                <ion-select-option value="30"> 30</ion-select-option>
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
  name: 'CreateClientForm',
  props: {
    profile: null
  },
  computed: {
    ...mapState('plan', ['plans'])
  },
  data() {
    return {
      service: {
        plano: '',
        payday: '',
        client_id: this.profile
      },
      plano: '',
      disabledModel: {
        number: true,
        complement: true,
      }
    }
  },
  mounted() {
    this.getPlans();
  },
  methods: {
    cancel() {
      return modalController.dismiss(null, 'cancel');
    },
    confirm() {
      return modalController.dismiss(null, 'confirm');
    },
    ...mapActions('contract', ['registerContract']),
    ...mapActions('plan', ['getPlans']),
    async registerService() {
      await this.registerContract(this.service)
      this.cancel();
    },

  }
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
  margin-bottom: 10px;
  margin-top: 10px;
}

.cep-searcher {
  color: gray;
  cursor: pointer;
}

.cep-searcher:hover {
  color: rgb(39, 107, 255);
  text-decoration: underline;

}

.row.row-tiny {
  height: 20px;
}
</style>