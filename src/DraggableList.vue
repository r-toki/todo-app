<template>
  <div class="draggable-list bg-light">
    <h3>{{ listName }}</h3>
    <template v-if="isAbleToAdd">
      <input
        v-model="newTodo"
        class="form-control"
        type="text"
        placeholder="What needs to be done?"
        @keyup.enter="addTodo"
      />
    </template>
    <draggable class="list-group" v-model="vuexList" group="shareLists" ghost-class="ghost">
      <div class="list-group-item" v-for="(element, idx) in vuexList" :key="element.id">
        <div class="flex-container">
          <div class="flex-item">{{ element.title }}</div>
          <div class="flex-item">
            <i class="fa fa-times close" @click="removeAt(idx)"></i>
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
      newTodo: '',
    };
  },
  computed: {
    vuexList: {
      get() {
        return this.$store.state[this.listName];
      },
      set(updatedList) {
        this.$store.commit('setList', { list: updatedList, listName: this.listName });
      },
    },
    isAbleToAdd() {
      return this.listName === 'todoList';
    },
  },
  methods: {
    removeAt(idx) {
      this.$store.commit('removeElement', { listName: this.listName, idx: idx });
    },
    addTodo() {
      const value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }
      this.$store.commit('addElement', {
        listName: this.listName,
        element: { title: value, id: new Date().getTime() },
      });
      this.newTodo = '';
    },
  },
};
</script>

<style scoped>
.draggable-list {
  padding: 0 1rem 1rem;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.flex-container {
  display: flex;
}

.flex-item:nth-child(1) {
  flex-grow: 1;
  overflow: hidden;
}

.flex-item:nth-child(2) > i {
  font-size: 1.5rem;
}
</style>
