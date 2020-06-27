<template>
  <div>
    <div class="form-group">
      <input v-model="task.title" type="text" class="form-control" />
    </div>
    <date-picker
      v-model="task.deadline"
      :bootstrap-styling="true"
      :format="customFormatter"
      placeholder="No deadline"
      :clear-button="true"
      clear-button-icon="fa fa-times"
    />
    <div class="flex-container">
      <button
        @click="saveEditedTask()"
        class="btn btn-outline-primary btn-sm flex-item"
      >
        Save
      </button>
      <button
        @click="cancelEditing()"
        class="btn btn-outline-secondary btn-sm flex-item"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vuejs-datepicker';
import moment from 'moment';
import cloneDeep from 'lodash/cloneDeep';

export default {
  props: ['taskType', 'taskIndex', 'task'],
  components: { DatePicker },
  data() {
    return {
      taskBeforeUpdate: cloneDeep(this.task),
    };
  },
  methods: {
    saveEditedTask() {
      this.$store.commit('updateTask', {
        taskType: this.taskType,
        taskIndex: this.taskIndex,
        updatedTask: this.task,
      });
      this.$emit('end-editing-task');
    },
    cancelEditing() {
      this.$store.commit('updateTask', {
        taskType: this.taskType,
        taskIndex: this.taskIndex,
        updatedTask: this.taskBeforeUpdate,
      });
      this.$emit('end-editing-task');
    },
    customFormatter(date) {
      return moment(date).format('yyyy/MM/DD');
    },
  },
};
</script>

<style scoped>
.vdp-datepicker {
  margin-bottom: 1rem;
}

.flex-container {
  display: flex;
  justify-content: space-between;
}

.flex-item {
  width: 48%;
}
</style>
