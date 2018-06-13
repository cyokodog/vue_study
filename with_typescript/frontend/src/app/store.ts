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

import { StoreOptions, Module, MutationTree, GetterTree } from 'vuex';
import * as Vuex from 'vuex';

export interface RootState {
  version: string;
}

interface State {
  current: number;
}

const state: State = {
  current: 1
};

const mutations: MutationTree<State> = {
  up(state: State) {
    state.current++;
  },
  down(state: State) {
    state.current--;
  }
};

const getters: GetterTree<State, RootState> = {
  style(state: State): string {
    return `width:${state.current * 50}px`;
  }
};

export const counter: Module<State, RootState> = {
  namespaced: true,
  state,
  mutations,
  getters
};

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0'
  },
  modules: {
    counter
  }
};

export const createStore = (): Vuex.Store<RootState> => {
  return new Vuex.Store(store);
};
