import { defineComponent } from "vue";
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue"
import NavbarComponent from "@/components/navbar/NavbarComponent.vue"
import { searchOutline, closeOutline, createOutline, searchCircleOutline } from 'ionicons/icons'
import { modalController } from "@ionic/vue";
import CreateClientForm from '@/components/forms/clients/CreateClientForm.vue'

export default defineComponent({
    name: 'ClientsShow',
    components: {
        SidebarComponent,
        NavbarComponent,
    },
    methods:{
        async formClient(){
            const modal = await modalController.create({
                component: CreateClientForm,
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