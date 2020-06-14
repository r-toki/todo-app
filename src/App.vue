<template>
  <div class="container">
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
