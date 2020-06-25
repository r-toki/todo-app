import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  todo: {
    title: 'To do',
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
    title: 'Done',
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
  draggable: true,
};

const getters = {
  getTaskList(state) {
    return function(taskType) {
      return state[taskType].taskList;
    };
  },
};

const mutations = {
  updateTaskList(state, { taskType, newTaskList }) {
    state[taskType].taskList = newTaskList;
  },
  removeTaskFromTaskList(state, { taskType, taskIndex }) {
    state[taskType].taskList.splice(taskIndex, 1);
  },
  ableDrag(state) {
    state.draggable = true;
  },
  disableDrag(state) {
    state.draggable = false;
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
});
