import { RouteRecordRaw } from 'vue-router';

const DashbordRoute: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/auth/login/LoginPage.vue')
    }
  ]

  export default DashbordRoute;