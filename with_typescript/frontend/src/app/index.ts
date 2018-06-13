import Vue from 'vue';
import Vuex from 'vuex';

import Counter from './Counter.vue';
import { createStore } from './store';

Vue.use(Vuex);

new Vue({
  store: createStore(),
  el: '#app',
  components: {
    Counter
  },
  template: `
    <Counter :unit="'g'"/>
  `
});
