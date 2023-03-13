import PainelService from "@/providers/PainelService";

const state = {
    painel:{
        client_active: 0,
        client_today: 0,
        invoices_month: 0,
    },
}

const mutations = {
    painel(state: any, dados: any) {
        state.painel.client_active = dados.client_active;
        state.painel.client_today = dados.client_today;
        state.painel.invoices_month = (dados.invoice_month.total_invoices) == null ? 0 : dados.invoice_month.total_invoices;
    }

}
const actions = {

    async getClientsActive(context: any) {
        await PainelService.getClientsActive().then(
            (response) => {
                context.commit('painel', response.data);
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