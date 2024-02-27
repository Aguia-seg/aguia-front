import UserService from "@/providers/UserService";
import AuthService from '@/providers/AuthService';
import { alertController, loadingController } from '@ionic/vue';

const state = {
    users: ''
}

const mutations = {
    users(state: any, dados: any) {
        state.users = dados;
    }

}
const actions = {

    async getUsers(context: any) {
        await UserService.getUsers().then(
            (response) => {
                context.commit('users', response.data);
            }
        );
    },

    async register(context: any, user: any) {
        const loading = await loadingController.create({
            message: 'Cadastrando colaborador'
        });
        loading.present();
        await AuthService.registerUser(user).then(
            async (response)=>{
                await loading.dismiss();
                const alert = await alertController.create({
                    message: response.data.message,
                    buttons: ['OK']
                });
                alert.present();
                context.dispatch('getUsers');
            },
            async (error) => {
                console.log(error.response.data);
                let message = "";
                for (const chave in error.response.data) {
                    message += `${ error.response.data[chave]}, <br>`;
                }
                console.log(message)
                await loading.dismiss();
                const alert = await alertController.create({
                    message: message,
                    buttons: ['OK'],
                });
                await alert.present();
                // return 'erro'
            }
        );
    }
}

// const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    // getters,
}