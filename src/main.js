import { createApp } from 'vue';
import App from './App.vue';
import { HyONEPlugin } from '../dist/hyone-ui.umd';
import '../dist/hyone-ui.css';

createApp(App)
  .use(HyONEPlugin)
  .mount('#app');
