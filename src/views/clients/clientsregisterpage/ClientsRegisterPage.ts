import { defineComponent } from "vue";
import NavbarComponent from "@/components/navbar/NavbarComponent.vue"
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue"
import FormComponent from "@/components/form/FormComponent.vue"

export default defineComponent({
    name: 'ClientsRegister',
    components:{
        NavbarComponent,
        SidebarComponent,
        FormComponent,
    }
})