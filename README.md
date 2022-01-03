<h1 align="center">Welcome to Core UI!</h1>

Core UI - Library write in Vue 3 that will assist you in your project, 
providing visual components to facilitate the development of your application.

[![Netlify Status](https://api.netlify.com/api/v1/badges/eacbad6b-41f2-4919-9f67-0f6c4dedfaf8/deploy-status)](https://app.netlify.com/sites/hyone-core-ui/deploys)
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
import HyOneCoreUI from '@hyone/core-ui';
import App from './app.vue'

createApp
  .use(HyOneCoreUI)
  .mount('#root');
```

- In template:

```html
<template>
  <AButton>Foi</AButton>
</template>
```

### Live documentation
[Core UI Doc](https://hyone-core-ui.netlify.app/)
### Contributing

Guides:
[Click here, and discovery how to develop](docs/CONTRIBUTING.md)
