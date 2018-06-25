import Vue from 'vue';
import Vuex from 'vuex';

import Counter from './Counter.vue';
import History from './History.vue';
import { createStore } from './store';

Vue.use(Vuex);

new Vue({
  store: createStore(),
  el: '#app',
  components: {
    Counter,
    History,
  },
  template: `
    <div>
      <Counter :unit="'g'"/>
      <History/>
    </div>
  `,
});
