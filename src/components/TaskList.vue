<template>
  <div class="task-list">
    <draggable
      class="list-group draggable"
      v-model="taskList"
      group="group"
      ghost-class="ghost"
      handle=".handle"
    >
      <div
        class="list-group-item"
        v-for="(task, taskIndex) in taskList"
        :key="taskIndex"
        :class="{ handle: isOperational }"
      >
        <task-item :task-type="taskType" :task-index="taskIndex" :task="task" />
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import TaskItem from './TaskItem.vue';
import TaskItemCreate from './TaskItemCreate.vue';
import { setTaskListToLocalStorage } from '../utils/helper.js';

export default {
  props: ['taskType'],
  components: { draggable, TaskItem },
  data() {
    return { isCreating: false };
  },
  computed: {
    isOperational() {
      return this.$store.state.isOperational;
    },
    taskList: {
      get() {
        return this.$store.state[this.taskType].taskList;
      },
      set(updatedTaskList) {
        this.$store.commit('updateTaskList', {
          taskType: this.taskType,
          updatedTaskList: updatedTaskList,
        });
        setTaskListToLocalStorage(this.$store.state, this.taskType);
      },
    },
  },
};
</script>

<style scoped>
.draggable {
  height: 100%;
}

.list-group-item {
  margin-bottom: 0.5rem;
  border-radius: inherit !important;
  border-width: 1px !important;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
  border: 1px solid #4299e1;
}
</style>
