<template>
  <component
    :is="tag"
    :class="{
      ['a-grid-container--padding']: padding,
      ['a-grid-container--dense']: dense,
    }"
    class="a-grid-container"
  >
    <slot />
  </component>
</template>

<script>
export default {
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
