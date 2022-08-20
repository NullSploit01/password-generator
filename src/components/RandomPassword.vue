<template>
  <div class="container">
    <h3>
      Random Password For You:
      <span v-on:click="copy" class="cursor-pointer">{{ randomPassword }}</span>
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

<script lang="js">
import {Copy} from '../utils/CopyToClipboard'

export default {
  props: {
    randomPassword: {
      type: String,
      required:true
    }
  },
  methods: {
    copy() {
      Copy(this.randomPassword)
    },
  },
};
</script>
