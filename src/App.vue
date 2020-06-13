<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <DraggableTodoList
          listName="todoList"
          shareGroup="group1"
        ></DraggableTodoList>
      </div>
      <div class="col">
        <DraggableTodoList
          listName="completedList"
          shareGroup="group1"
        ></DraggableTodoList>
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
