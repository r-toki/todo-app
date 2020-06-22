<template>
  <div class="task-item-vue">
    <template v-if="!isEditing">
      <h5>{{ task.title }}</h5>
      <div class="footer">
        <button class="btn btn-primary" @click="editTask()">
          <i class="fa fa-edit"></i>
        </button>
        <button class="btn btn-danger" @click="removeTask()">
          <i class="fa fa-trash"></i>
        </button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ['task'],
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    removeTask() {
      this.$emit('remove-task');
    },
    editTask() {
      this.$emit('edit-task');
    },
  },
};
</script>

<style scoped>
.footer {
  float: right;
}
</style>
