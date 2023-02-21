import { defineComponent } from 'vue'
export default defineComponent({
    name: 'LoginPage',
    methods:{
        async login(){
            this.$router.push('/painel')
        }
    }
    
});