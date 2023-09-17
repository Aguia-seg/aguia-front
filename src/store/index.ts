import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store, createLogger} from 'vuex'
import auth from './modules/auth'
import user from './modules/user'
import client from './modules/client'
import plan from './modules/plan'
import painel from './modules/painel'
import invoice from './modules/invoice'
import house from './modules/house'
import contract from './modules/contract'

const debug = process.env.NODE_ENV !== 'production'

// define your typings for the store state
export interface State {
  auth: any,
  user: any,
  client: any,
  plan: any,
  painel: any,
  house: any,
  contract: any
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  modules:{
    auth,
    user,
    client,
    plan,
    painel,
    house,
    invoice,
    contract
  },
  strict: false,
  plugins: debug ? [createLogger()] : []
})

export function useStore () {
    return baseUseStore(key)
}