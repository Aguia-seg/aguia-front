import AuthRoute from '@/views/auth/AuthRoute';
import PainelRoute from '@/views/painel/PainelRoute';
import ClientsRoute from '@/views/clients/ClientsRoute';
import HousesRoute from '@/views/houses/HousesRoute';
import CollabsRoute from '@/views/collaborators/CollaboratorsRoute';
import FinancialRoute from '@/views/financial/FinancialRoute';
import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

export const routes = ([] as Array<RouteRecordRaw>).concat(
  AuthRoute,
  PainelRoute,
  ClientsRoute,
  HousesRoute,
  CollabsRoute,
  FinancialRoute,
  )

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && localStorage.getItem('token') == null) next({ name: 'Login' })
//   // if the user is not authenticated, `next` is called twice
//   else if (to.name == 'Login' && localStorage.getItem('token') !== null) next({ name: 'Home' })

//   else next()
// })

export default router
