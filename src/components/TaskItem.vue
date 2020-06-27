<template>
  <div>
    <task-item-view
      :task-type="taskType"
      :task-index="taskIndex"
      :task="task"
      v-if="!localEditingFlag"
      @start-editing-task="startEditingTask()"
    />
    <task-item-edit
      :task-type="taskType"
      :task-index="taskIndex"
      :task="task"
      v-if="localEditingFlag"
      @end-editing-task="endEditingTask()"
    />
  </div>
</template>

<script>
import TaskItemView from './TaskItemView.vue';
import TaskItemEdit from './TaskItemEdit.vue';

export default {
  props: ['taskType', 'taskIndex', 'task'],
  components: { TaskItemView, TaskItemEdit },
  data() {
    return { localEditingFlag: false };
  },
  methods: {
    startEditingTask() {
      this.localEditingFlag = true;
      this.$store.commit('enableGlobalEditingFlag');
    },
    endEditingTask() {
      this.localEditingFlag = false;
      this.$store.commit('disableGlobalEditingFlag');
    },
  },
};
</script>
