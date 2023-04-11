import { defineComponent } from "vue";
import { searchOutline, createOutline, closeOutline } from 'ionicons/icons'
import { loadingController, modalController, onIonViewWillEnter } from "@ionic/vue";
import CreateClientForm from '@/views/clients/clients-forms/clients-create/CreateClientForm.vue';
import CreateClientEditForm from '@/views/clients/clients-forms/clients-create/CreateClientEditForm.vue'
import { mapActions, mapState } from "vuex";
import client from "@/store/modules/client";
import { State } from "ionicons/dist/types/stencil-public-runtime";

export default defineComponent({
    name: 'ClientsBinPage',
    data(){
        return{
            spinner: true,
            form:{
                search: ''
            }
        }
    },
    computed: {
        ...mapState('client', ['clients'])
    },
    async ionViewWillEnter(){
        this.spinner = true;
        await this.onlyTrashed();
        this.spinner = false;
    },
    methods: {
        ...mapActions('client', ['onlyTrashed', 'searchClient', 'forceDestroyClient']),

        goBack(){
            this.$router.go(-1);
        },

        async doForceDelete(id: any){
            this.clients.id = id
            const loading = await loadingController.create({
                message: 'Excluindo registro',
              });
            loading.present()  
            await this.forceDestroyClient(id); 
            await this.$router.go(0);
            loading.dismiss()
        }
    },
    setup() {
        return {
            searchOutline,
            createOutline,
            closeOutline

        }
    },
})

