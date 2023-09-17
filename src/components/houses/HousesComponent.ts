import { defineComponent } from "vue";
import { addOutline } from "ionicons/icons"

export default defineComponent({
    name: 'HousesComponent',
    props: {
        houses: null
    },
    mounted() {
        console.log(this.houses)
    },
    setup() {
        return {
            addOutline,
        }
    }

})