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
        :class="{ handle: operationFlag }"
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

export default {
  props: ['taskType'],
  components: { draggable, TaskItem },
  data() {
    return { isCreating: false };
  },
  computed: {
    operationFlag() {
      return this.$store.state.operationFlag;
    },
    taskList: {
      get() {
        return this.$store.state[this.taskType].taskList;
      },
      set(newTaskList) {
        this.$store.commit('updateTaskList', {
          taskType: this.taskType,
          newTaskList: newTaskList,
        });
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
