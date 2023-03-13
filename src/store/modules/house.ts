

const state = {
    displayClearFilter: false,
}

const mutations = {
    enableClearFilter(state: any){
        state.displayClearFilter = true
    },
    disableClearFilter(state: any){
        state.displayClearFilter = false
    }
}

export default{
    namespaced: true,
    state,
    mutations,
}