import { defineComponent } from 'vue'
import { mapState, mapActions } from 'vuex';
export default defineComponent({
    name: 'PainelPage',
    computed: {
        ...mapState('painel', ['painel']),
    },
    ionViewWillEnter() {
        setInterval(() => {
            this.getClientsActive();
        }, 10000);
        this.getClientsActive();
    },
    methods: {
        ...mapActions('painel', ['getClientsActive'])
    }


});