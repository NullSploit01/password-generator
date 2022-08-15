<template>
  <div class="container">
    <div class="heading-container">
      <h1 class="heading">{{ heading }}</h1>
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

.heading {
  font-size: 2rem;
}
</style>
