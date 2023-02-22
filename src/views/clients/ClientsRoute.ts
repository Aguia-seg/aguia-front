import { RouteRecordRaw } from 'vue-router';

const ClientsRoute: Array<RouteRecordRaw> = [
  {
    path: '/clients/register',
    name: 'ClientRegister',
    component: () => import('@/views/clients/clientsregisterpage/ClientsRegisterPage.vue')
  },
  {
    path: '/clients',
    name: 'ClientShow',
    component: () => import('@/views/clients/clientspage/ClientsPage.vue')
  }
]

export default ClientsRoute