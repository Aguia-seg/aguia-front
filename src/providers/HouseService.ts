import request from "@/environments/env";

export default{
    async getDistricts() {
        return request.get('/houses/district');      
    },
    async getHouses() {
        return request.get('/houses');      
    },
}