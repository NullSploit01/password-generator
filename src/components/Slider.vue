<template>
  <div class="q-pa-md slider-container">
    <q-slider
      id="slider"
      v-model="length"
      @update:model-value="(value: String) => $emit('change', {name, value})"
      :min="4"
      :max="15"
    />
  </div>
</template>

<style>
.slider-container {
  font-size: 2rem;
}
</style>

<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    length: {
      type: Number,
      required: false,
    },
  },
};
</script>
