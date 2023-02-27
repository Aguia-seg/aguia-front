<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Cadastro de Clientes</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
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
          <ion-select interface="popover" placeholder="Situação">
            <ion-select-option value="1">Ativo</ion-select-option>
            <ion-select-option value="2">Inativo</ion-select-option>
          </ion-select>
        </ion-item>
      </div>
    </div>
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
        <p class="m-0 pl-2">INFORMAÇÕES DE RESIDÊNCIA</p>
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
          <ion-label position="floating">CEP</ion-label>
          <ion-input placeholder="CEP" v-model="client.cep"></ion-input>
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
          <ion-textarea v-model="client.veicle" placeholder="Cliente possui veículo?" ></ion-textarea>
        </ion-item>
      </div>
    </div>
  </ion-content>
  <ion-footer>
    <ion-button @click=" searchCep()" expand="block" color="success">
      Cadastrar
    </ion-button>
  </ion-footer>  
</template>
  
<script lang="ts">
import {
  modalController,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { mapActions } from 'vuex'
import  apiCorreios from '@/apis/Api'


export default defineComponent({
  name: 'CreateClientForm',
  data(){
    return{
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
        type: '',
        cpf_cnpj:'',
        active: '1',
        cep: '',
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

    validate(){
      const inputs: any = this.client
      console.log(inputs)
      const clientsform = Object.keys(this.client)
      let cont = 0
      clientsform.forEach((res) => {
        if(inputs[res] == ''){
          cont++;
        }
      })
        if(cont !== 0){
          alert('Preencha todos os campos')
        }
        else{
          this.registerClient(this.client)
        }
    },

    searchCep(){
      apiCorreios.get('https://viacep.com.br/ws/' + this.client.cep + '/json/').then(
        (response) => {
          console.log(response)
          this.client.district = response.data.
        }
      )
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
  margin-bottom: 20px;
  margin-top: 20px;
}
.row{
  height: 80px;
}

.row.row-tiny{
  height: 20px;
}
</style>