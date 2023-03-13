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
        // formatAction(){
            
        //     if(this.client.active == 1){
        //         this.format.active = 'Sim' 
        //     }
        //     else if(this.client.active == 0){
        //         this.format.active = 'Não'
        //     }
        //     // console.log(this.format.active)
        //     console.log(this.client.active)
        // },
        // formatType(){
        //     if(this.client.type == 'PF'){
        //         this.format.type = 'Pessoa Física'
        //     }
        //     else if(this.client.type == 'PJ'){
        //         this.format.type = 'Pessoa Jurídica'
        //     }
        //     // console.log(this.format.type)
        //     console.log(this.client.type)
        // }
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