import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  todoList: [
    { title: 'Ishikawa', id: 1 },
    { title: 'Kanagawa', id: 3 },
  ],
  completedList: [
    { title: 'Okayama', id: 2 },
    { title: 'Tokyo', id: 4 },
  ],
};

const mutations = {
  // for specify | for update
  // listName | list
  setList(state, { listName, list }) {
    state[listName] = list;
  },
  // listName, idx |
  removeElement(state, { listName, idx }) {
    state[listName].splice(idx, 1);
  },
  // listName, idx | element
  addElement(state, { listName, idx, element }) {
    state[listName].splice(idx, 0, element);
  },
};

export default new Vuex.Store({
  state,
  mutations,
});
