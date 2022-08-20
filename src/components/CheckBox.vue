<template>
  <div class="q-pa-md checkbox-container">
    <label class="label">{{ label }}</label>
    <q-checkbox
      @update:model-value="(value: String) => $emit('change', {name, value})"
      v-model="check"
      size="3rem"
      color="secondary"
      dark
    />
  </div>
</template>

<style>
.checkbox-container {
  font-size: 2rem;
}

.label {
  font-size: 2rem;
  padding-right: 1rem;
}
</style>

<script lang="ts">
export default {
  props: {
    label: String,
    default: Boolean,
    name: String,
  },
  data() {
    return {
      check: false,
    };
  },
};
</script>
