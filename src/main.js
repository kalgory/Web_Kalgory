import Vue from 'vue'
import App from './App.vue'

import './plugins/firebase'
import store from './plugins/vuex'
import vuetify from './plugins/vuetify'
import router from './plugins/router'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
