<template>
  <div class="number">
    <q-input dark type="number" v-model="number" label="Number Of Passwords" />
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
import { ref } from 'vue';

export default {
  setup() {
    return {
      number: ref(24),
    };
  },
  props: ['label'],
};
</script>
