import InvoiceService from '@/providers/InvoiceService'
import { alertController, loadingController } from '@ionic/vue';

const state = {
    invoice: '',
    invoices: ''
}

const mutations = {
    invoice(state: any, dados: any){
        state.invoice = dados;
    },
    invoices(state: any, dados: any){
        state.invoices = dados;
    }
}

const actions = {
    async getInvoice(context: any, id: any){
        await InvoiceService.getInvoice(id).then(
            (response) => {
                console.log(response.data);
                context.commit('invoice', response.data);
            }
        )
    },
    async getInvoices(context: any){
        await InvoiceService.getInvoices().then(
            (response) => {
                console.log(response.data);
                context.commit('invoices', response.data);
            }
        )
    },

    async payInvoice(context: any, id: any){
        const loading = await loadingController.create({
            message: 'Pagando, por favor aguarde',
        });
        loading.present();
        await InvoiceService.payInvoice(id).then(
           async (response) => {
                await loading.dismiss();
                console.log(response.data);
                const alert = await alertController.create({
                    message: response.data.message,
                    buttons: ['OK'],
                }); 
                await alert.present();
                context.commit('invoice', response.data);
            }
        )
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
}