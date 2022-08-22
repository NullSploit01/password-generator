<style src="../../public/main.css"></style>

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
  <footer>
    <Footer />
  </footer>
</template>
<script src="../handlers/main.js"></script>
