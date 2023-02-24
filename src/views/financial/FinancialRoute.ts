import { RouteRecordRaw } from "vue-router";

const FinancialRoute: Array<RouteRecordRaw> = [
    {
        path: '/cashflow',
        name: 'CashFlow',
        component: () => import('@/views/financial/cashflowpage/CashFlowPage.vue')
    }
]

export default FinancialRoute