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
export default {
  name: 'HGridContainer',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    padding: {
      type: Boolean,
      default: false,
    },
    dense: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.h-grid-container {
  --grid-column-gap: var(--size-base-large);
  --grid-row-gap: var(--size-base-large);
  --grid-padding: 0;
  --grid-auto-flow: row;

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
