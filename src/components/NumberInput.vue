<template>
  <div class="number">
    <label class="knob-label" for="knob"> Number of Passwords </label>
    <q-knob
      id="knob"
      dark
      @update:model-value="(value: String) => $emit('change', {name, value})"
      v-model="numberOfPasswords"
      :min="4"
      :max="24"
      show-value
    />
  </div>
</template>

<style>
.number {
  font-size: 2rem;
  margin-left: 1rem;
}
.knob-label {
  text-align: right;
  clear: both;
  float: left;
  margin-right: 1rem;
}
</style>

<script lang="ts">
export default {
  data() {
    return {
      numberOfPasswords: 18,
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
