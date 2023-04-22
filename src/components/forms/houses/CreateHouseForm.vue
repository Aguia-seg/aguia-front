<template>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="end">
          <ion-button color="medium" @click="cancel">Sair</ion-button>
        </ion-buttons>
        <ion-title>Buscar residência</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" >
      <ion-spinner color="success"></ion-spinner>
      <form @submit.prevent="filter(), cancel()">
        <div class="row supress">
        <div class="col-6">
            <ion-item class="main-item">
                <ion-select interface="popover" v-model="city" @ionChange="onChangeCity()" placeholder="Cidade">
                    <ion-select-option selected value="Petrolina">Petrolina</ion-select-option>
                    <ion-select-option value="Juazeiro">Juazeiro</ion-select-option>
                </ion-select>
            </ion-item>  
        </div>    
    </div>

    <div class="row ">
        <div class="col-12">
            <ion-item class="main-item">
                <ion-select placeholder="Bairro" v-model="districtSelected" @ionChange="onChangeDistrict(), defineStreets()">
                    <ion-select-option v-for="districtModel in districtsModel" :key="districtModel" :value="districtModel">{{ districtModel }}</ion-select-option>
                </ion-select>
            </ion-item>  
        </div>    
    </div> 
    
    <div class="row ">
        <div class="col-12">
            <ion-item class="main-item" v-if="!inputStreetDisabled">
                <ion-select placeholder="Rua" @ionChange="onChangeStreet()" v-model="streetSelected" >
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
    
   
  
    export default defineComponent({
      name: 'CreateClientForm',
      data(){
        return{
          
          districtSelected: '',
          streetSelected: '',
          inputStreetDisabled: true,
          // spinner: true,
          city: '',
          houseModel: {
            city: '',
            district: '',
            street: '',
          },
          districtsModel: [''],
          streetsModel: [''],
        }
      },
      computed:{
        ...mapState('house', ['displayClearFilter', 'districts', 'streets', 'housesFiltered'])
      },
      methods: {
        onChangeDistrict(){
          console.log(this.districtSelected)
          this.houseModel.district = this.districtSelected;
          console.log(this.houseModel.district)
        },

        onChangeStreet(){
          this.houseModel.street = this.streetSelected;
          console.log(this.houseModel.street);
        },

        async onChangeCity(){
          this.houseModel.city = this.city;
          console.log(this.houseModel.city);

          await this.getDistricts(this.city);
         
         //Transformando os Districts em um array e pegando o valor deles
          const arrayDistrictsObjects: any = Object.values(this.districts);
          const objectDistricts: any = arrayDistrictsObjects.reduce((objectDistricts: any, currentObj: any) => {
            objectDistricts[currentObj.district] = currentObj.district
            return objectDistricts
          }, {})
          const arrayDistricts: any = Object.values(objectDistricts)
          this.districtsModel = arrayDistricts;
  
          // console.log(this.houseModel.district)
          // console.log(this.$router.currentRoute.value.path)  
        },
        
        filter(){
          this.getHousesFiltered(this.houseModel);
          console.log(this.houseModel)
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
          this.inputStreetDisabled = false;

          console.log(arrayStreets);
        },

       

        ...mapMutations('house', ['enableClearFilter', 'disableClearFilter']),
        ...mapActions('house', ['getDistricts', 'getStreetsByDistrict', 'getHousesFiltered'])

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

<!-- dasgdk da k -->