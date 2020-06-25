<template>
  <div :class="{ draggable: true }">
    <task-item-view
      :task-type="taskType"
      :task-index="taskIndex"
      :task="task"
      v-if="!isEditing"
      @start-editing-task="isEditing = true"
    />
    <task-item-edit
      :task-type="taskType"
      :task-index="taskIndex"
      :task="task"
      v-if="isEditing"
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
    return { isEditing: false };
  },
  methods: {},
};
</script>
