import { RouteRecordRaw } from 'vue-router';

const ClientsRoute: Array<RouteRecordRaw> = [
  {
    path: '/clients/register',
    name: 'ClientRegister',
    component: () => import('@/views/clients/clientsregisterpage/ClientsRegisterPage.vue')
  }
]

export default ClientsRoute