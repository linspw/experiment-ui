<h1 align="center">Welcome to Core UI!</h1>

Core UI - Library write in Vue 3 that will assist you in your project, 
providing visual components to facilitate the development of your application.

[![Netlify Status](https://api.netlify.com/api/v1/badges/eacbad6b-41f2-4919-9f67-0f6c4dedfaf8/deploy-status)](https://app.netlify.com/sites/hyone-core-ui/deploys)
[![Release - CI](https://github.com/hyone-org/core-ui/actions/workflows/release.yml/badge.svg)](https://github.com/hyone-org/core-ui/actions/workflows/release.yml)

### Installation

```
# If you use npm: 
npm i @hyone/core-ui
# Or if you use Yarn: 
yarn add @hyone/core-ui
```

### Use

After installing, add CoreUI to your vue instance.

- In main js:
```js
import { createApp } from 'vue';
import { CoreUI } from '@hyone/core-ui';
import App from './app.vue';

createApp
  .use(CoreUI)
  .mount('#root');
```

- In template:

```html
<template>
  <h-button>My button</h-button>
</template>
```

### Documentation
[Core UI Doc](https://hyone-core-ui.netlify.app/)

### Contributing

Guides:
[Click here, and discovery how to develop](CONTRIBUTING.md)
