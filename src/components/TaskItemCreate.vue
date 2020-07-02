<template>
  <div class="list-group-item">
    <task-item-input :task="newTask" />
    <footer>
      <div class="flex-container">
        <button @click="createTask()" class="btn btn-outline-primary btn-sm flex-item">Create</button>
        <button @click="cancelCreating()" class="btn btn-outline-secondary btn-sm flex-item">Cancel</button>
      </div>
    </footer>
  </div>
</template>

<script>
import TaskItemInput from './TaskItemInput.vue';

export default {
  props: ['taskType'],
  components: { TaskItemInput },
  data() {
    return {
      newTask: {
        createdTime: null,
        title: '',
        deadline: null,
      },
    };
  },
  methods: {
    createTask() {
      this.newTask.title = this.newTask.title.trim();
      if (!this.newTask.title) {
        return;
      }
      this.newTask.createdTime = Date.now();
      this.$emit('create-task', { newTask: this.newTask });
      this.$emit('end-creating');
    },
    cancelCreating() {
      this.$emit('end-creating');
    },
  },
};
</script>

<style scoped>
footer {
  margin-top: 1rem;
}

.flex-container {
  display: flex;
  justify-content: space-between;
}

.flex-item {
  width: 48%;
}
</style>
