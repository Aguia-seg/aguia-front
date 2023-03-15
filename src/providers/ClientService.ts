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
    },
    async searchClient(search: any){
        return request.post('/clients/search', search);
    },

    async editClient(id: any){
        return request.get('/client/edit/'+ id);
    },

    async updateClient(data: any){
         return request.put('/clients/' + data.id, data );
    }
   
}