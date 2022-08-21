<template>
  <div class="number">
    <q-input
      dark
      @update:model-value="(value: String) => $emit('change', {name, value})"
      type="text"
      v-model="numberOfPasswords"
      label="Number Of Passwords"
      :min="4"
      :max="24"
      :step="2"
      mask="##"
      lazy-rules
      :rules="[
        (val: Number | String) =>
          (val !== null && val != '') || 'Please Specify Number of Passwords!',
        (val: Number | String) => 
          (val > 3 && val < 25) || 'Please Enter a value between 4 & 24'
      ]"
    />
  </div>
</template>

<style>
.number {
  font-size: 3rem;
  margin-left: 1rem;
  max-width: 25%;
}
</style>

<script lang="ts">
export default {
  data() {
    return {
      numberOfPasswords: 24,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
