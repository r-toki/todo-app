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
  setList(state, { list, listName }) {
    state[listName] = list;
  },
  removeElement(state, { listName, idx }) {
    state[listName].splice(idx, 1);
  },
  addElement(state, { listName, element }) {
    state[listName].push(element);
  },
};

export default new Vuex.Store({
  state,
  mutations,
});