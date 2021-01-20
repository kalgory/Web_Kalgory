import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#7C4DFE',
        success: '#4caf50',
        error: '#f44336'
      },
      dark: {

      }
    },
  },
});
