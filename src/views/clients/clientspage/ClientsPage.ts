import { defineComponent } from "vue";
import { searchOutline, closeOutline, createOutline, searchCircleOutline } from 'ionicons/icons'
import { modalController } from "@ionic/vue";
import CreateClientForm from '@/components/forms/clients/CreateClientForm.vue';
import { mapActions, mapState } from "vuex";

export default defineComponent({
    name: 'ClientsShow',
    data() {
        return {
            spinner: true,
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
        ...mapActions('client', ['getClients'])
    },
    setup() {
        return {
            searchOutline,
            closeOutline,
            createOutline,
            searchCircleOutline,
        }
    },
})