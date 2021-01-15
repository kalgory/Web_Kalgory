import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify'
import './plugins/firebase'
import Router from './plugins/router'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router: Router,
  render: h => h(App),
}).$mount('#app')
