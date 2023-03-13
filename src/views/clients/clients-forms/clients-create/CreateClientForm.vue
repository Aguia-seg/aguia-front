<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="end">
        <ion-button color="medium" @click="cancel">Sair</ion-button>
      </ion-buttons>
      <ion-title>Cadastro de Clientes</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <form @submit.prevent="validate();">
      <div class="row">
        <div class="col-6">
          <ion-item>
            <ion-select interface="popover" placeholder="Tipo de cliente" v-model="client.type" required>
              <ion-select-option value="PF">Pessoa física</ion-select-option>
              <ion-select-option value="PJ">Pessoa jurídica</ion-select-option>
            </ion-select>
          </ion-item>
        </div>
        <div class="col-6">
          <ion-item>
            <ion-select interface="popover" placeholder="Situação" v-model="client.active" required>
              <ion-select-option value="1">Ativo</ion-select-option>
              <ion-select-option value="0">Inativo</ion-select-option>
            </ion-select>
          </ion-item>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ion-item>
            <ion-label position="floating">Nome</ion-label>
            <ion-input placeholder="Nome" v-model="client.name" required></ion-input>
          </ion-item>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ion-item>
            <ion-label position="floating">CPF/CNPJ</ion-label>
            <ion-input placeholder="CPF/CNPJ" v-model="client.cpf_cnpj" maxlength="14" required ></ion-input>
          </ion-item>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <ion-item>
            <ion-label position="floating">E-mail</ion-label>
            <ion-input type="email" placeholder="E-mail" v-model="client.email" required></ion-input>
          </ion-item>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ion-item>
            <ion-label position="floating">Telefone</ion-label>
            <ion-input type="number" placeholder="Telefone" v-model="client.phone" required></ion-input>
          </ion-item>
        </div>
      </div>
      <div class="row row-tiny mt-4">
        <div class="col-12">
          <p class="m-0 pl-2"><b>INFORMAÇÕES DE RESIDÊNCIA</b></p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ion-item>
            <ion-label position="floating">CEP</ion-label>
            <ion-input @keyup="searchCep()" placeholder="CEP" v-model="client.cep" maxlength="8" required></ion-input>
          </ion-item>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ion-item>
            <ion-label position="floating">Bairro</ion-label>
            <ion-input placeholder="Bairro" v-model="client.district" required></ion-input>
          </ion-item>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ion-item>
            <ion-label position="floating">Rua</ion-label>
            <ion-input placeholder="Rua" v-model="client.street" required></ion-input>
          </ion-item>
        </div>
      </div>


      <div class="row">
        <div class="col-12">
          <ion-item>
            <ion-label position="floating">Complemento</ion-label>
            <ion-input placeholder="Complemento" v-model="client.complement" required></ion-input>
          </ion-item>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ion-item>
            <ion-label position="floating">Número</ion-label>
            <ion-input placeholder="Número" v-model="client.number" required></ion-input>
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
            <ion-textarea v-model="client.veicle" placeholder="Cliente possui veículo?"></ion-textarea>
          </ion-item>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ion-item>
            <select class="form-control" required style="border: none;" v-model="client.plano" >
              <option value="">Escolha o plano do Cliente</option>
              <option :value="plan" v-for="plan in plans" :key="plan.id">{{ plan.description }} | R$ {{ plan.value }}</option>
            </select>
          </ion-item>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ion-item>
            <ion-select interface="action-sheet" placeholder="Data de pagamento" v-model="client.payday" required>
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
  </ion-content>
</template>
  
<script lang="ts">
import {
  modalController,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';
import apiCorreios from '@/apis/Api';
import { loadingController } from '@ionic/vue';

export default defineComponent({
  name: 'CreateClientForm',
  computed: {
    ...mapState('plan', ['plans'])
  },
  data() {
    return {
      client: {
        name: '',
        password: 'null',
        email: '',
        phone: '',
        cep: '',
        city: 'petrolina',
        district: '',
        street: '',
        complement: '',
        number: '',
        veicle: '',
        type: 'PF',
        cpf_cnpj: '',
        active: '1',
        plano: '',
        payday: '',
      },
      plano: ''
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
    ...mapActions('client', ['registerClient']),
    ...mapActions('plan', ['getPlans']),
    async registerUser() {
      await this.registerClient(this.client);
      this.cancel();
      console.log(this.client);
    },

    validate() {
      const inputs: any = this.client
      console.log(inputs)
      const clientsform = Object.keys(this.client)
      let cont = 0
      clientsform.forEach((res) => {
        if (inputs[res] == '') {
          if(this.client.veicle != ''){
            cont++;
          }
        }
      })
      if (cont !== 0) {
        alert('Preencha todos os campos')
      }
      else {
        this.registerUser()
        //console.log(inputs)
      }
    },
    async searchCep() {

      if (this.client.cep.length == 8) {
        const loading = await loadingController.create({
          message: 'Carregando endereço',
          //duration: 3000
        });
        loading.present();
        apiCorreios.get('https://viacep.com.br/ws/' + this.client.cep + '/json/').then(
          (response) => {
            //console.log(response.data)
            this.client.district = response.data.bairro
            this.client.street = response.data.logradouro
            loading.dismiss();
          }
        )
      }
    }
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
  margin-bottom: 10px;
  margin-top: 10px;
}

.row.row-tiny {
  height: 20px;
}
</style>