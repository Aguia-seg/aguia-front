import { defineComponent } from "vue";
import { cashOutline, closeOutline, createOutline} from "ionicons/icons"
import { mapActions, mapState } from "vuex";

export default defineComponent({
    name: 'ClientsProfilePage',
    computed: {
        ...mapState('client', ['client']),
    },
    setup(){
        return{
            cashOutline,
            closeOutline,
            createOutline,
        }
    }
})