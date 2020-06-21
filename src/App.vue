<template>
  <div class="App-vue container">
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from './TodoList.vue';
export default {
  components: { TodoList },
};
</script>

<style>
html,
body {
  height: 100%;
}

body {
  background-color: #f8f9fa !important;
}
</style>

<style scoped>
.App-vue {
  height: 100%;
  max-width: 960px;
}
</style>
