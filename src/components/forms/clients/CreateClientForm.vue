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
            <ion-select interface="popover" placeholder="Tipo de cliente" required v-model="client.type">
              <ion-select-option value="PF">Pessoa física</ion-select-option>
              <ion-select-option value="PJ">Pessoa jurídica</ion-select-option>
            </ion-select>
          </ion-item>
        </div>
        <div class="col-6">
          <ion-item>
            <ion-select interface="popover" placeholder="Situação" v-model="client.active">
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
            <ion-input placeholder="CPF/CNPJ" v-model="client.cpf_cnpj"></ion-input>
          </ion-item>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ion-item>
            <ion-label position="floating">E-mail</ion-label>
            <ion-input type="email" placeholder="E-mail" v-model="client.email"></ion-input>
          </ion-item>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ion-item>
            <ion-label position="floating">Telefone</ion-label>
            <ion-input type="number" placeholder="Telefone" v-model="client.phone"></ion-input>
          </ion-item>
        </div>
      </div>
      <div class="row row-tiny mt-4">
        <div class="col-12">
          <p class="m-0 pl-2">informações de residência</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ion-item>
            <ion-select interface="popover" placeholder="Cidade" v-model="client.city">
              <ion-select-option selected value="petrolina">Petrolina</ion-select-option>

            </ion-select>
          </ion-item>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ion-item>
            <ion-label position="floating">Bairro</ion-label>
            <ion-input placeholder="Bairro" v-model="client.district"></ion-input>
          </ion-item>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ion-item>
            <ion-label position="floating">Rua</ion-label>
            <ion-input placeholder="Rua" v-model="client.street"></ion-input>
          </ion-item>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ion-item>
            <ion-label position="floating">Complemento</ion-label>
            <ion-input placeholder="Complemento" v-model="client.complement"></ion-input>
          </ion-item>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ion-item>
            <ion-label position="floating">Número</ion-label>
            <ion-input placeholder="Número" v-model="client.number"></ion-input>
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
import { mapActions } from 'vuex'


export default defineComponent({
  name: 'CreateClientForm',
  data() {
    return {
      client: {
        name: '',
        password: 'null',
        email: '',
        phone: '',
        city: 'petrolina',
        district: '',
        street: '',
        complement: '',
        number: '',
        veicle: '',
        type: 'PF',
        cpf_cnpj: '',
        active: '1'
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

    ...mapActions('client', ['registerClient']),
    async registerUser() {
      await this.registerClient(this.client);
      await this.cancel();
    },

    validate() {
      const inputs: any = this.client
      console.log(inputs)
      const clientsform = Object.keys(this.client)
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
        this.registerClient(this.client)
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