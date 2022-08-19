<script lang="js">
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
      obj: {
        passwords: [],
        isNumeric: true,
        specialChars: false,
        length: 8,
        numberOfPasswords: 24
      },
      random: ''
    };
  },
  mounted() {
    this.random = PasswordGenerator()
    console.log("");
  },
  methods: {
    PasswordGenerator,
    GeneratePasswords,
    create() {
      this.obj.passwords = GeneratePasswords(this.obj);
    },
    handleInputChange({ name, value }) {
      this.obj[name] = value;
    },
  },
};
</script>

<template>
  <HeadingVue heading="Password Generator" />
  <RandomPasswordVue :randomPassword="random" />
  <div class="parent-container">
    <div class="child-container">
      <label class="slider" for="slider">Length: {{ obj.length }}</label>

      <SliderVue
        @change="handleInputChange"
        v-model="obj.length"
        name="length"
      />
      <CheckBox
        @change="handleInputChange"
        v-model="obj.isNumeric"
        name="isNumeric"
        label="Numbers"
      />
      <CheckBox
        name="specialChars"
        v-model="obj.specialChars"
        label="Special Characters"
        @change="handleInputChange"
      />
      <NumberInput
        @change="handleInputChange"
        name="numberOfPasswords"
        v-model="obj.numberOfPasswords"
      />
      <div class="button-container">
        <q-btn color="secondary" @click="create" size="1rem" label="Generate" />
      </div>
    </div>
    <div class="child-container results">
      <RenderPasswordsVue :passwords="obj.passwords" />
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

.slider {
  font-size: 2rem;
}
</style>
