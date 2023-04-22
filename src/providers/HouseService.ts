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
        return request.post('/houses/filtered', data);
    },

    async registerHouse(form: any){
        return request.post('/houses', form);
    },

    async updadeBadget(badget: any){
        return request.put('/houses/update/badget/' + badget.id, badget)
        // .catch(function (error) {
        //     if(error.response){
        //         console.log(error.response.data);
        //         console.log(badget);
        //     }
        // });
       
    },

    async getHouse(id: any){
        return request.get('/houses/' + id);
    }
}