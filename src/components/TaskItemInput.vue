<template>
  <div>
    <div class="form-group">
      <input v-model="task.title" type="text" placeholder="Title" class="form-control" />
    </div>
    <date-picker
      v-model="task.deadline"
      :bootstrap-styling="true"
      :format="customFormatter"
      placeholder="Deadline"
      :typeable="true"
    />
  </div>
</template>

<script>
import DatePicker from 'vuejs-datepicker';
import moment from 'moment';

export default {
  props: ['task'],
  components: { DatePicker },
  methods: {
    customFormatter(date) {
      return moment(date).format('yyyy/MM/DD');
    },
  },
};
</script>
