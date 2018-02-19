import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const state = {
  sidebar: true,
  globalDialog: {
    show: false,
    component: ''
  },
  gruntConfig: {
    cr: {},
    race: {id: 'random', name: 'Random'},
    sc: {id: 'random', name: 'Random'}
  },
  encounter: {
    npcs: {
      list: [],
      counts: []
    },
    pcs: []
  },
  bookmarks: []
};

const mutations = {
  toggleSidebar(state, payload) {
    state.sidebar = payload;
  },
  toggleGlobalDialog(state, payload) {
    state.globalDialog.show = payload;
  },
  updateGlobalDialogComponent(state, payload) {
    state.globalDialog.component = payload;
  },
  updateGruntConfigCr(state, payload) {
    state.gruntConfig.cr = payload;
  },
  updateGruntConfigClass(state, payload) {
    state.gruntConfig.sc = payload;
  },
  updateGruntConfigRace(state, payload) {
    state.gruntConfig.race = payload;
  },
  addBookmark(state, payload) {
    state.bookmarks.push(payload);
  },
  removeBookmark(state, index) {
    state.bookmarks.splice(index, 1);
  },
  addEncounterNpc(state, payload) {
    const index = state.encounter.npcs.list.indexOf(payload);
    if (index > -1) {
      state.encounter.npcs.counts[index] += 1;
    } else {
      state.encounter.npcs.list.push(payload);
      state.encounter.npcs.counts.push(1);
    }
  },
  removeEncounterNpc(state, payload) {
    const index = state.encounter.npcs.list.indexOf(payload);
    if (index > -1) {
      state.encounter.npcs.counts.splice(index, 1);
      state.encounter.npcs.list.splice(index, 1);
    }
  }
};

const actions = {
  addBookmark({commit}, payload) {
    commit('addBookmark', payload);
  },
  removeBookmark({state, commit}, payload) {
    const index = state.bookmarks.findIndex(bookmark => bookmark.type === payload.type && bookmark.card.id === payload.card.id);
    if (index > -1) {
      commit('removeBookmark', index);
    }
  },
  showGlobalDialog({commit}, payload) {
    commit('toggleGlobalDialog', true);
    commit('updateGlobalDialogComponent', payload);
  },
  hideGlobalDialog({commit}) {
    commit('toggleGlobalDialog', false);
  }
};

const getters = {
  globalDialog: state => {
    return state.globalDialog;
  },
  bookmarks: state => {
    return state.bookmarks;
  },
  bookmarkCount: (state, getters) => {
    return getters.bookmarks.length;
  },
  isBookmarked: (state, getters) => card => {
    return getters.bookmarks.find(bookmark => bookmark.card.id === card.id) !== undefined;
  },
  bookmarksGroupedByType: (state, getters) => {
    return getters.bookmarks.reduce((rv, x) => {
      (rv[x.type] = rv[x.type] || []).push(x.card);
      return rv;
    }, {});
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {},
  plugins: [createPersistedState()]
});

export default store;
