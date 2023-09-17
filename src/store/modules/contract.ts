import ContractService from '@/providers/ContractService';
import { alertController, loadingController } from '@ionic/vue';

const state = {

}

const mutations = {

}
const actions = {

    async registerContract(context: any, form: any) {
        const loading = await loadingController.create({
            message: 'Lançando Plano',
        });
        loading.present();
        await ContractService.registerContract(form).then(
            async (response) => {
                await loading.dismiss()
                console.log(response.data);
                const alert = await alertController.create({
                    message: response.data.message,
                    buttons: ['OK'],
                });
                await alert.present();
            }
        )
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