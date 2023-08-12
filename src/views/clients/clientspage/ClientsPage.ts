import { defineComponent } from "vue";
import { searchOutline, createOutline, closeOutline } from 'ionicons/icons'
import { loadingController, modalController } from "@ionic/vue";
import CreateClientForm from '@/views/clients/clients-forms/clients-create/CreateClientForm.vue';
import CreateClientEditForm from '@/views/clients/clients-forms/clients-create/CreateClientEditForm.vue'
import { mapActions, mapState } from "vuex";
import client from "@/store/modules/client";
import { State } from "ionicons/dist/types/stencil-public-runtime";

export default defineComponent({
    name: 'ClientsShow',
    data() {
        return {
            spinner: true,
            form:{
                search: ''
            }
        }
    },
    computed: {
        ...mapState('client', ['clients', 'client','trashedClients'])
    },
    async ionViewWillEnter() {

        this.spinner = true;
        await this.getClients();
        await this.onlyTrashed();
        this.spinner = false;
        setInterval(async () => {
            await this.getClients();
        }, 10000);
    },
    methods: {
        async formClient() {
            const modal = await modalController.create({
                component: CreateClientForm,
            });
            modal.present();
        },
        async formEditClient() {
            const modal = await modalController.create({
                component: CreateClientEditForm,
            });
            modal.present();
           
        },
       async getClientId(id: any){
             this.clients.id = id 
             await this.getClient(id)
        },

       async moveToBin(id: any){
        this.clients.id  = id;
        const loading = await loadingController.create({
            message: 'Movendo registro para lixeira',
          });
        loading.present()  
        await this.destroyClient(id); 
        //await this.$router.go(0);
        loading.dismiss()
       },
        ...mapActions('client', ['getClients', 'searchClient', 'getClient', 'destroyClient', 'onlyTrashed'])
    },
    setup() {
        return {
            searchOutline,
            createOutline,
            closeOutline

        }
    },
})