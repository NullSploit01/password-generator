<template>
  <div class="container">
    <h3>
      Random Password For You:
      <span>{{ randomPassword }}</span>
    </h3>
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
