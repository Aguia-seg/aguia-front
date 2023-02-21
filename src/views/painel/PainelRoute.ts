import { RouteRecordRaw } from 'vue-router';

const PainelRoute: Array<RouteRecordRaw> = [
  {
    path: '/painel',
    name: 'Painel',
    component: () => import('@/views/painel/PainelPage.vue')
  }
]

export default PainelRoute