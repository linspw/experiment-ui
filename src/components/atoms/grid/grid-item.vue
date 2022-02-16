<template>
  <component
    :is="tag"
    :class="{
      [`h-grid-item--behavior-${behavior}`]: behavior,
      [`h-grid-item--column-${column}`]: column,
      [`h-grid-item--row-${row}`]: row,
      ['h-grid-item--responsive']: responsive,
    }"
    class="h-grid-item"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'HGridItem',
  props: {
    behavior: {
      type: String,
      default: null,
    },
    column: {
      type: [Number, String],
      default: 12,
    },
    row: {
      type: [Number, String],
      default: 1,
    },
    tag: {
      type: String,
      default: 'div',
    },
    responsive: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
