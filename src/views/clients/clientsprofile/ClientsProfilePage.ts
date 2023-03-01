import { defineComponent } from "vue";
import { cashOutline, closeOutline, createOutline } from "ionicons/icons"
import { mapActions, mapState, mapMutations } from "vuex";

export default defineComponent({
    name: 'ClientsProfilePage',
    computed: {
        ...mapState('client', ['client'])
    },
    ionViewWillEnter() {
        this.getClient(this.$route.params.id)
        console.log(this.client);
    },
    // ionViewDidLeave() {
    //     this.limpar()
    // },
    methods: {
        ...mapActions('client', ['getClient']),
        ...mapMutations('client', ['limpar']),
    },
    setup() {
        return {
            cashOutline,
            closeOutline,
            createOutline,
        }
    }
})