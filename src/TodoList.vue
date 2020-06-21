<template>
  <div class="todo-list-vue">
    <h3>Todo List</h3>
    <div class="add-todo">
      <input class="form-control" type="text" v-model="newTodoTitle" placeholder="Add Todo" />
      <button class="btn btn-secondary" @click="addTodo">
        <i class="fa fa-plus"></i>
      </button>
    </div>
    <div class="todo-list">
      <div class="todo clearfix" v-for="todo of todoList" :key="todo.id">
        <div class="pretty p-default p-round">
          <input type="checkbox" />
          <div class="state p-success-o">
            <label>""</label>
          </div>
        </div>
        {{todo.title}}
        <!-- <i class="fa fa-edit"></i>
        <i class="fa fa-remove"></i>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      todoList: JSON.parse(localStorage.getItem('todoList')) || [],
      newTodoTitle: '',
    };
  },
  methods: {
    addTodo() {
      const trimmedNewTodoTitle = this.newTodoTitle.trim();
      if (!trimmedNewTodoTitle) {
        return;
      }
      const time = Date.now();
      const newTodo = {
        id: String(time),
        title: trimmedNewTodoTitle,
        done: false,
      };
      this.todoList.push(newTodo);
      this.newTodoTitle = '';
    },
    editTodo() {
      console.log('call editTodo');
    },
    reverseDone(todo) {
      todo.done = !todo.done;
    },
  },
};
</script>

<style scoped>
.todo-list-vue {
  width: 480px;
}

.add-todo {
  display: flex;
  margin-bottom: 10px;
}

.add-todo > input {
  margin-right: 10px;
}

.todo {
  background-color: white;
  padding: 0.375rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.todo > i {
  font-size: 18px;
  cursor: pointer;
}
</style>
