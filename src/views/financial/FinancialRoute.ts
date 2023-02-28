import { RouteRecordRaw } from "vue-router";

const FinancialRoute: Array<RouteRecordRaw> = [
    {
        path: '/cashflow',
        name: 'CashFlow',
        component: () => import('@/views/financial/cashflowpage/CashFlowPage.vue')
    },
    {
        path: '/plans',
        name: 'Plans',
        component: () => import('@/views/financial/planspage/PlansPage.vue')
    }
]

export default FinancialRoute