<template>
  <div class="task-list-vue">
    <h4>{{ this.kanbanName }} : {{ this.taskCount }}</h4>
    <draggable
      class="list-group"
      v-model="taskList"
      group="group"
      ghost-class="ghost"
      handle=".handle"
    >
      <div
        class="list-group-item"
        v-for="(task, taskIndex) in taskList"
        :key="taskIndex"
        :class="{ handle: !globalEditingFlag }"
      >
        <task-item :task-type="taskType" :task-index="taskIndex" :task="task" />
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import TaskItem from './TaskItem.vue';

export default {
  props: ['taskType'],
  components: { draggable, TaskItem },
  computed: {
    globalEditingFlag() {
      return this.$store.state.globalEditingFlag;
    },
    kanbanName() {
      return this.$store.state[this.taskType].title;
    },
    taskCount() {
      return this.$store.state[this.taskType].taskList.length;
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
.task-list-vue {
  height: 100%;
  padding: 0 20px;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
}

.list-group {
  flex-grow: 1;
}

.list-group-item {
  margin-bottom: 10px;
  border-radius: inherit !important;
  border-width: 1px !important;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
  border: 1px solid #4299e1;
}
</style>
