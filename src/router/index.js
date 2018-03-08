import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/views/index';
import Article from '@/views/article';

Vue.use(Router);
const Bar = { template: '<div>hello</div>' };
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/article/:type/:id',
      component: Article,
      props: true,
    },
    {
      path: 'bar/:id',
      component: Bar,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});
