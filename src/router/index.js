import Vue from 'vue';
import Router from 'vue-router';

import Routes from '@/router/routes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: Routes,
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  document.title = `${to.meta.title} - Kalgory`;
});

export default router;
