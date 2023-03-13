import request from "@/environments/env";

export default {  

    async getClientsActive() {
        return request.get('/painel/clients');      
    },

   

   
}