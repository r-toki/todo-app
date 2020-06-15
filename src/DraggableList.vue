<template>
  <div class="draggable-list-root">
    <div class="title-area">
      <h4>{{ listName }}</h4>
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
        <div class="flex-container">
          <div class="flex-item">{{ task.title }}</div>
          <div class="flex-item">
            <i class="fa fa-times close" @click="removeTask(idx)"></i>
          </div>
        </div>
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
        element: { title: value, id: new Date().getTime() },
      });
      this.newTaskTitle = '';
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

.title-area {
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

.task-area .flex-container {
  display: flex;
}

.task-area .flex-item:nth-child(1) {
  flex-grow: 1;
  overflow: hidden;
}

.task-area .flex-item:nth-child(2) > i {
  font-size: 1.5rem;
}
</style>
