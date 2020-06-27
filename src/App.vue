<template>
  <div class="flex-container">
    <div class="flex-item">
      <task-list task-type="todo" />
    </div>
    <div class="flex-item">
      <task-list task-type="done" />
    </div>
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue';

export default {
  components: { TaskList },
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
.flex-container {
  height: 100%;
  display: flex;
  justify-content: center;
}

.flex-item {
  height: 100%;
  width: 400px;
  margin: 0 10px;
  flex-shrink: 0;
}
</style>
