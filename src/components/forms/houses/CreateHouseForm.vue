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
      <ion-spinner color="success" v-if="spinner"></ion-spinner>
      <form v-if="!spinner">
        <div class="row supress">
        <div class="col-6">
            <ion-item class="main-item">
                <ion-select interface="popover" v-model="city" placeholder="Cidade">
                    <ion-select-option selected value="1">Petrolina</ion-select-option>
                    <ion-select-option value="2">Juazeiro</ion-select-option>
                </ion-select>
            </ion-item>  
        </div>    
    </div>

    <div class="row ">
        <div class="col-12">
            <ion-item class="main-item">
                <ion-select placeholder="Bairro" v-model="districtSelected" @ionChange="debugDistricts(), defineStreets()">
                    <ion-select-option v-for="districtModel in districtsModel" :key="districtModel" :value="districtModel">{{ districtModel }}</ion-select-option>
                </ion-select>
            </ion-item>  
        </div>    
    </div> 

    <!--PODE SER UTIL NO FUTURO-->

    <!-- <div class="row">
          <div class="col-12 d-flex flex-column">
            <ion-item class="main-item mb-0">
                <ion-label position="floating">Bairro</ion-label>
                <ion-input placeholder="Bairro" autocomplete="off" v-model="search_2" @input="filterDistrics();" @keyup="onPressKey2()" @change="changeDisabledStreet(search_2)"></ion-input>
            </ion-item>
            <div class="top-down-container" v-if="filteredDistricts && modal_2">
                <ion-list lines="none" class="m-0 p-0" v-for="filteredDistrict in filteredDistricts" :key="filteredDistrict" @click="setDistrict(filteredDistrict)">
                    <ion-item>
                        <ion-label>{{ filteredDistrict }}</ion-label>
                    </ion-item>
                </ion-list>      
            </div>
         </div>
        </div>  -->
    
    <div class="row ">
        <div class="col-12">
            <ion-item class="main-item">
                <ion-select placeholder="Rua" >
                    <ion-select-option v-for="streetModel in streetsModel" :key="streetModel" :value="streetModel">{{ streetModel }}</ion-select-option>
                </ion-select>
            </ion-item>  
        </div>    
    </div> 
        
        <div class="row mt-5">
        <div class="col-12">
          <ion-button type="submit" expand="block" color="primary" @click=" enableClearFilter()">
            Pesquisar
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
    import { caretBack } from 'ionicons/icons'
    import { mapMutations, mapState, mapActions } from 'vuex'
    import { getElement } from 'ionicons/dist/types/stencil-public-runtime';
   
  
    export default defineComponent({
      name: 'CreateClientForm',
      data(){
        return{
          districtSelected: '',
          inputStreetDisabled: true,
          spinner: true,
          city: '1',
          search: '',
          search_2: '',
          modal: false,
          modal_2: false,
          districtsModel: [''],
          streetsModel: [''],
          filteredStreets: [] as string[],
          filteredDistricts: [] as string[],
          
        }
      },
      computed:{
        ...mapState('house', ['displayClearFilter', 'districts', 'streets'])
      },
      async mounted() {
          this.spinner = true;
          await this.getDistricts();
          this.spinner = false;
         //Transformando os Districts em um array e pegando o valor deles
          const arrayDistrictsObjects: any = Object.values(this.districts);
          const objectDistricts: any = arrayDistrictsObjects.reduce((objectDistricts: any, currentObj: any) => {
            objectDistricts[currentObj.district] = currentObj.district
            return objectDistricts
          }, {})
          const arrayDistricts: any = Object.values(objectDistricts)
          //Transformando as Streets em um array e pegando o valor delas


          this.districtsModel = arrayDistricts;
          
          // console.log(arrayDistricts);
          // console.log(objectDistricts);
          
      },
      methods: {
        debugDistricts(){
          console.log(this.districtSelected)
        },

        debugClearFilter(){
          console.log(this.displayClearFilter)
        },
        
        cancel() {
          return modalController.dismiss(null, 'cancel');
        },
        confirm() {
          return modalController.dismiss(null, 'confirm');
        },

        // PODE SER ÚTIL NO FUTURO
        
        // filterStreets(){
        //   this.filteredStreets = this.streetsModel.filter(streets => {
        //     return streets.toLowerCase().startsWith(this.search.toLowerCase())
        //   })
        // },

        // filterDistrics(){
        //   this.filteredDistricts = this.districtsModel.filter(districts => {
        //     return districts.toLowerCase().startsWith(this.search_2.toLowerCase())
        //   })
        // },

        // setStreet(search: any){
        //   this.search = search;
        //   this.modal = false;
        //   console.log(search);
        // },

        async defineStreets(){
          await this.getStreetsByDistrict(this.districtSelected);

          //transformando o array de objetos Street em um array dos valores dos Streets

          const arrayStreetsObject: any = Object.values(this.streets);
          const objectStreets: any = arrayStreetsObject.reduce((objectStreets: any, currentObj: any) =>{
            objectStreets[currentObj.street] = currentObj.street
            return objectStreets
          }, {});
          const arrayStreets: any = Object.values(objectStreets);
          this.streetsModel = arrayStreets;
          console.log(arrayStreets);
        },

        setDistrict(search_2: any){
          this.search_2 = search_2;
          this.modal_2 = false;
          this.defineStreets();
          this.inputStreetDisabled = false;
          
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

        changeDisabledStreet(event: any){

          for(let i = 0; i < this.districtsModel.length; i++){
            if(event == this.districtsModel[i]){
            this.inputStreetDisabled = false;
           // console.log('Ta pegando');
            }
          }
         
        },

        onPressKey(e: any){

          this.changeModal()
        },

        onPressKey2(e: any){

          this.changeModal2()
          if(this.search_2 != this.districtsModel as unknown as string){
            this.inputStreetDisabled = true;
          }
      
        },

        ...mapMutations('house', ['enableClearFilter', 'disableClearFilter']),
        ...mapActions('house', ['getDistricts', 'getStreetsByDistrict'])

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

ion-spinner {
    transform: scale(6);
    margin: 0 auto !important;
    top: 200px;
    width: 100%;
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