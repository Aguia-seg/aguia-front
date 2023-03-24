import HouseService from "@/providers/HouseService"

const state = {
    displayClearFilter: false,
    districts: '',
}

const mutations = {
    districts(state: any, dados: any){
        state.districts = dados
    },
    enableClearFilter(state: any){
        state.displayClearFilter = true
    },
    disableClearFilter(state: any){
        state.displayClearFilter = false
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
}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
}