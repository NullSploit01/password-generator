<script lang="ts">
import { Copy } from '../utils/CopyToClipboard';

export default {
  props: {
    passwords: {
      type: Array,
      required: true,
    },
  },
  methods: {
    copy(password: string) {
      Copy(password);
    },
  },
};
</script>

<template>
  <div class="rendered-passwords">
    <q-list dark>
      <q-item class="item" clickable v-for="password in passwords">
        <q-item-section v-on:click="copy(password)">{{
          password
        }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<style>
.rendered-passwords {
  columns: 2;
}
</style>
