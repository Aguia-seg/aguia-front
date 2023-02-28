import request from "@/environments/env";

export default {  

    async getClients() {
        return request.get('/clients');      
    },
    async getClient(id:any) {
        return request.get('/clients/'+id);      
    },

    async registerClient(form: any){
        return request.post('/clients', form);
    }

   
}