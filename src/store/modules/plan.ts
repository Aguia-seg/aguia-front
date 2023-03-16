import PlanService from "@/providers/PlanService";
import { alertController, loadingController } from '@ionic/vue';

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
        const loading = await loadingController.create({
            message: 'Cadastrando Plano'
        });
        loading.present();
        await PlanService.registerPlans(form).then(
            async (response) => {
                await loading.dismiss();
                const alert = alertController.create({
                    message: response.data.message,
                    buttons: ['OK']
                });
                (await alert).present()
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