<template>
  <div class="inputcontainer">
    <h2 class="slider-heading">Length</h2>
    <input type="range" min="4" max="15" class="slider" v-model="value" />
    <h2 id="slider-value">{{ value }}</h2>
  </div>
</template>

<style>
.inputcontainer {
  display: flex;
  justify-content: left;
}

.slider-heading {
  font-size: 24px;
  padding: 2rem;
}

.slider {
  width: 30%;
}
</style>

<script lang="ts">
export default {
  data() {
    return { value: 8 };
  },
};
</script>
