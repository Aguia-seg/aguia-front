import { defineComponent } from "vue";
import { cashOutline, closeOutline, createOutline} from "ionicons/icons"

export default defineComponent({
    name: 'ClientsProfilePage',
    setup(){
        return{
            cashOutline,
            closeOutline,
            createOutline,
        }
    }
})