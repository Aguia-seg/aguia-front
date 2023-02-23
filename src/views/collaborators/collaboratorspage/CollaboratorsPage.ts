import { defineComponent } from "vue";
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue"
import NavbarComponent from "@/components/navbar/NavbarComponent.vue"
import { searchOutline, closeOutline, createOutline, searchCircleOutline } from 'ionicons/icons'
import { modalController } from "@ionic/vue";
import CreateCollabsForm from "@/components/forms/collaborators/CreateCollabsForm.vue"

export default defineComponent({
    name: 'CollaboratorsShow',
    components: {
        SidebarComponent,
        NavbarComponent,
    },
    methods:{
        async formCollabs(){
            const modal = await modalController.create({
                component: CreateCollabsForm,
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