<template>
  <div>
    <task-item-input :task="task" />
    <footer>
      <div class="flex-container">
        <button @click="saveEditing()" class="btn btn-outline-success btn-sm flex-item">Save</button>
        <button @click="cancelEditing()" class="btn btn-outline-secondary btn-sm flex-item">Cancel</button>
      </div>
    </footer>
  </div>
</template>

<script>
import TaskItemInput from './TaskItemInput.vue';
import cloneDeep from 'lodash/cloneDeep';

export default {
  props: ['task'],
  components: { TaskItemInput },
  data() {
    return {
      taskBeforeEditing: cloneDeep(this.task),
    };
  },
  methods: {
    saveEditing() {
      this.$emit('save-editing');
      this.$emit('end-editing');
    },
    cancelEditing() {
      this.$emit('cancel-editing', {
        taskBeforeEditing: this.taskBeforeEditing,
      });
      this.$emit('end-editing');
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
