<template>
  <component
    :is="tag"
    :class="{
      [`a-grid-item--behavior-${behavior}`]: behavior,
      [`a-grid-item--column-${column}`]: column,
      [`a-grid-item--row-${row}`]: row,
      ['a-grid-item--responsive']: responsive,
    }"
    class="a-grid-item"
  >
    <slot />
  </component>
</template>

<script>
export default {
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
