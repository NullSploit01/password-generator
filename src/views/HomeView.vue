<script lang="ts">
import HeadingVue from '@/components/Heading.vue';
import RandomPasswordVue from '@/components/RandomPassword.vue';
import SliderVue from '@/components/Slider.vue';
import { PasswordGenerator } from '../utils/RandomPasswordGenerator';
import { GeneratePasswords } from '@/utils/GeneratePasswords';
import CheckBox from '../components/CheckBox.vue';
import RenderPasswordsVue from '@/components/RenderPasswords.vue';
import NumberInput from '../components/NumberInput.vue';
export default {
  components: {
    HeadingVue,
    RandomPasswordVue,
    SliderVue,
    CheckBox,
    RenderPasswordsVue,
    NumberInput,
  },
  data() {
    return {
      passwords: [],
    };
  },
  methods: {
    PasswordGenerator,
    GeneratePasswords,
    create() {
      this.passwords = GeneratePasswords();
    },
  },
};
</script>

<template>
  <HeadingVue heading="Password Generator" />
  <RandomPasswordVue :randomPassword="PasswordGenerator()" />
  <div class="parent-container">
    <div class="child-container">
      <SliderVue />
      <CheckBox :default="true" label="Numbers" />
      <CheckBox :default="false" label="Special Characters" />
      <NumberInput />
      <div class="button-container">
        <q-btn color="secondary" @click="create" size="1rem" label="Generate" />
      </div>
    </div>
    <div class="child-container results">
      <RenderPasswordsVue :passwords="passwords" />
    </div>
  </div>
</template>

<style>
.parent-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.child-container {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 2rem;
}

.button-container {
  font-size: 2rem;
  margin: 3rem;
  text-align: center;
}

.results {
  text-align: center;
  padding: 3rem 0;
}
</style>
