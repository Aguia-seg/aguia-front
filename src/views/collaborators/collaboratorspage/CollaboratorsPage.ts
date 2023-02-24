import { defineComponent } from "vue";
import { searchOutline, closeOutline, createOutline, searchCircleOutline } from 'ionicons/icons'
import { modalController } from "@ionic/vue";
import CreateCollabsForm from "@/components/forms/collaborators/CreateCollabsForm.vue"
import { mapActions, mapState } from "vuex";

export default defineComponent({
    name: 'CollaboratorsShow',
    data() {
        return{
            spinner: true,
        }
    },
    computed: {
        ...mapState('user', ['users'])
    },
    async ionViewWillEnter() {
        this.spinner = true;
         await this.getUsers();
         this.spinner = false;
    },
    methods: {
        async formCollabs() {
            const modal = await modalController.create({
                component: CreateCollabsForm,
            });
            modal.present();
        },
        ...mapActions('user', ['getUsers'])
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