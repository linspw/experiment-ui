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
