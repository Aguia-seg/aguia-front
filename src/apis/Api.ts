import axios from 'axios'

const Api = axios.create({
    baseURL: 'http://localhost:8000/api'
});

const apiCorreios = axios.create({
    baseURL: "https://viacep.com.br"
  }) 
  
  axios.defaults.withCredentials = false;
  
  export default apiCorreios;