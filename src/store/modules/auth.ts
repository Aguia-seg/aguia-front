import AuthService from '@/providers/AuthService'
import router from '@/router';
import { mapActions } from 'vuex';

const state = {
    auth: {
        login: '',
        password: ''
    },
}

const mutations = {
    limpar(state: any) {
        state.login = "";
        state.password = "";
    },
}
const actions = {
    // async register(context: any, user: any) {
    //     await AuthService.registerUser(user).then(
    //         (response)=>{
    //             alert(response.data.message);
    //         }
    //     );
    // }
}

// const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    // getters,
}