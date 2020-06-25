<template>
  <div>
    <div class="form-group">
      <label>Title</label>
      <input v-model="task.title" type="text" class="form-control" />
    </div>
    <label>Deadline</label>
    <date-picker
      v-model="task.deadline"
      :bootstrap-styling="true"
      :input-class="`date-picker-input`"
    />
    <slot name="footer"></slot>
  </div>
</template>

<script>
import DatePicker from 'vuejs-datepicker';

export default {
  props: ['task'],
  components: { DatePicker },
};
</script>

<style module>
.date-picker-input {
  background-color: white !important;
}
</style>
