<template>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="end">
          <ion-button color="medium" @click="cancel">Sair</ion-button>
        </ion-buttons>
        <ion-title>Buscar residência</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" @click="closeModal()">
        <div class="row supress">
        <div class="col-6">
            <ion-item class="main-item">
                <ion-select interface="popover" placeholder="Cidade">
                    <ion-select-option value="1">Petrolina</ion-select-option>
                    <ion-select-option value="2">Juazeiro</ion-select-option>
                </ion-select>
            </ion-item>  
        </div>    
    </div>
    <div class="row">
        <div class="col-12 d-flex flex-column">
            <ion-item class="main-item mb-0">
                <ion-label position="floating">Ruas</ion-label>
                <ion-input placeholder="Ruas" autocomplete="off" v-model="search" @input="filterStreets();" @keyup="onPressKey()"></ion-input> 
            </ion-item>
            <div class="top-down-container" v-if="filteredStreets && modal">
                <ion-list lines="none" class="m-0 p-0" v-for="filteredStreet in filteredStreets" :key="filteredStreet" @click="setStreet(filteredStreet)">
                    <ion-item>
                        <ion-label>{{ filteredStreet }}</ion-label>
                    </ion-item>
                </ion-list>      
            </div>
        </div>
    </div>    
        <div class="row">
          <div class="col-12 d-flex flex-column">
            <ion-item class="main-item mb-0">
                <ion-label position="floating">Bairro</ion-label>
                <ion-input placeholder="Bairro" autocomplete="off" v-model="search_2" @input="filterDistrics();" @keyup="onPressKey2()"></ion-input>
            </ion-item>
            <div class="top-down-container" v-if="filteredDistricts && modal_2">
                <ion-list lines="none" class="m-0 p-0" v-for="filteredDistrict in filteredDistricts" :key="filteredDistrict" @click="setDistrict(filteredDistrict)">
                    <ion-item>
                        <ion-label>{{ filteredDistrict }}</ion-label>
                    </ion-item>
                </ion-list>      
            </div>
         </div>
        </div> 
        <div class="row mt-5">
        <div class="col-12">
          <ion-button type="submit" expand="block" color="primary" @click="debugClearFilter(), enableClearFilter()">
            Pesquisar
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
    import { caretBack } from 'ionicons/icons'
    import { mapMutations, mapState } from 'vuex'
   
  
    export default defineComponent({
      name: 'CreateClientForm',
      data(){
        return{
          search: '',
          search_2: '',
          modal: false,
          modal_2: false,
          districts: [
            'Alabama', 'Bangu', 'Camões', 'Demi Lovato'
          ],
          streets: [
            'Alagoas', 'Bermuda', 'Caixa', 'Destro'
          ],
          filteredStreets: [] as string[],
          filteredDistricts: [] as string[],
          
        }
      },
      computed:{
        ...mapState('house', ['displayClearFilter'])
      },
      methods: {
        debugClearFilter(){
          console.log(this.displayClearFilter)
        },
        
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

        filterDistrics(){
          this.filteredDistricts = this.districts.filter(districts => {
            return districts.toLowerCase().startsWith(this.search_2.toLowerCase())
          })
        },

        setStreet(search: any){
          this.search = search;
          this.modal = false;
          console.log(search);
        },
        setDistrict(search_2: any){
          this.search_2 = search_2;
          this.modal_2 = false;
          
        },

        debugFilter(){
          console.log(this.filteredStreets)
        },

        changeModal(){
          if(this.search != ''){
            this.modal = true
          }
          else{
            this.modal = false
          }          
        },

        changeModal2(){
          if(this.search_2 != ''){
            this.modal_2 = true
          }
          else{
            this.modal_2 = false
          }          
        },

        closeModal(){
          this.modal = false
          this.modal_2 = false
        },

        onPressKey(e: any){

          this.changeModal()
        },

        onPressKey2(e: any){

          this.changeModal2()
        },

        ...mapMutations('house', ['enableClearFilter', 'disableClearFilter'])

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