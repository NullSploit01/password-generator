import { createApp } from 'vue';
import VueClipboard from 'vue-clipboard2';

VueClipboard.config.autoSetContainer = true; // add this line
import App from './App.vue';
import './assets/main.css';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';
const app = createApp(App).use(Quasar, quasarUserOptions);
app.use(VueClipboard);

app.mount('#app');
