import request from "@/environments/env";

export default{
    async getDistricts() {
        return request.get('/houses/district');      
    },
}