import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  todo: {
    title: 'To do',
    taskList: JSON.parse(localStorage.getItem('todo')) || [],
  },
  done: {
    title: 'Done',
    taskList: JSON.parse(localStorage.getItem('done')) || [],
  },
  isOperational: true,
};

const mutations = {
  updateTaskList(state, { taskType, updatedTaskList }) {
    state[taskType].taskList = updatedTaskList;
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
  enableOperation(state) {
    state.isOperational = true;
  },
  disableOperation(state) {
    state.isOperational = false;
  },
};

export default new Vuex.Store({
  state,
  mutations,
});
