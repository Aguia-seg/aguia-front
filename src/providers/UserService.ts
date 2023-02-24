import request from "@/environments/env";

export default {  

    async getUsers() {
        return request.get('/users');      
    },

   
}