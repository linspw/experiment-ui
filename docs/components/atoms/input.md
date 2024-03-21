<script setup lang="ts">
import { reactive } from 'vue'
import { HInput } from '@components/atoms';

const state = reactive({
  usingNormalData: '',
  usingVmodel: '',
})

const handleInput = (value: string) => {
  console.log('Input value:', value);
};
const handleInputText = ($event: string) => {
  state.usingNormalData = $event
}
</script>

# Input

### Default use:

<br>

<h-input type="text" />

Example:
```vue
<h-input type="text" />
```

### Sizes:

<br>
<div style="display: flex; gap: 4px; flex-wrap: wrap;">
  <h-input type="text" size="small" placeholder="Small" />
  <h-input type="text" size="medium" placeholder="Medium" />
</div>

Example:

```vue
<h-input type="text" size="small" placeholder="Small" />

<h-input type="text" size="medium" placeholder="Medium" />
```


### Attributes (placeholder):

<br>

<h-input type="text" placeholder="Example" />

Example:

```vue
<h-input type="text" placeholder="Example" />
```

### Icons:

<br>

<div style="display: flex; gap: 4px; flex-wrap: wrap;">
  <h-input type="text" icon-left="fas fa-user" placeholder="Icon Left" />
  <h-input type="text" icon-right="fas fa-user" placeholder="Icon Right" />
  <h-input type="text" icon-left="fas fa-user" icon-right="fas fa-user" placeholder="Both Icons" />
  <h-input type="text" icon-left="fas fa-user" icon-right="fas fa-user" icon-left-color="success" icon-right-color="success" placeholder="Colored Icons" />
  <h-input type="text" icon-left="fas fa-user" icon-left-color="success" @click-icon-left="handleInput" icon-left-tag="button" placeholder="Clickable Icon" />
</div>

Example:


```vue
<h-input type="text" icon-left="fas fa-user" placeholder="Icon Left" />
<h-input type="text" icon-right="fas fa-user" placeholder="Icon Right" />
<h-input type="text" icon-left="fas fa-user" icon-right="fas fa-user" placeholder="Both Icons" />
<h-input type="text" icon-left="fas fa-user" icon-right="fas fa-user" icon-left-color="success" icon-right-color="success" placeholder="Colored Icons" />
<h-input type="text" icon-left="fas fa-user" icon-left-color="success" @click-icon-left="handleInput" icon-left-tag="button" placeholder="Clickable Icon" />
```


### Types:

<br>

<div style="display: flex; gap: 4px; flex-wrap: wrap;">
  <h-input type="text" placeholder="Text" />
  <h-input type="number" placeholder="Number" />
  <h-input type="date" />
</div>

Example:

```vue
<h-input type="text" placeholder="Text" />
<h-input type="number" placeholder="Number" />
<h-input type="date" />
```

### Behaviors:

<br>

<div style="display: flex; gap: 4px; flex-wrap: wrap;">
  <h-input type="text" icon="fas fa-user" behavior="default" placeholder="Default Behavior" />
  <h-input type="text" icon="fas fa-user" block placeholder="Block Behavior" />
  <h-input type="text" icon="fas fa-user" is-disabled placeholder="Disabled Behavior" disabled />
</div>

Example:

```vue
<h-input type="text" icon="fas fa-user" behavior="default" placeholder="Default Behavior" />
<h-input type="text" icon="fas fa-user" block placeholder="Block Behavior" />
<h-input type="text" icon="fas fa-user" is-disabled placeholder="Disabled Behavior" disabled />
```


### With Value and Listener (controlled use):

<br>

<div style="display: flex; gap: 4px; flex-wrap: wrap;">
  <h-input type="text" :value="state.usingNormalData" @input="handleInputText" placeholder="Using Normal Data" />
  <span>{{ state.usingNormalData }}</span>
  <h-input type="text" v-model="state.usingVmodel" placeholder="Using v-model" />
  <span>{{ state.usingVmodel }}</span>
</div>

Example:

```vue
<template>
  <h-input type="text" :value="state.usingNormalData" @input="handleInputText" placeholder="Using Normal Data" />
  <span>{{ usingNormalData }}</span>

  <h-input type="text" v-model="state.usingVmodel" placeholder="Using v-model" />
  <span>{{ state.usingVmodel }}</span>
</template>

<script setup lang="ts">
const handleInputText = ($event: string) => {
  state.usingNormalData = $event
}

const state = reactive({
  usingNormalData: '',
  usingVmodel: '',
})
</script>
```

### All html attrs:

<br>

<div style="display: flex; gap: 4px; flex-wrap: wrap;">
  <h-input id="my-specific-component" placeholder="Id" />
</div>

Example:

```vue
<h-input id="my-specific-component" placeholder="Id" />
```
