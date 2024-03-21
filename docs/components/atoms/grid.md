<script setup lang="ts">
import { HGridContainer, HGridItem } from '@components/atoms';
</script>

# Grid

The layout is divided in two components, HGridContainer and HGridItem.
HGridContainer is responsible for wrapper the items which you want to organize in grid layout.
HGridItem is where you control the item wrapper in layout.

### Default use:

<br>

<h-grid-container style="background-color:blue;">
  <h-grid-item style="background-color:yellow;" column="4">yellow</h-grid-item>
  <h-grid-item style="background-color:red;" column="6">red</h-grid-item>
  <h-grid-item style="background-color:orange;" column="2">orange</h-grid-item>
  <h-grid-item style="background-color:green;" row="4">green</h-grid-item>
</h-grid-container>

```vue
<h-grid-container style="background-color:blue;">
  <h-grid-item style="background-color:yellow;" column="4">
    yellow
  </h-grid-item>
  
  <h-grid-item style="background-color:red;" column="6">
    red
  </h-grid-item>
  
  <h-grid-item style="background-color:orange;" column="2">
    orange
  </h-grid-item>
  
  <h-grid-item style="background-color:green;" row="4">
    green
  </h-grid-item>
</h-grid-container>
```


### Responsive use:

<br>

<h-grid-container style="background-color:blue;" responsive>
  <h-grid-item style="background-color:yellow;" column="4">yellow</h-grid-item>
  <h-grid-item style="background-color:red;" column="6">red</h-grid-item>
  <h-grid-item style="background-color:orange;" column="4" :responsive="false">orange</h-grid-item>
  <h-grid-item style="background-color:green;" column="6" :responsive="false">green</h-grid-item>
</h-grid-container>

```vue
<h-grid-container style="background-color:blue;" responsive>
  <h-grid-item style="background-color:yellow;" column="4">yellow</h-grid-item>
  <h-grid-item style="background-color:red;" column="6">red</h-grid-item>
  <h-grid-item style="background-color:orange;" column="4" :responsive="false">orange</h-grid-item>
  <h-grid-item style="background-color:green;" column="6" :responsive="false">green</h-grid-item>
</h-grid-container>
```


### With Padding:

<br>

<h-grid-container style="background-color:blue;" padding>
  <h-grid-item style="background-color:yellow;" column="4">yellow</h-grid-item>
</h-grid-container>


```vue
<h-grid-container style="background-color:blue;" padding>
  <h-grid-item style="background-color:yellow;" column="4">yellow</h-grid-item>
</h-grid-container>
```


### Dense use:

<br>

<h-grid-container style="background-color:blue;" dense>
  <h-grid-item style="background-color:yellow;" column="4">yellow</h-grid-item>
  <h-grid-item style="background-color:red;" column="6">red</h-grid-item>
  <h-grid-item style="background-color:red;" column="6">red</h-grid-item>
  <h-grid-item style="background-color:green;" column="2">green</h-grid-item>
</h-grid-container>

```vue
<h-grid-container style="background-color:blue;" dense>
  <h-grid-item style="background-color:yellow;" column="4">yellow</h-grid-item>
  <h-grid-item style="background-color:red;" column="6">red</h-grid-item>
  <h-grid-item style="background-color:red;" column="6">red</h-grid-item>
  <h-grid-item style="background-color:green;" column="2">green</h-grid-item>
</h-grid-container>
```