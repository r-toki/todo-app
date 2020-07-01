<template>
  <div class="task-list-title">
    <div class="flex-container">
      <h4>{{ this.taskListTitle }} : {{ this.taskCount }}</h4>
      <div class="pull-right">
        <button class="btn" @click="startCreating">
          <i class="fa fa-plus"></i>
        </button>
      </div>
    </div>
    <task-item-create
      v-if="isCreating"
      @end-creating="endCreating"
      @create-task="createTask"
      class="task-item-create"
    />
  </div>
</template>

<script>
import TaskItemCreate from './TaskItemCreate.vue';
import { setTaskListToLocalStorage } from '../utils/helper.js';

export default {
  props: ['taskType'],
  components: { TaskItemCreate },
  data() {
    return {
      isCreating: false,
    };
  },
  computed: {
    taskListTitle() {
      return this.$store.state[this.taskType].title;
    },
    taskCount() {
      return this.$store.state[this.taskType].taskList.length;
    },
  },
  methods: {
    startCreating() {
      if (!this.$store.state.isOperational) {
        return;
      }
      this.isCreating = true;
      this.$store.commit('disableOperation');
    },
    endCreating() {
      this.isCreating = false;
      this.$store.commit('enableOperation');
    },
    createTask({ newTask }) {
      this.$store.commit('createTask', {
        taskType: this.taskType,
        newTask: newTask,
      });
      setTaskListToLocalStorage(this.$store.state, this.taskType);
    },
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  padding: 0.75rem 1.25rem;
}

.flex-container > h4 {
  flex-grow: 1;
}

.task-item-create {
  margin-bottom: 0.5rem;
}
</style>
