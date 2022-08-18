<script lang="ts">
export default {
  props: {
    passwords: {
      type: Array,
    },
  },
};
</script>

<template>
  <div class="rendered-passwords">
    <q-list dark>
      <q-item class="item" clickable v-for="password in passwords">
        <q-item-section>{{ password }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<style>
.rendered-passwords {
  columns: 2;
}
</style>
