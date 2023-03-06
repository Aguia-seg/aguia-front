import { RouteRecordRaw } from "vue-router";

const FinancialRoute: Array<RouteRecordRaw> = [
    {
        path: '/cashflow',
        name: 'CashFlow',
        component: () => import('@/views/financial/cashflow/cashflowpage/CashFlowPage.vue')
    },
    {
        path: '/plans',
        name: 'Plans',
        component: () => import('@/views/financial/plans/planspage/PlansPage.vue')
    },
    {
        path: '/monthlypayment',
        name: 'MonthlyPayment',
        component: () => import('@/views/financial/monthlypayment/monthlypaymentPage/MonthlyPaymentPage.vue')
    }
]

export default FinancialRoute