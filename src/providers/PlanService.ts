import request from "@/environments/env";

export default {  

    async getPlans() {
        return request.get('/plans');      
    },

    // async registerClient(form: any){
    //     return request.post('/clients', form);
    // }

   
}