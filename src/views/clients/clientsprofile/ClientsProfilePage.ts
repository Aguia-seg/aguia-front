import { defineComponent } from "vue";
import { cashOutline, closeOutline, createOutline, refreshOutline, pencilOutline } from "ionicons/icons"
import { mapActions, mapState, mapMutations } from "vuex";
import CreateClientEditForm from '@/views/clients/clients-forms/clients-create/CreateClientEditForm.vue';
import ClientPaymentModal from '@/views/clients/cliets-modals/ClientPaymentModal.vue';
import { modalController } from "@ionic/vue";


export default defineComponent({
    name: 'ClientsProfilePage',
    data() {
        return{
            spinner: true
        }
    },
    computed: {
        ...mapState('client', ['client']),
        ...mapState('contract', ['contract']),
    },
     async ionViewWillEnter() {
        this.spinner = true;
        await this.getClient(this.$route.params.id)
         this.formatClient();
         this.getCLientHouses();
        this.spinner = false;
        console.log(this.client.houses)
    },
    ionViewDidLeave() {
        this.limpar()
    },
    methods: {
        ...mapActions('client', ['getClient']),
        ...mapMutations('client', ['limpar', 'formatClient']),
        
        async formEditClient() {
            
            const modal = await modalController.create({
                component: CreateClientEditForm,
            });
            modal.present();
           
        },
        
        async modalPayment() {
            const modal = await modalController.create({
                component: ClientPaymentModal,
                cssClass: 'payment-modal',
                
            });
        
            modal.present();
        },

        async getCLientHouses(){
            console.log(this.client.house)
        },
       async getClientId(id: any){
             this.client.id = id 
             await this.getClient(id)    
            // console.log(this.client)
        },
        
       
    },
    setup() {
        return {
            cashOutline,
            closeOutline,
            createOutline,
            refreshOutline,
            pencilOutline,
        }
    }
})