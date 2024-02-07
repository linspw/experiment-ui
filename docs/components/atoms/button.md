<script setup lang="ts">
import { HButton } from '@components/atoms'
</script>

## Button

### Default use:

<br>

<HButton>Ola</HButton>

Example:
```vue
<h-button @click="action">Hello Button</h-button>
```


### Colors:

<br>

<div style="display: flex; gap: 4px; flex-wrap: wrap;">
  <h-button color="primary">primary</h-button>
  <h-button color="secondary">secondary</h-button>
  <h-button color="success">success</h-button>
  <h-button color="danger">danger</h-button>
  <h-button color="warn">warn</h-button>
  <h-button color="info">info</h-button>
</div>

Example:
```vue
<h-button color="primary">primary</h-button>
<h-button color="secondary">secondary</h-button>
<h-button color="success">success</h-button>
<h-button color="danger">danger</h-button>
<h-button color="warn">warn</h-button>
<h-button color="info">info</h-button>
```


### Variantes:

<br>

<div style="display: flex; gap: 4px; flex-wrap: wrap;">
  <h-button variant="contained" color="primary">contained</h-button>
  <h-button variant="outlined" color="primary">outlined</h-button>
  <h-button variant="text" color="primary">text</h-button>
  <br>
  <h-button variant="contained" color="secondary">contained</h-button>
  <h-button variant="outlined" color="secondary">outlined</h-button>
  <h-button variant="text" color="secondary">text</h-button>
  <br>
  <h-button variant="contained" color="success">contained</h-button>
  <h-button variant="outlined" color="success">outlined</h-button>
  <h-button variant="text" color="success">text</h-button>
  <br>
  <h-button variant="contained" color="danger">contained</h-button>
  <h-button variant="outlined" color="danger">outlined</h-button>
  <h-button variant="text" color="danger">text</h-button>
  <br>
  <h-button variant="contained" color="warn">contained</h-button>
  <h-button variant="outlined" color="warn">outlined</h-button>
  <h-button variant="text" color="warn">text</h-button>
  <br>
  <h-button variant="contained" color="info">contained</h-button>
  <h-button variant="outlined" color="info">outlined</h-button>
  <h-button variant="text" color="info">text</h-button>
</div>

Example:
```vue
  <h-button variant="contained" color="primary">contained</h-button>
  <h-button variant="outlined" color="primary">outlined</h-button>
  <h-button variant="text" color="primary">text</h-button>
  <h-button variant="contained" color="secondary">contained</h-button>
  <h-button variant="outlined" color="secondary">outlined</h-button>
  <h-button variant="text" color="secondary">text</h-button>
  <h-button variant="contained" color="success">contained</h-button>
  <h-button variant="outlined" color="success">outlined</h-button>
  <h-button variant="text" color="success">text</h-button>
  <h-button variant="contained" color="danger">contained</h-button>
  <h-button variant="outlined" color="danger">outlined</h-button>
  <h-button variant="text" color="danger">text</h-button>
  <h-button variant="contained" color="warn">contained</h-button>
  <h-button variant="outlined" color="warn">outlined</h-button>
  <h-button variant="text" color="warn">text</h-button>
  <h-button variant="contained" color="info">contained</h-button>
  <h-button variant="outlined" color="info">outlined</h-button>
  <h-button variant="text" color="info">text</h-button>
```


### With icon:

<br>

<div style="display: flex; gap: 4px; flex-wrap: wrap;">
  <h-button icon-left="fas fa-home">icon-left</h-button>
  <h-button icon-right="fas fa-user">icon-right</h-button>
  <h-button icon-left="fas fa-home" icon-right="fas fa-user">icon-left and icon-right</h-button>
</div>


Examples:
```vue
  <h-button icon-left="fas fa-home">icon-left</h-button>
  <h-button icon-right="fas fa-user">icon-right</h-button>
  <h-button icon-left="fas fa-home" icon-right="fas fa-user">icon-left and icon-right</h-button>
```

### Sizes:

<br>

<div style="display: flex; gap: 4px; flex-wrap: wrap;">
  <h-button size="small">Small</h-button>
  <h-button size="medium">Medium</h-button>
</div>


Examples:
```vue
  <h-button size="small">Small</h-button>
  <h-button size="medium">Medium</h-button>
```





### Rounded:

<br>

<div style="display: flex; gap: 4px; flex-wrap: wrap;">
  <h-button rounded>Rounded</h-button>
  <h-button :rounded="false">Not rounded</h-button>
</div>


Examples:

```vue
  <h-button rounded>Rounded</h-button>
  <h-button :rounded="false">Not rounded</h-button>
```


### Loading

<br >

<h-button loading>Loading</h-button>

Examples:

```vue
<h-button loading>Loading</h-button>
```

### Accessible

<br >

<div style="display: flex; flex-direction: column; align-items: start;">
  <h-button accessible>Accessible</h-button>

  <h-button accessible>accessible</h-button>
</div>

Examples:

```vue
<h-button accessible>accessible</h-button>
<h-button accessible>accessible</h-button>
```


### Only Icon

<br >

<div style="display: flex;">
  <h-button icon-right="fas fa-user" only-icon />
</div>

Examples:

```vue
  <h-button icon-right="fas fa-user" only-icon />
```


### Behaviour

<br >

<div style="display: flex;">
  <h-button block>block</h-button>
</div>

Examples:

```vue
  <h-button block>block</h-button>
```


### All html attrs and disabled

<br >

<div style="display: flex; gap: 4px; flex-wrap: wrap;">
  <h-button id="my-specific-component">Id</h-button>
  <h-button disabled>disabled</h-button>
</div>

Examples:

```vue
  <h-button id="my-specific-component">Id</h-button>
  <h-button disabled>disabled</h-button>
```