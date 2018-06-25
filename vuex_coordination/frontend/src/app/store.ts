// import Vuex from 'vuex';

// const store = {
//   state: {
//     version: '1.0.0'
//   },
//   modules: {
//     counter: {
//       namespaced: true,
//       state: {
//         current: 1
//       },
//       getters: {
//         style: state => {
//           return `width:${state.current * 50}px`;
//         }
//       },
//       mutations: {
//         up(state) {
//           state.current++;
//         },
//         down(state) {
//           state.current--;
//         }
//       }
//     }
//   }
// };

// export const createStore = () => {
//   return new Vuex.Store(store);
// };

import { StoreOptions, Module, MutationTree, GetterTree, ActionTree } from 'vuex';
import * as Vuex from 'vuex';

export interface RootState {
  version: string;
}

interface CounterState {
  current: number;
}

interface HistoryState {
  counts: number[];
}

const getCounterModule = (): Module<CounterState, RootState> => {
  const state: CounterState = {
    current: 1,
  };

  const mutations: MutationTree<CounterState> = {
    up(state: CounterState) {
      state.current++;
    },
    down(state: CounterState) {
      state.current--;
    },
  };

  const getters: GetterTree<CounterState, RootState> = {
    style(state: CounterState): string {
      return `width:${state.current * 50}px`;
    },
  };

  const actions: ActionTree<CounterState, RootState> = {
    saveHistory({ dispatch, state /* getters, commit,rootGetters */ }) {
      // 他のモジュールのstateを更新するには、rootを迂回するしかないっぽい
      dispatch('saveHistory', state.current, { root: true });
    },
    myStoreToSvae({ state, commit }) {
      console.log('myStoreToSvae5');
      commit('history/save', state.current, { root: true });
    },
  };

  return {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
  };
};

const getHistoryModule = (): Module<HistoryState, RootState> => {
  const state: HistoryState = {
    counts: [],
  };

  const mutations: MutationTree<HistoryState> = {
    save(state: HistoryState, count) {
      state.counts = [...state.counts, count];
    },
  };

  return {
    namespaced: true,
    state,
    mutations,
  };
};

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  actions: {
    saveHistory({ commit }, count) {
      commit('history/save', count);
    },
  },
  modules: {
    counter: getCounterModule(),
    history: getHistoryModule(),
  },
};

export const createStore = (): Vuex.Store<RootState> => {
  return new Vuex.Store(store);
};
