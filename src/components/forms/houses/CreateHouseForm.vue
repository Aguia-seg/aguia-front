<template>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="end">
          <ion-button color="medium" @click="cancel">Sair</ion-button>
        </ion-buttons>
        <ion-title>Cadastro de residências</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <div class="row supress">
        <div class="col-6">
            <ion-item class="main-item">
                <ion-select interface="popover" placeholder="Cidade">
                    <ion-select-option value="1">Petrolina</ion-select-option>
                    <ion-select-option value="2">Juazeiro</ion-select-option>
                </ion-select>
            </ion-item>  
        </div> 
        <div class="col-6">
            <ion-item class="main-item">
                <ion-select interface="popover" placeholder="Tipo">
                    <ion-select-option value="1">Apartamento</ion-select-option>
                    <ion-select-option value="2">Casa</ion-select-option>
                </ion-select>
            </ion-item>  
        </div>
    </div>
<div class="row supress">
    <div class="col-12">
        <ion-item class="main-item">
            <ion-label  position="floating">CEP</ion-label>
            <ion-input type="number" placeholder="CEP"></ion-input>
        </ion-item>
    </div>
</div>
<div class="row">
    <div class="col-12 d-flex flex-column">
        <ion-item class="main-item mb-0">
            <ion-label position="floating" id="selected-street">Ruas</ion-label>
            <ion-input placeholder="Ruas" autocomplete="off" v-model="search" @input="filterStreets()" @focus="modal = true"></ion-input> 
        </ion-item>
        <div class="top-down-container" v-if="filteredStreets">
            <ion-list lines="none" class="m-0 p-0" v-for="filteredStreet in filteredStreets" :key="filteredStreet" @click="setStreet(filteredStreet)">
                <ion-item>
                    <ion-label>{{ filteredStreet }}</ion-label>
                </ion-item>
            </ion-list>
                
            
        </div>
    </div>
</div>    
    <div class="row supress">
        <div class="col-12">
        <ion-item class="main-item">
            <ion-label position="floating">Bairro</ion-label>
            <ion-input placeholder="Bairro"></ion-input>
        </ion-item>
    </div>
    </div>
<div class="row supress">
    <div class="col-12">
        <ion-item class="main-item">
            <ion-label position="floating">Número</ion-label>
            <ion-input type="number" placeholder="Número"></ion-input>
        </ion-item>
    </div>
</div> 

    </ion-content>
  </template>
  
  <script lang="ts">
    import {
      modalController,
    } from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { caretBack } from 'ionicons/icons'
   
  
    export default defineComponent({
      name: 'CreateClientForm',
      data(){
        return{
          search: '',
          modal: false,
          streets: [
            'Alagoas', 'Bermuda', 'Caixa', 'Destro'
          ],
          filteredStreets: [] as string[]
          
        }
      },
      methods: {
        cancel() {
          return modalController.dismiss(null, 'cancel');
        },
        confirm() {
          return modalController.dismiss(null, 'confirm');
        },
        
        filterStreets(){
          this.filteredStreets = this.streets.filter(streets => {
            return streets.toLowerCase().startsWith(this.search.toLowerCase())
          })
        },

        setStreet(search: any){
          this.search = search
          console.log(search)
        },

        debugFilter(){
          console.log(this.filteredStreets)
        },
        
      },
      setup(){
        return{
          caretBack,
          
        }
      }
    });
  </script>

<style scoped>
ion-item.main-item{
    --border-width: 1px;
    --border-radius: 20px;
    --highlight-color-focused: #ffc409;
    --color-focused: #000000;
    --detail-font-color: #ffc409;
    --highlight-height: 8px;
    margin-bottom: 20px;
    margin-top: 20px;   
    }

.top-down-container{
  align-self: center;
  border: 0.5px solid rgb(202, 202, 202);
  border-top: 0px;
  width: 95%;
  
}  


    
input{
  border-width: 0.5px;
  border-color: rgb(223, 223, 223);
  border-radius: 20px;
  margin-bottom: 20px;
  margin-top: 20px; 
}
ion-item.check{
 
  --border-width: 1px;
  --border-radius: 20px;
  --highlight-color-focused: #ffc409;
  --color-focused: #000000;
  --detail-font-color: #ffc409;
  --highlight-height: 8px;
  margin-bottom: 20px;
  width: 90%;
  margin-top: 20px;   
    
}    

    .row.supress{
  height: 80px;
}
</style>