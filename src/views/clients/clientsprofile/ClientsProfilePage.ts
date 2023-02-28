import { defineComponent } from "vue";
import { cashOutline, closeOutline, createOutline} from "ionicons/icons"
import { mapGetters } from "vuex";

export default defineComponent({
    name: 'ClientsProfilePage',
    data() {
        return{
            client: ''
        }
    },
    computed: {
        ...mapGetters('client',['clientById'])
    },
    mounted() {
      console.log(this.clientById);
    },
    setup(){
        return{
            cashOutline,
            closeOutline,
            createOutline,
        }
    }
})