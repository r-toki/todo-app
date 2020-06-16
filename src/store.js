import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  todoList: [
    { id: 1, title: '掃除', done: false },
    { id: 3, title: '犬の散歩', done: false },
  ],
  completedList: [
    { id: 2, title: '洗濯', done: false },
    { id: 4, title: '筋トレ', done: false },
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
  // listName, idx | element
  updateElement(state, { listName, idx, element }) {
    state[listName][idx] = element;
  },
};

export default new Vuex.Store({
  state,
  mutations,
});
