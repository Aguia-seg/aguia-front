import request from "@/environments/env";

export default {  

    async getClients() {
        return request.get('/clients');      
    },

    async registerClient(form: any){
        return request.post('/clients', form);
    }

   
}