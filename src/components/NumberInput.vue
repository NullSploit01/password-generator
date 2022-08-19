<template>
  <div class="number">
    <q-input
      dark
      @update:model-value="(value: String) => $emit('change', {name, value})"
      type="number"
      v-model="numberOfPasswords"
      label="Number Of Passwords"
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
    name: String,
  },
};
</script>
