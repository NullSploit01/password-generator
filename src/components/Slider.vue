<template>
  <div class="q-pa-md slider-container">
    <label class="slider" for="slider">Length: {{ length }}</label>
    <q-slider id="slider" v-model="length" :min="4" :max="15" />
  </div>
</template>

<style>
.slider-container {
  font-size: 2rem;
}
</style>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    return {
      length: ref(8),
    };
  },
};
</script>
