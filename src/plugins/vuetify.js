import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0277bd',
        secondary: '#b3e5fc',
        success: '#4caf50',
        error: 'f44336'
      },
      dark: {

      }
    },
  },
});
