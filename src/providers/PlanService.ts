import request from "@/environments/env";

export default {  

    async getPlans() {
        return request.get('/plans');      
    },

    async registerPlans(form: any){
         return request.post('/plans', form);
     }

   
}