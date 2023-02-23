import { defineComponent } from "vue";
import NavbarComponent from "@/components/navbar/NavbarComponent.vue"
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue"

export default defineComponent({
    name: 'ClientsRegister',
    components:{
        NavbarComponent,
        SidebarComponent,
    }
})