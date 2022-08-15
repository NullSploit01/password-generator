import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueClipboard from 'vue-clipboard2';

VueClipboard.config.autoSetContainer = true; // add this line
import App from './App.vue';
import './assets/main.css';
const app = createApp(App);
app.use(VueClipboard);

app.use(createPinia());

app.mount('#app');
