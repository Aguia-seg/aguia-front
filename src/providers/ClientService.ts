import request from "@/environments/env";

export default {  

    async getClients() {
        return request.get('/clients');      
    },

   
}