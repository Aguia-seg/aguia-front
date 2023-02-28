import ClientService from "@/providers/ClientService";

const state = {
    clients: '',
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

    async registerClient(context: any, form: any) {
        await ClientService.registerClient(form).then(
            (response) => {
                console.log(response.data.message)
                alert(response.data.message);
                context.dispatch('getClients');
            }
        )
    },



}

const getters = {
    clientById(state: any) {
        return state.clients.find((client: any) => client.id === 1)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}