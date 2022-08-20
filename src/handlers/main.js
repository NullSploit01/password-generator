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
        numberOfPasswords: 24,
      },
      random: '',
    };
  },
  mounted() {
    this.random = PasswordGenerator();
    console.log('');
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
