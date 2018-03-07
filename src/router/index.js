import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/views/index';
import Article from '@/views/article';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/article/:type/:id',
      name: 'article',
      component: Article,
      props: true,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 300 };
  },
});
