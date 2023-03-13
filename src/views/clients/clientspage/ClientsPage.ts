import { defineComponent } from "vue";
import { searchOutline, createOutline } from 'ionicons/icons'
import { modalController } from "@ionic/vue";
import CreateClientForm from '@/views/clients/clients-forms/clients-create/CreateClientForm.vue';
import CreateClientEditForm from '@/views/clients/clients-forms/clients-create/CreateClientEditForm.vue'
import { mapActions, mapState } from "vuex";

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
        ...mapState('client', ['clients'])
    },
    async ionViewWillEnter() {

        this.spinner = true;
        await this.getClients();
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
        ...mapActions('client', ['getClients', 'searchClient'])
    },
    setup() {
        return {
            searchOutline,
            createOutline,

        }
    },
})