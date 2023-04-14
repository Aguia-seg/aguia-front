<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="end">
                <ion-button color="medium" @click="cancel">Sair</ion-button>
            </ion-buttons>
            <ion-title>Cadastro de residência</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <form @submit.prevent="validate()">
            <div class="row">
                <div class="col-12">
                    <ion-item>
                        <ion-label position="floating">CEP</ion-label>
                        <ion-input @keyup="searchEnd()" placeholder="CEP" v-model="houseModel.cep" maxlength="8"
                            required></ion-input>
                    </ion-item>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <ion-item>
                        <ion-label position="floating">Cidade</ion-label>
                        <ion-input placeholder="Bairro" v-model="houseModel.city" required></ion-input>
                    </ion-item>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <ion-item>
                        <ion-label position="floating">Bairro</ion-label>
                        <ion-input placeholder="Bairro" v-model="houseModel.district" required></ion-input>
                    </ion-item>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <ion-item>
                        <ion-label position="floating">Rua</ion-label>
                        <ion-input placeholder="Rua" v-model="houseModel.street" required></ion-input>
                    </ion-item>
                </div>
            </div>


            <div class="row">
                <div class="col-12">
                    <ion-item>
                        <ion-label position="floating">Complemento</ion-label>
                        <ion-input placeholder="Complemento" v-model="houseModel.type" required></ion-input>
                    </ion-item>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <ion-item>
                        <ion-label position="floating">Número</ion-label>
                        <ion-input placeholder="Número" v-model="houseModel.number" required></ion-input>
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
                        <ion-textarea v-model="houseModel.veicle" placeholder="Cliente possui veículo?"></ion-textarea>
                    </ion-item>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <ion-item>
                    <ion-select v-model="houseModel.situation" placeholder="Situação">
                    <ion-select-option selected value="5">Tem morador mas não houve contato</ion-select-option>
                    <ion-select-option value="2">Ficou para retornar</ion-select-option>
                    <ion-select-option value="3">Não teve interesse</ion-select-option>
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
import { loadingController, modalController } from '@ionic/core';
import { defineComponent } from 'vue'
import { mapActions, mapState } from 'vuex';
import apiCorreios from '@/apis/Api';

export default defineComponent({
    name: 'AddHouseForm',
    data() {
        return {
            houseModel: {
                cep: '',
                city: '',
                district: '',
                street: '',
                type: '',
                number: '',
                veicle: '',
                situation: '',


            }
        }
    },
    methods: {
        ...mapActions('house', ['registerHouse']),

        cancel() {
            return modalController.dismiss(null, 'cancel');
        },

        validate() {
            const inputs: any = this.houseModel
            console.log(inputs)
            const housesform = Object.keys(this.houseModel)
            let cont = 0
            housesform.forEach((res) => {
                if (inputs[res] == '') {
                    if (this.houseModel.veicle != '') {
                        cont++;
                    }
                }
            })
            if (cont !== 0) {
                alert('Preencha todos os campos')
            }
            else {
                this.registerHouse(this.houseModel)
                //console.log(inputs)
            }
        },

        async searchEnd() {
        
            if (this.houseModel.cep.length == 8) {
                
                const loading = await loadingController.create({
                    message: 'Carregando endereço',
                    //duration: 3000
                });
                loading.present();
                await apiCorreios.get('https://viacep.com.br/ws/' + this.houseModel.cep + '/json/').then(
                    (response) => {
                        console.log(response.data)
                        this.houseModel.district = response.data.bairro;
                        this.houseModel.street = response.data.logradouro;
                        this.houseModel.city = response.data.localidade;
                        loading.dismiss();
                    }
                )
            }
        }
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

.row.row-tiny {
    height: 20px;
}
</style>