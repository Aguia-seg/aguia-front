import ClientService from "@/providers/ClientService";

const state = {
    clients: ''
}

const mutations = {
    clients(state: any, dados: any) {
        state.clients = dados;
    }

}
const actions = {

    async getClients(context: any) {
        await ClientService.getClients().then(
            (response) => {
                context.commit('clients', response.data);
            }
        );
    },

}

// const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    // getters,
}