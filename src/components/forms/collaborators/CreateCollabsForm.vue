<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="end">
        <ion-button color="medium" @click="cancel">Sair</ion-button>
      </ion-buttons>
      <ion-title>Cadastro de colaboradores</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <div class="row">
      <div class="col-6">
        <ion-item>
          <ion-select interface="popover" placeholder="Tipo" v-model="user.type" @change="validate()">
            <ion-select-option value="seller">Vendedor</ion-select-option>
            <ion-select-option value="collector">Cobrador</ion-select-option>
            <ion-select-option value="admin">Admin</ion-select-option>
          </ion-select>
        </ion-item>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <ion-item>
          <ion-label position="floating">Nome</ion-label>
          <ion-input placeholder="Nome" v-model="user.name"></ion-input>
        </ion-item>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <ion-item>
          <ion-label position="floating">E-mail</ion-label>
          <ion-input placeholder="E-mail" v-model="user.email"></ion-input>
        </ion-item>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <ion-item>
          <ion-label position="floating">CPF</ion-label>
          <ion-input placeholder="CPF" v-model="user.cpf"></ion-input>
        </ion-item>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <ion-item>
          <ion-label position="floating">Telefone</ion-label>
          <ion-input placeholder="Telefone" v-model="user.whatsapp"></ion-input>
        </ion-item>
      </div>
    </div>

  </ion-content>
  <ion-footer>
    <ion-button @click="validate()" expand="block" color="success">
      Cadastrar
    </ion-button>
  </ion-footer>
</template>
  
<script lang="ts">
import {
  modalController,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';


export default defineComponent({
  name: 'CreateCollabsForm',
  data() {
    return {
      user: {
        name: '',
        email: '',
        cpf: '',
        type: '',
        whatsapp: '',
        password: 'null'
      },
    }
  },
  methods: {
    ...mapActions('user', ['register']),
    async registerUser() {
      await this.register(this.user);
      await this.cancel();
    },
    cancel() {
      return modalController.dismiss(null, 'cancel');
    },
    async validate() {
      const inputs: any = this.user
      const userform = Object.keys(this.user);
      let cont = 0;
      userform.forEach((res) => {
        if (inputs[res] == '') {
          cont++;
        }
      });
      if (cont!== 0) {
        alert('Preencha todos os campos')
      }else{
        this.registerUser();
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
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>