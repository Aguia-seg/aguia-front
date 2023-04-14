import { defineComponent } from "vue";
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue"
import NavbarComponent from "@/components/navbar/NavbarComponent.vue"
import { searchOutline, closeOutline, createOutline, searchCircleOutline } from 'ionicons/icons'
import { modalController } from "@ionic/vue";
import CreateHouseForm from '@/components/forms/houses/CreateHouseForm.vue'
import AddHouseForm from '@/views/houses/houses-forms/AddHouseForm.vue'
import ChangeBadgetForm from '@/views/houses/houses-forms/ChangeBadgetForm.vue'
import { mapState, mapMutations, mapActions } from "vuex"

export default defineComponent({
    name: 'HousesShow',
    data(){
        return{
            spinner: true,
            spinner2: true,
            housesModel: ''
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
        const housesToArray = Object.values(this.houses);
      
        //console.log(housesToArray);
        console.log(this.houses)
        
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
        async addHouses(){
            const modal = await modalController.create({
                component: AddHouseForm,
              });
              modal.present();
        },
        async changeBadget(){
            const modal = await modalController.create({
                component: ChangeBadgetForm,
              });
              modal.present();
        },

        updateFiltered(){
            console.log("Atualizou!!")
        },

        ...mapMutations('house', ['disableClearFilter', 'enableClearFilter', 'cleanFilter']),
        ...mapActions('house', ['getHouses', 'getHousesFiltered', 'getHouse'])

        
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