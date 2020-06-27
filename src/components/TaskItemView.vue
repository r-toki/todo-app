<template>
  <div>
    <h5>{{ task.title }}</h5>
    <h6 class="text-muted">{{ deadline }}</h6>
    <div class="clearfix">
      <div class="pull-right">
        <button class="btn btn-outline-success" @click="startEditingTask()">
          <i class="fa fa-edit"></i>
        </button>
        <button class="btn btn-outline-secondary" @click="deleteTask()">
          <i class="fa fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: ['taskType', 'taskIndex', 'task'],
  computed: {
    deadline() {
      if (!this.task.deadline) {
        return 'No deadline';
      }
      const deadline = moment(this.task.deadline).format('yyyy/MM/DD');
      return `by ${deadline}`;
    },
  },
  methods: {
    startEditingTask() {
      if (this.$store.state.globalEditingFlag) {
        return;
      }
      this.$emit('start-editing-task');
    },
    deleteTask() {
      if (this.$store.state.globalEditingFlag) {
        return;
      }
      this.$store.commit('deleteTask', {
        taskType: this.taskType,
        taskIndex: this.taskIndex,
      });
    },
  },
};
</script>
