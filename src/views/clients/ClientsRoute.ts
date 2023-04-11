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
  },
  {
    path: '/clients/contract/:id',
    name: 'ContractComponentTest',
    component: () => import('@/views/clients/contract/ContractComponentTest.vue')
  },
  {
    path: '/clients/bin/show',
    name: 'ClientsBinPage',
    component: () => import('@/views/clients/clientsbin/ClientsBinPage.vue')
  },
]

export default ClientsRoute