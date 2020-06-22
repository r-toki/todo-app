<template>
  <div class="task-list-vue">
    <h3>{{ headerTitle }}</h3>
    <draggable class="list-group" v-model="taskList" group="group">
      <div
        class="list-group-item"
        v-for="(task, index) in taskList"
        :key="index"
      >
        <TaskItem :task="task"></TaskItem>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import TaskItem from './TaskItem.vue';

export default {
  props: ['taskState'],
  components: { draggable, TaskItem },
  computed: {
    headerTitle() {
      return this.$store.state[this.taskState].displayName;
    },
    taskList: {
      get() {
        return this.$store.state[this.taskState].taskList;
      },
      set(updatedTaskList) {
        this.$store.commit('updateTaskList', {
          taskState: this.taskState,
          updatedTaskList: updatedTaskList,
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
  background-color: #f8f9fa !important;
  display: flex;
  flex-direction: column;
}

.list-group {
  flex-grow: 1;
}

.list-group-item {
  margin-bottom: 10px;
  /* 2 */
  border-radius: inherit !important;
  border-width: 1px !important;
}
</style>
