import axios from 'axios'

const apiCorreios = axios.create({
    baseURL: "https://viacep.com.br"
})

axios.defaults.withCredentials = false;

export default apiCorreios;