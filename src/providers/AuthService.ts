import request from "@/environments/env";

export default {  

    async registerUser(user: any) {
        return request.post('/register', user);
    },

   
}