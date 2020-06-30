<template>
  <div class="kanban">
    <div class="kanban-column">
      <task-list-title task-type="todo" class="task-list-title" />
      <task-list task-type="todo" class="task-list" />
    </div>
    <div class="kanban-column">
      <task-list-title task-type="done" class="task-list-title" />
      <task-list task-type="done" class="task-list" />
    </div>
  </div>
</template>

<script>
import TaskListTitle from './components/TaskListTitle.vue';
import TaskList from './components/TaskList.vue';

export default {
  components: { TaskListTitle, TaskList },
};
</script>

<style>
html,
body {
  height: 100%;
}

/* vuejs-datepiccker デフォルトの背景が灰色のため変更 */
.vdp-datepicker .form-control {
  background-color: #fff !important;
}
</style>

<style scoped>
.kanban {
  height: 100%;
  display: flex;
  justify-content: center;
}

.kanban-column {
  height: 100%;
  width: 340px;
  flex-shrink: 0;
  margin: 0 10px;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
}

.kanban-column > * {
  padding: 0 20px;
  width: 340px;
}

.task-list {
  flex-grow: 1;
  overflow: auto;
}

.task-list-title {
  margin-bottom: 20px;
}
</style>
