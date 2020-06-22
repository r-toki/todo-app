<template>
  <div class="app-vue container">
    <div class="row">
      <div class="col">
        <TaskList taskState="todo"></TaskList>
      </div>
      <div class="col">
        <TaskList taskState="done"></TaskList>
      </div>
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
</style>

<style scoped>
.app-vue {
  height: 100%;
}

.app-vue > .row,
.app-vue > .col {
  height: 100%;
}
</style>
