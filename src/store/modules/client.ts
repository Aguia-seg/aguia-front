import ClientService from "@/providers/ClientService";
import { alertController, loadingController } from '@ionic/vue';

const state = {
    clients: '',
    client: ''
}

const mutations = {
    clients(state: any, dados: any) {
        state.clients = dados;
    },
    client(state: any, dados: any) {
        state.client = dados;
    },
    limpar(state: any) {
        state.client = '';
    },
    cleanClients(state: any) {
        state.clients = '';
    },
    formatClient(state: any) {

        if (state.client.active == 1) {
            state.client.active = 'Sim'
        }
        else if (state.client.active == 0) {
            state.client.active = 'Não'
        }

        if (state.client.type == 'PF') {
            state.client.type = 'Pessoa Física'
        }
        else if (state.client.type == 'PJ') {
            state.client.type = 'Pessoa Jurídica'
        }
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
    async getClient(context: any, id: any) {
        await ClientService.getClient(id).then(
            (response) => {
                context.commit('client', response.data);
            }
        ).catch(e => {
            console.log(e)
        })
    },

    async registerClient(context: any, form: any) {
        const loading = await loadingController.create({
            message: 'Cadastrando Cliente',
        });
        loading.present();
        await ClientService.registerClient(form).then(
            async (response) => {
                await loading.dismiss()
                console.log(response.data.message);
                const alert = await alertController.create({
                    message: response.data.message,
                    buttons: ['OK'],
                }); 
                await alert.present();
                context.dispatch('getClients');
            },
            async (error) => {
                console.log(error.response.data);
                await loading.dismiss();
                const alert = await alertController.create({
                    message: 'Erro no cadastro',
                    buttons: ['OK'],
                }); 
                await alert.present();
                // return 'erro'
            }
        )
    },
    async searchClient(context: any, search: any) {
        await ClientService.searchClient(search).then(
            (response) => {
                console.log(response.data);
                context.commit('clients', response.data);
            }
        )
    },

    async editClient(context: any, id: any) {
        await ClientService.editClient(id).then(
            (response) => {
                console.log(response.data.message);
                context.commit('client', response.data)
            }
        )
    },

    async updateClient(context: any, data: any) {
        const loading = await loadingController.create({
            message: 'Atualizando dados',
        });
        loading.present();

        await ClientService.updateClient(data).then(
            async (response) => {
                await loading.dismiss()
                const alert = await alertController.create({
                    message: response.data.message,
                    buttons: ['OK'],
                }); 
                await alert.present()
                context.dispatch('getClients', response.data)

            }
        )
    }

}

// const getters = {
//     clientById(state: any) {
//         return state.clients.find((client: any) => client.id === 1)
//     }
// }

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    // getters
}