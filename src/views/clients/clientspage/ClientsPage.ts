import { defineComponent } from "vue";
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue"
import NavbarComponent from "@/components/navbar/NavbarComponent.vue"
import { searchOutline } from 'ionicons/icons'

export default defineComponent({
    name: 'ClientsShow',
    components: {
        SidebarComponent,
        NavbarComponent,
    },
    setup() {
        return{
            searchOutline,
        }
    },
})