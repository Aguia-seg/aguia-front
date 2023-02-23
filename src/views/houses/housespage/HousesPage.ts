import { defineComponent } from "vue";
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue"
import NavbarComponent from "@/components/navbar/NavbarComponent.vue"
import { searchOutline, closeOutline, createOutline, searchCircleOutline } from 'ionicons/icons'
import { modalController } from "@ionic/vue";
import CreateHouseForm from '@/components/forms/houses/CreateHouseForm.vue'

export default defineComponent({
    name: 'HousesShow',
    components: {
        SidebarComponent,
        NavbarComponent,
    },
    methods:{
        async formHouses(){
            const modal = await modalController.create({
                component: CreateHouseForm,
              });
              modal.present();
        }
    },
    setup() {
        return{
            searchOutline,
            closeOutline,
            createOutline,
            searchCircleOutline,
        }
    },
})