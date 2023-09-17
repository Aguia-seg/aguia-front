import request from "@/environments/env";

export default {  

    async registerContract(form: any){
        return request.post('/contract', form);
    },
 
}