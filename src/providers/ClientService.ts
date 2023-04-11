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
    async destroyClient(id: any){
        return request.delete('clients/'+ id);
    },

    async updateClient(data: any){
         return request.put('/clients/' + data.id, data );
    },

    async trashedOnly(){
        return request.get('/clients/bin/show');
    },

    async forceDestroyClient(id: any){
        return request.delete('/clients/delete/' + id);
    },

    async restoreClient(id: any){
        return request.get('/clients/restore' + id);
    }
   
}