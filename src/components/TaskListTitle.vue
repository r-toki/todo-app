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
    <task-item-create v-if="isCreating" @end-creating="endCreating" @create-task="createTask" />
  </div>
</template>

<script>
import TaskItemCreate from './TaskItemCreate.vue';

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
      return this.$store.state[this.taskType].length;
    },
  },
  methods: {
    startCreating() {
      if (!this.$store.state.operationFlag) {
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
    },
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  padding: 0 1.25rem;
}

.flex-container > h4 {
  flex-grow: 1;
}
</style>
