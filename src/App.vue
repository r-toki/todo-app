<template>
  <div class="app-root container">
    <div class="row">
      <div class="col">
        <DraggableList listName="todoList" shareLists="todo-completed"></DraggableList>
      </div>
      <div class="col">
        <DraggableList listName="completedList" shareLists="todo-completed"></DraggableList>
      </div>
    </div>
  </div>
</template>

<script>
import DraggableList from './DraggableList.vue';

export default {
  components: { DraggableList },
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
.app-root,
.app-root .row,
.app-root .row .col {
  height: 100%;
}
</style>