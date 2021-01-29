import Vue from 'vue';
import Router from 'vue-router';

import routes from '@/router/routes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes,
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  document.title = to.meta.title;
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
