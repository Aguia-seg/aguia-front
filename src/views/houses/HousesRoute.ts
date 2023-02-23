import { RouteRecordRaw } from 'vue-router';

const HousesRoute: Array<RouteRecordRaw> = [
  {
    path: '/houses',
    name: 'HousesShow',
    component: () => import('@/views/houses/housespage/HousesPage.vue')
  }
]

export default HousesRoute