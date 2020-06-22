import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  todo: {
    displayName: 'To do',
    taskList: [
      {
        createdTime: 0,
        title: 'Clean the room',
        deadline: null,
      },
      {
        createdTime: 1,
        title: 'Exercise',
        deadline: null,
      },
    ],
  },
  done: {
    displayName: 'Done',
    taskList: [
      {
        createdTime: 2,
        title: 'Read Readable Code',
        deadline: null,
      },
      {
        createdTime: 3,
        title: 'Wash the dishes',
        deadline: null,
      },
    ],
  },
};

const getters = {
  getTaskList(state) {
    return function(taskState) {
      return state[taskState].taskList;
    };
  },
};

const mutations = {
  updateTaskList(state, { taskState, updatedTaskList }) {
    state[taskState].taskList = updatedTaskList;
  },
  removeTask(state, { taskState, index }) {
    state[taskState].taskList[(index, 1)];
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
});
