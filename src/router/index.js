import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/views/index';
import Article from '@/views/article';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/article',
      name: 'article',
      component: Article,
    },
  ],
});
