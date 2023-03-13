import { defineComponent } from "vue";
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue"
import NavbarComponent from "@/components/navbar/NavbarComponent.vue"
import { searchOutline, closeOutline, createOutline, searchCircleOutline } from 'ionicons/icons'
import { modalController } from "@ionic/vue";
import CreateHouseForm from '@/components/forms/houses/CreateHouseForm.vue'
import { mapState, mapMutations } from "vuex"

export default defineComponent({
    name: 'HousesShow',
    data(){
        return{

        }
    },
    computed: {
        ...mapState('house', ['displayClearFilter'])
    },
    created(){
        console.log(this.displayClearFilter)
    },
    components: {
        SidebarComponent,
        NavbarComponent,
    },
    methods:{
        async formHouses(){
            const modal = await modalController.create({
                component: CreateHouseForm,
              });
              modal.present();
        },

        ...mapMutations('house', ['disableClearFilter', 'enableClearFilter'])

        
    },
    setup() {
        return{
            searchOutline,
            closeOutline,
            createOutline,
            searchCircleOutline,
        }
    },
})