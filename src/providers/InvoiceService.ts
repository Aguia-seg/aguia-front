import request from "@/environments/env";

export default{
    async getInvoice(id: any){
        return request.get('/invoice/'+ id);
    }
}