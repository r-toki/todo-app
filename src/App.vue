<template>
  <div class="row">
    <div class="col">
      <task-kanban task-type="todo" />
    </div>
    <div class="col">
      <task-kanban task-type="done" />
    </div>
  </div>
</template>

<script>
import TaskKanban from './components/TaskKanban.vue';

export default {
  components: { TaskKanban },
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

.vdp-datepicker__clear-button > .input-group-text {
  background-color: #fff !important;
}
</style>

<style scoped>
.row {
  height: 100%;
  width: 800px;
  margin: auto;
}

.col {
  height: 100%;
}
</style>
