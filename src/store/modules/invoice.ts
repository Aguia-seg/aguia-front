import InvoiceService from '@/providers/InvoiceService'

const state = {
    invoice: ''
}

const mutations = {
    invoice(state: any, dados: any){
        state.invoice = dados;
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
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
}