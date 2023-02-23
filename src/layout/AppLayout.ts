import { defineComponent } from 'vue'
import SidebarComponent from '@/components/sidebar/SidebarComponent.vue'
import NavbarComponent from '@/components/navbar/NavbarComponent.vue'
export default defineComponent({
    name: 'AppLayout',
    components:{
        SidebarComponent,
        NavbarComponent
    }
    
});