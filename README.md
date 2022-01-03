<h1 align="center">Welcome to Core UI!</h1>

Core UI - Library write in Vue 3 that will assist you in your project, 
providing visual components to facilitate the development of your application.

### Installation

```
# If you use npm: 
npm i @hyone/core-ui
# Or if you use Yarn: 
yarn add @hyone/core-ui
```

### Use

After installing, add HyONEPlugin to your vue instance.

- In main js:
```js
import { createApp } from 'vue';
import '@hyone/core-ui/dist/lib/core-ui.css';
import { HyONEPlugin } from '@hyone/core-ui';
import App from './app.vue'

createApp
  .use(HyONEPlugin)
  .mount('#root');
```

- In template:

```html
<template>
  <AButton>Foi</AButton>
</template>
```

### Live documentation
[Core UI Doc](https://core-ui.netlify.app/)
### Contributing

Guides:
[Click here, and discovery how to develop](docs/CONTRIBUTING.md)
