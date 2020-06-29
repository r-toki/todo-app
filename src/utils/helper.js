const setTaskListToLocalStorage = (state, taskType) => {
  const key = taskType;
  const value = JSON.stringify(state[taskType].taskList);
  localStorage.setItem(key, value);
};

export { setTaskListToLocalStorage };
