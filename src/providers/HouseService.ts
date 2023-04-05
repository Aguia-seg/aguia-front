import request from "@/environments/env";

export default{
    async getDistricts() {
        return request.get('/houses/district');      
    },
    async getHouses() {
        return request.get('/houses');      
    },

    async getStreetsByDistrict(district: any){
        return request.get('/houses/street/'+ district);
    },

    async getHousesFiltered(data: any){
        return request.post('/houses/filtered', data)
    }
}