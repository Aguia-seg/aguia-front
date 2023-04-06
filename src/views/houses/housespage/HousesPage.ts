import { defineComponent } from "vue";
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue"
import NavbarComponent from "@/components/navbar/NavbarComponent.vue"
import { searchOutline, closeOutline, createOutline, searchCircleOutline } from 'ionicons/icons'
import { modalController } from "@ionic/vue";
import CreateHouseForm from '@/components/forms/houses/CreateHouseForm.vue'
import { mapState, mapMutations, mapActions } from "vuex"

export default defineComponent({
    name: 'HousesShow',
    data(){
        return{
            spinner: true,
            spinner2: true,
        }
    },
    computed: {
        ...mapState('house', ['displayClearFilter', 'houses', 'housesFiltered'])
    },
    created(){
        console.log(this.displayClearFilter)
    },
    async mounted() {
        this.spinner = true;
        this.spinner2 = true;
        await this.getHouses();
        this.spinner = false;
        console.log(this.houses);
        
    },
    ionViewDidEnter(){
        this.getHouses();
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

        updateFiltered(){
            console.log("Atualizou!!")
        },

        ...mapMutations('house', ['disableClearFilter', 'enableClearFilter', 'cleanFilter']),
        ...mapActions('house', ['getHouses'])

        
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