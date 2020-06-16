<template>
  <div class="draggable-list-root">
    <div class="title-area">
      <h4>{{ title }}</h4>
    </div>
    <div class="add-area">
      <input
        v-model="newTaskTitle"
        class="form-control"
        type="text"
        placeholder="Add task"
        @keyup.enter="addTask"
      />
    </div>
    <draggable
      class="list-group draggable-area"
      v-model="vuexList"
      group="shareLists"
      ghost-class="ghost"
    >
      <div class="list-group-item task-area" v-for="(task, idx) in vuexList" :key="task.id">
        <div class="pretty p-default">
          <input type="checkbox" v-model="task.done" @change="updateTask(idx, task)" />
          <div class="state p-success">
            <label>{{ task.title }}</label>
          </div>
        </div>
        <i class="fa fa-times close" @click="removeTask(idx)"></i>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  props: ['listName', 'shareLists'],
  components: { draggable },
  data() {
    return {
      newTaskTitle: '',
    };
  },
  computed: {
    title() {
      const titleList = { todoList: 'To do', completedList: 'Completed' };
      return titleList[this.listName] || 'No Title';
    },
    vuexList: {
      get() {
        return this.$store.state[this.listName];
      },
      set(updatedList) {
        this.$store.commit('setList', { listName: this.listName, list: updatedList });
      },
    },
  },
  methods: {
    removeTask(idx) {
      this.$store.commit('removeElement', { listName: this.listName, idx: idx });
    },
    addTask() {
      const value = this.newTaskTitle && this.newTaskTitle.trim();
      if (!value) {
        return;
      }
      this.$store.commit('addElement', {
        listName: this.listName,
        idx: 0,
        element: { id: new Date().getTime(), title: value, done: false },
      });
      this.newTaskTitle = '';
    },
    updateTask(idx, task) {
      this.$store.commit('updateElement', {
        listName: this.listName,
        idx: idx,
        element: task,
      });
    },
  },
};
</script>

<style scoped>
.draggable-list-root {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.add-area {
  margin-bottom: 0.5rem;
}

.draggable-area {
  flex-grow: 1;
}

.task-area {
  margin-bottom: 0.25rem;
  cursor: pointer;
}

.list-group-item {
  border-radius: inherit !important;
}

.list-group-item + .list-group-item {
  border-top-width: 1px !important;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
