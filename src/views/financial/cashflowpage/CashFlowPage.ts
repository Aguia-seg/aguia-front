import { defineComponent } from 'vue'
import SidebarComponent from '@/components/sidebar/SidebarComponent.vue'
import NavbarComponent from '@/components/navbar/NavbarComponent.vue'
export default defineComponent({
    name: 'CashFlowPage',
    data(){
        return{
            datas: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
        }
    },
    components:{
        SidebarComponent,
        NavbarComponent
    }
    
});