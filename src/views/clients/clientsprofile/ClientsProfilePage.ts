import { defineComponent } from "vue";
import { cashOutline, closeOutline, createOutline,  pencilOutline, addOutline, refreshOutline } from "ionicons/icons"
import { mapActions, mapState, mapMutations } from "vuex";
import CreateClientEditForm from '@/views/clients/clients-forms/clients-create/CreateClientEditForm.vue';
import ClientPaymentModal from '@/views/clients/cliets-modals/ClientPaymentModal.vue';
import AddHouseForm from '@/views/houses/houses-forms/AddHouseForm.vue'
import HousesComponent from "@/components/houses/HousesComponent.vue";
import { modalController } from "@ionic/vue";


export default defineComponent({
    name: 'ClientsProfilePage',
    components:{
        HousesComponent
    },
    data() {
        return{
            spinner: true,
            
        }
    },
    computed: {
        ...mapState('client', ['client']),
        ...mapState('invoice', ['invoice']),
        ...mapState('contract', ['contract']),
    },
     async ionViewWillEnter() {
        this.spinner = true;
        await this.getClient(this.$route.params.id)
         this.formatClient();
        this.spinner = false;
        setInterval(() => {
            this.getClient(this.$route.params.id);
        }, 2000);     
    },
    ionViewDidLeave() {
        this.limpar()
    },

    methods: {
        ...mapActions('client', ['getClient']),
        ...mapActions('invoice', ['getInvoice']),
        ...mapMutations('client', ['limpar', 'formatClient']),
        ...mapMutations('invoice', ['invoice']),
        
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

        async modalImovel() {
            const modal = await modalController.create({
                component: AddHouseForm,
                componentProps:{
                    badge: 7,
                    client: this.client.id
                },
                cssClass: 'payment-modal',
                
            });
        
            modal.present();
        },

       async getClientId(id: any){
             this.client.id = id 
             await this.getClient(id)    
            // console.log(this.client)
        },

       async getinvoiceId(id: any){
             this.invoice.id = id 
             await this.getInvoice(id)    
            // console.log(this.client)
        },
        
       
    },
    setup() {
        return {
            cashOutline,
            closeOutline,
            createOutline,
            addOutline,
            refreshOutline,
            pencilOutline,
            HousesComponent
        }
    }
})