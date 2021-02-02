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
    if (Store.getters.getIsAuthLoading) { // url 직접 접근
      next('/');
    } else if (Store.getters.getIsAuth) { // 인증된 사용자
      next();
    } else { // 인증되지 않은 사용자
      // TODO error handler
      next('/');
    }
  } else {
    next();
  }
});

export default router;
