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

<script>
import { shouldBeOneOf } from '@utils/validations';
import {
  gridContainerTypes,
} from '@assets/constants';

export default {
  name: 'HGridContainer',
  provide() {
    return {
      responsive: this.responsive,
    };
  },
  props: {
    tag: {
      type: String,
      default: 'div',
      validator: shouldBeOneOf(gridContainerTypes),
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
      default: null,
    },
  },
};
</script>

<style lang="scss">
:root {
  --grid-column-gap: var(--size-base-large);
  --grid-row-gap: var(--size-base-large);
  --grid-padding: 0;
  --grid-auto-flow: row;
}

.h-grid-container {
  column-gap: var(--grid-column-gap);
  display: grid;
  grid-auto-flow: var(--grid-auto-flow);
  grid-template-columns: repeat(12, 1fr);
  padding: var(--grid-padding);
  row-gap: var(--grid-row-gap);
  width: 100%;
}

.h-grid-container--padding {
  --grid-padding: var(--size-base-large);
}

.h-grid-container--dense {
  --grid-auto-flow: dense;
}

</style>
