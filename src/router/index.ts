import AuthRoute from '@/views/auth/AuthRoute';
import PainelRoute from '@/views/painel/PainelRoute';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

export const routes = ([] as Array<RouteRecordRaw>).concat(
  AuthRoute,
  PainelRoute
  )

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && localStorage.getItem('token') == null) next({ name: 'Login' })
//   // if the user is not authenticated, `next` is called twice
//   else if (to.name == 'Login' && localStorage.getItem('token') !== null) next({ name: 'Home' })

//   else next()
// })

export default router
