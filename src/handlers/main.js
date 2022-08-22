import HeadingVue from "@/components/Heading.vue";
import RandomPasswordVue from "@/components/RandomPassword.vue";
import SliderVue from "@/components/Slider.vue";
import { PasswordGenerator } from "../utils/RandomPasswordGenerator";
import { GeneratePasswords } from "@/utils/GeneratePasswords";
import CheckBox from "../components/CheckBox.vue";
import RenderPasswordsVue from "@/components/RenderPasswords.vue";
import NumberInput from "../components/NumberInput.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    HeadingVue,
    RandomPasswordVue,
    SliderVue,
    CheckBox,
    RenderPasswordsVue,
    NumberInput,
    Footer,
  },
  data() {
    return {
      obj: {
        passwords: [],
        isNumeric: false,
        specialChars: false,
        length: 8,
        numberOfPasswords: 18,
      },
      random: "",
    };
  },
  mounted() {
    this.random = PasswordGenerator();
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
