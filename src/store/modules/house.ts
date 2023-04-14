import HouseService from "@/providers/HouseService"
import { alertController, loadingController } from "@ionic/vue";

const state = {
    displayClearFilter: false,
    districts: '',
    houses:'',
    house: '',
    housesFiltered: '',
    streets: '',
}

const mutations = {
    districts(state: any, dados: any){
        state.districts = dados;
    },
    streets(state: any, dados: any){
        state.streets = dados;
    },
    houses(state: any, dados: any){
        state.houses = dados;
    },
    house(state: any, dados: any){
        state.house = dados;
    },
    housesFiltered(state: any, dados: any){
        state.housesFiltered = dados;
    },
    cleanFilter(state: any){
        state.housesFiltered = null;
    },
    enableClearFilter(state: any){
        state.displayClearFilter = true;
    },
    disableClearFilter(state: any){
        state.displayClearFilter = false;
    }
}

const actions  = {
    async getDistricts(context: any) {
        await HouseService.getDistricts().then(
            (response) => {
                //console.log(response.data)
                context.commit('districts', response.data);

            }
        );
    },
    async getHouses(context: any) {
        await HouseService.getHouses().then(
            (response) => {
                console.log(response.data)
                context.commit('houses', response.data);

            }
        );
    },

    async getHouse(context: any, id: any) {
        await HouseService.getHouse(id).then(
            (response) => {
                console.log(response.data);
                context.commit('house', response.data);
            }
        )
    },

    async updateBadget(context: any, data: any){
        const loading = await loadingController.create({
            message: 'Atualizando Situação',
        });
        loading.present();
        await HouseService.updadeBadget(data).then(
            async (response) => {
                console.log(response.data)
                await loading.dismiss();
                const alert = await alertController.create({
                    message: response.data.message,
                    buttons: ['OK'],
                }); 
                await alert.present();
                context.dispatch('getHouses');
            }
        )
    },

    async registerHouse(context: any, form: any){
        const loading = await loadingController.create({
            message: 'Cadastrando residência',
        });
        loading.present();
        await HouseService.registerHouse(form).then(
           async (response) => {
                await loading.dismiss()
                console.log(response.data);
                const alert = await alertController.create({
                    message: response.data.message,
                    buttons: ['OK'],
                }); 
                await alert.present();
                context.dispatch('getHouses');
            }
        )
    },

    async getStreetsByDistrict(context: any, district: any){
        await HouseService.getStreetsByDistrict(district).then(
            (response) => {
                //console.log(response.data);
                context.commit('streets', response.data);
            }
        )
    },


    async getHousesFiltered(context: any, data: any){
        const loading = await loadingController.create({
            message: 'Carregando dados',
        });
        loading.present();
        await HouseService.getHousesFiltered(data).then(
            (response) => {
                console.log(response.data);
                context.commit('housesFiltered', response.data);
                loading.dismiss();
            }
        )
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
}