import { defineComponent } from "vue";
import { cashOutline, closeOutline, createOutline, refreshOutline } from "ionicons/icons"
import { mapActions, mapState, mapMutations } from "vuex";

export default defineComponent({
    name: 'ClientsProfilePage',
    computed: {
        ...mapState('client', ['client']),
        ...mapState('contract', ['contract'])
    },
     async ionViewWillEnter() {
         await this.getClient(this.$route.params.id)
        this.formatClient();
    },
    ionViewDidLeave() {
        this.limpar()
    },
    methods: {
        ...mapActions('client', ['getClient']),
        ...mapMutations('client', ['limpar', 'formatClient']),
       
    },
    setup() {
        return {
            cashOutline,
            closeOutline,
            createOutline,
            refreshOutline,
        }
    }
})