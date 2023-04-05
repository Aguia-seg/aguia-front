import HouseService from "@/providers/HouseService"
import { loadingController } from "@ionic/vue";

const state = {
    displayClearFilter: false,
    districts: '',
    houses:'',
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
                //console.log(response.data)
                context.commit('houses', response.data);

            }
        );
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