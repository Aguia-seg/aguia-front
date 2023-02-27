import PlanService from "@/providers/PlanService";

const state = {
    plans: '',
}

const mutations = {
    plans(state: any, dados: any) {
        state.plans = dados;
    }

}
const actions = {

    async getPlans(context: any) {
        await PlanService.getPlans().then(
            (response) => {
                context.commit('plans', response.data);
            }
        );
    },




}

// const getters = {
  
// }

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    // getters
}