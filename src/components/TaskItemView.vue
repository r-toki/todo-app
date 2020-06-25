<template>
  <div>
    <h5>{{ task.title }}</h5>
    <h6 class="text-muted">{{ task.deadline || 'No deadline' }}</h6>
    <div class="pull-right">
      <button class="btn btn-outline-success" @click="startEditingTask()">
        <i class="fa fa-edit"></i>
      </button>
      <button class="btn btn-outline-danger" @click="removeTask()">
        <i class="fa fa-trash"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['taskType', 'taskIndex', 'task'],
  methods: {
    startEditingTask() {
      this.$emit('start-editing-task');
      this.$store.commit('disableDrag');
    },
    removeTask() {
      this.$store.commit('removeTaskFromTaskList', {
        taskType: this.taskType,
        taskIndex: this.taskIndex,
      });
    },
  },
};
</script>
