import Vue from 'vue'
import Vuex from 'vuex'

import Auth from '@/store/modules/auth'

Vue.use(Vuex)
console.log('in store')
export default new Vuex.Store({
  modules: {
    auth: Auth
  },
})