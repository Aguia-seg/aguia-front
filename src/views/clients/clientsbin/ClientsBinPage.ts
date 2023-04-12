import { defineComponent } from "vue";
import { searchOutline ,refreshOutline, closeOutline } from 'ionicons/icons'
import { loadingController, onIonViewWillEnter } from "@ionic/vue";
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
        ...mapState('client', ['trashedClients'])
    },
    async ionViewWillEnter(){
        this.spinner = true;
        await this.onlyTrashed();
        this.spinner = false;
    },
    methods: {
        ...mapActions('client', ['onlyTrashed', 'searchClient', 'forceDestroyClient', 'restoreClient']),

        goBack(){
            this.$router.go(-1);
        },

        async doForceDelete(id: any){
            this.trashedClients.id = id;
            const loading = await loadingController.create({
                message: 'Excluindo registro',
              });
            loading.present(); 
            await this.forceDestroyClient(id); 
            //await this.$router.go(0);
            loading.dismiss();
        },

        async doRestoreClient(id: any){
            this.trashedClients.id = id;
            const loading = await loadingController.create({
                message: 'Restaurando registro',
            });
            loading.present();
            await this.restoreClient(id);
           // await this.$router.go(0);
            loading.dismiss();
        }
    },
    setup() {
        return {
            refreshOutline,
            closeOutline,
            searchOutline

        }
    },
})

