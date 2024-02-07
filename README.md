<h1 align="center">Experiment UI [WIP]</h1>

Experiment UI - Library write in Vue 3 that will assist you in your project, 
providing visual components to facilitate the development of your application.

[![Netlify Status](https://api.netlify.com/api/v1/badges/eacbad6b-41f2-4919-9f67-0f6c4dedfaf8/deploy-status)](https://app.netlify.com/sites/hyone-core-ui/deploys)
[![Release - CI](https://github.com/hyone-org/core-ui/actions/workflows/release.yml/badge.svg)](https://github.com/hyone-org/core-ui/actions/workflows/release.yml)

### Installation

```
# If you use npm: 
npm i experiment-ui

# Or if you use Yarn: 
yarn add experiment-ui

# Or if you use pnpm:
pnpm add experiment-ui
```

### Use

After installing, add ExperimentUI to your vue instance.

- In main js/ts:

```ts
import { createApp } from 'vue';
import { ExperimentUI } from 'experiment-ui';
import App from './app.vue';

createApp
  .use(ExperimentUI)
  .mount('#root');
```

- In template:

```vue
<template>
  <h-button>My button</h-button>
</template>
```

### Documentation
[Core UI Doc](https://hyone-core-ui.netlify.app/)

### Contributing

Guides:
[Click here, and discovery how to develop](CONTRIBUTING.md)
