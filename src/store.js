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
  globalEditingFlag: false,
};

const mutations = {
  updateTaskList(state, { taskType, newTaskList }) {
    state[taskType].taskList = newTaskList;
  },
  createTask(state, { taskType, newTask }) {
    state[taskType].taskList.unshift(newTask);
  },
  deleteTask(state, { taskType, taskIndex }) {
    state[taskType].taskList.splice(taskIndex, 1);
  },
  updateTask(state, { taskType, taskIndex, updatedTask }) {
    state[taskType].taskList[taskIndex] = updatedTask;
  },
  enableGlobalEditingFlag(state) {
    state.globalEditingFlag = true;
  },
  disableGlobalEditingFlag(state) {
    state.globalEditingFlag = false;
  },
};

export default new Vuex.Store({
  state,
  mutations,
});
