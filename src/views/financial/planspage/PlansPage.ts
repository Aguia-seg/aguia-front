import { defineComponent } from "vue";
import { modalController } from "@ionic/vue";
import CreatePlansForms from '@/views/financial/forms/CreatePlansForms.vue'
import { searchOutline, closeOutline, createOutline } from 'ionicons/icons'

import { mapActions, mapState } from "vuex";

export default defineComponent({
    name: 'PlansPage',
    data() {
        return{
            spinner: true,
        }
    },
    computed: {
        ...mapState('plan', ['plans'])
    },
    async ionViewWillEnter() {
        this.spinner = true;
         await this.getPlans();
         this.spinner = false;
    },
    methods: {
       
        async formPlans(){
            const modal = await modalController.create({
                component: CreatePlansForms,
              });
              modal.present();
        },
        ...mapActions('plan', ['getPlans'])
    },
    setup(){
        return{
            searchOutline,
            closeOutline,
            createOutline,
        }
    }
})