<script setup lang="ts">
import HeadingVue from '@/components/Heading.vue';
import RandomPasswordVue from '@/components/RandomPassword.vue';
import SliderVue from '@/components/Slider.vue';
import { PasswordGenerator } from '../utils/RandomPasswordGenerator';
import CheckBox from '../components/CheckBox.vue';
</script>

<template>
  <main>
    <HeadingVue heading="Password Generator" />
    <RandomPasswordVue :randomPassword="PasswordGenerator()" />
    <SliderVue />
    <CheckBox label="Numbers" />
    <CheckBox label="Special Characters" />
    <div class="button-container">
      <q-btn color="secondary" label="Create" />
    </div>
  </main>
</template>

<style>
.button-container {
  max-width: 30%;
  font-size: 2rem;
  margin: 3rem;
}
</style>
