<template>
  <div>
    <task-item-view
      :task="task"
      v-if="!isEditing"
      @start-editing="startEditing"
      @delete-task="deleteTask"
    />
    <task-item-edit
      :task="task"
      v-if="isEditing"
      @save-editing="saveEditing"
      @cancel-editing="cancelEditing"
      @end-editing="endEditing"
    />
  </div>
</template>

<script>
import TaskItemView from './TaskItemView.vue';
import TaskItemEdit from './TaskItemEdit.vue';
import { setTaskListToLocalStorage } from '../utils/helper.js';

export default {
  props: ['taskType', 'taskIndex', 'task'],
  components: { TaskItemView, TaskItemEdit },
  data() {
    return { isEditing: false };
  },
  methods: {
    startEditing() {
      if (!this.$store.state.isOperational) {
        return;
      }
      this.isEditing = true;
      this.$store.commit('disableOperation');
    },
    endEditing() {
      this.isEditing = false;
      this.$store.commit('enableOperation');
    },
    saveEditing() {
      this.$store.commit('updateTask', {
        taskType: this.taskType,
        taskIndex: this.taskIndex,
        updatedTask: this.task,
      });
      setTaskListToLocalStorage(this.$store.state, this.taskType);
    },
    cancelEditing({ taskBeforeEditing }) {
      this.$store.commit('updateTask', {
        taskType: this.taskType,
        taskIndex: this.taskIndex,
        updatedTask: taskBeforeEditing,
      });
    },
    deleteTask() {
      if (!this.$store.state.isOperational) {
        return;
      }
      this.$store.commit('deleteTask', {
        taskType: this.taskType,
        taskIndex: this.taskIndex,
      });
      setTaskListToLocalStorage(this.$store.state, this.taskType);
    },
  },
};
</script>
