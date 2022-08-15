<template>
  <div class="container">
    <h2>
      Random Password For You:
      <span>{{ randomPassword }}</span>
    </h2>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  margin: 3rem;
}
</style>

<script lang="ts">
export default {
  props: ['randomPassword'],
};
</script>
