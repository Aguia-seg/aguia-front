import UserService from "@/providers/UserService";
import AuthService from '@/providers/AuthService'

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
        await AuthService.registerUser(user).then(
            (response)=>{
                alert(response.data.message);
                context.dispatch('getUsers');
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