import { defineComponent } from "vue";
import { searchOutline, cashOutline } from 'ionicons/icons'


export default defineComponent({
    name: 'MonthlyPaymentPage',
    setup(){
        return{
            searchOutline,
            cashOutline,
        }
    }
})