import request from "@/environments/env";

export default{
    async getInvoice(id: any){
        return request.get('/invoice/'+ id);
    },

    async getInvoices(){
        return request.get('/invoice');
    },

    async payInvoice(id: any){
        return request.get('/invoice/pay/' + id);
    }
}