<template>
  <div class="row">
    <div class="col">
      <task-list-draggable task-type="todo" />
    </div>
    <div class="col">
      <task-list-draggable task-type="done" />
    </div>
  </div>
</template>

<script>
import TaskListDraggable from './components/TaskListDraggable.vue';

export default {
  components: { TaskListDraggable },
};
</script>

<style>
html,
body {
  height: 100%;
}
</style>

<style scoped>
.row {
  height: 100%;
  width: 960px;
  margin: auto;
}

.col {
  height: 100%;
}
</style>
