import { createApp } from 'vue';
import App from './App.vue';
import { Plugin } from '../dist/hyone-ui.umd';
import '../dist/hyone-ui.css';

createApp(App)
  .use(Plugin.HyONEPlugin)
  .mount('#app');
