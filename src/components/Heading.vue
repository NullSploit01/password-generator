<template>
  <div class="container">
    <div class="heading-container">
      <h2 class="heading">{{ heading }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['heading'],
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  margin: 3rem;
}

.heading-container {
  margin: 1rem;
}
</style>
