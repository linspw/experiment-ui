<template>
  <component
    :is="tag"
    :class="{
      ['h-grid-container--padding']: padding,
      ['h-grid-container--dense']: dense,
    }"
    class="h-grid-container"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import { shouldBeOneOf } from '@utils/validations';
import { GridContainerKey } from './grid-container-key';

const $props = defineProps({
  tag: {
    type: String,
    default: 'div',
    validator: shouldBeOneOf([
      'div',
      'article',
      'form',
      'button',
      'a',
      'router-link',
      'header',
      'footer',
      'span',
    ]),
  },
  padding: {
    type: Boolean,
    default: false,
  },
  dense: {
    type: Boolean,
    default: false,
  },
  responsive: {
    type: Boolean,
    default: true,
  },
  columns: {
    type: Number,
    default: 12,
  },
});

provide(GridContainerKey, {gridContainerProps: $props});
</script>

<style lang="scss">
:root {
  --grid-column-gap: var(--size-scalable-large);
  --grid-row-gap: var(--size-scalable-large);
  --grid-padding: 0;
  --grid-auto-flow: row;
}

.h-grid-container {
  column-gap: var(--grid-column-gap);
  display: grid;
  grid-auto-flow: var(--grid-auto-flow);
  grid-template-columns: repeat(var(--grid-column-number, v-bind('columns')), 1fr);
  padding: var(--grid-padding);
  row-gap: var(--grid-row-gap);
  width: 100%;
  position: relative;
}

.h-grid-container--padding {
  --grid-padding: var(--size-scalable-large);
}

.h-grid-container--dense {
  --grid-auto-flow: dense;
}

</style>
@/utils/validations