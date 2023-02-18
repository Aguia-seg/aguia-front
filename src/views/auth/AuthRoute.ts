import { RouteRecordRaw } from 'vue-router';

const AuthRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/auth/login/LoginPage.vue')
  }
]

export default AuthRoute