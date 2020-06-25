<template>
  <div>
    <task-item-input :task="task">
      <template v-slot:footer>
        <br />
        <div class="flex-container">
          <button @click="saveEdit" class="btn btn-outline-primary flex-item">
            Save
          </button>
          <button
            @click="cancelEdit"
            class="btn btn-outline-secondary flex-item"
          >
            Cancel
          </button>
        </div>
      </template>
    </task-item-input>
  </div>
</template>

<script>
import TaskItemInput from './TaskItemInput.vue';

export default {
  props: ['taskType', 'taskIndex', 'task'],
  components: { TaskItemInput },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  justify-content: space-between;
}

.flex-item {
  width: 47.5%;
}
</style>
