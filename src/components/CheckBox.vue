<template>
  <div class="q-pa-md checkbox-container">
    <label class="label">{{ label }}</label>
    <q-checkbox v-model="val" size="3rem" color="secondary" />
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
import { ref } from 'vue';

export default {
  props: {
    label: String,
    default: Boolean,
  },

  setup() {
    return {
      val: ref('false'),
    };
  },
};
</script>
