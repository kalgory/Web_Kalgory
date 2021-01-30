import Vue from 'vue';
import Router from 'vue-router';

import routes from '@/router/routes';
import Store from '@/store';

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
  if (to.meta.requireAuth) {
    if (Store.getters.getIsAuth && !Store.getters.getIsLoading) {
      next();
    } else {
      // TODO error handler
      next('/');
    }
  } else {
    next();
  }
});

export default router;
