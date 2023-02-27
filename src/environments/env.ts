import axios from 'axios';

const request = axios.create({
     baseURL: 'http://localhost:8000/api', //colocar alguma env var, se quiser
   //  baseURL: 'https://mopservicos.xyz/api/',
 });

 const  headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + localStorage.getItem('token')
}

axios.defaults.withCredentials = false;

export default request 