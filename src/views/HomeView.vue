<script setup lang="ts">
import HeadingVue from '../components/Heading.vue';
import RandomPasswordVue from '@/components/RandomPassword.vue';
import { PasswordGenerator } from '../utils/RandomPasswordGenerator';
</script>

<template>
  <main>
    <HeadingVue heading="Password Generator" />
    <RandomPasswordVue :randomPassword="PasswordGenerator()" />
  </main>
</template>
