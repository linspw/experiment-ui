<h1 align="center">Experiment UI [WIP]</h1>

Experiment UI - Library write in Vue 3 that will assist you in your project, 
providing visual components to facilitate the development of your application.

[![Release - CI](https://github.com/linspw/experiment-ui/actions/workflows/release.yml/badge.svg)](https://github.com/linspw/experiment-ui/actions/workflows/release.yml)

### Installation

```
# If you use NPM: 
npm i experiment-ui

# Or if you use Yarn: 
yarn add experiment-ui

# Or if you use PNPM: 
pnpm add experiment-ui
```

### Use

After installing, add ExperimentUI to your vue instance.

- In main js:

```js
import { createApp } from 'vue';
import { ExperimentUI } from 'experiment-ui';
import App from './app.vue';

createApp
  .use(ExperimentUI)
  .mount('#root');
```

- In template:

```html
<template>
  <h-button>My button</h-button>
</template>
```

### Documentation
[Experiment UI Doc](https://linspw.github.io/experiment-ui/)
