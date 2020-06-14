<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <DraggableTodoList listName="todoList" shareLists="todo-completed"></DraggableTodoList>
      </div>
      <div class="col">
        <DraggableTodoList listName="completedList" shareLists="todo-completed"></DraggableTodoList>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import DraggableTodoList from './DraggableTodoList.vue';

export default {
  components: { draggable, DraggableTodoList },
};
</script>
