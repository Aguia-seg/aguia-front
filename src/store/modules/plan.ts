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

    async registerPlans(context: any, form: any){
        await PlanService.registerPlans(form).then(
            (response) => {
                alert(response.data.message);
                context.dispatch('getPlans');
            }
        )
    }




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