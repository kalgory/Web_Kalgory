import Vue from 'vue'
import App from './App.vue'

import './plugins/firebase'
import Store from './store'
import Vuetify from './plugins/vuetify'
import Router from './router'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

new Vue({
  vuetify: Vuetify,
  router: Router,
  store: Store,
  render: h => h(App),
}).$mount('#app')