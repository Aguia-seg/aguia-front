import { RouteRecordRaw } from 'vue-router';

const ClientsRoute: Array<RouteRecordRaw> = [
  {
    path: '/clients/profile/:id',
    name: 'ClientProfile',
    component: () => import('@/views/clients/clientsprofile/ClientsProfilePage.vue')
  },
  {
    path: '/clients',
    name: 'ClientShow',
    component: () => import('@/views/clients/clientspage/ClientsPage.vue')
  }
]

export default ClientsRoute