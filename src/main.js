import { createApp } from 'vue';
import App from './App.vue';
import { HyONEPlugin } from '@/plugins';

createApp(App)
  .use(HyONEPlugin)
  .mount('#app');
