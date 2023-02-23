import { RouteRecordRaw } from "vue-router";

const CollabsRoute: Array<RouteRecordRaw> = [
    {
        path: '/collaborators',
        name: 'CollaboratorsShow',
        component: () => import('@/views/collaborators/collaboratorspage/CollaboratorsPage.vue')
    }
]

export default CollabsRoute