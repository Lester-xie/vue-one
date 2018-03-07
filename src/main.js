import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';

Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    collapse: false,
  },
  mutations: {
    setCollapse(state) {
      state.collapse = true;
    },
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
