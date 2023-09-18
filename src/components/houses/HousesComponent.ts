import { defineComponent } from "vue";
import { addOutline, cashOutline } from "ionicons/icons"
import { modalController } from "@ionic/vue";
import CreateContractForm from "@/views/financial/contract/contracts-form/CreateContractForm.vue"
import { mapState } from "vuex";

export default defineComponent({
    name: 'HousesComponent',
    props: {
        houses: null,
        profile: null
    },
     mounted() {
        console.log(this.houses)
    },
    methods:{
        async modalService(houseId: any) {
            const modal = await modalController.create({
                component: CreateContractForm,
                componentProps:{
                    profile: this.profile,
                    house: houseId
                }
               
            });
        
            modal.present();
        },
    },
    setup() {
        return {
            addOutline,
            cashOutline
        }
    }

})