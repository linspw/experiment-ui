<template>
  <component
    :class="{
      [`a-card`]: true,
      [`a-card--${variant}`]: variant,
      [`a-card--${size}`]: size,
      [`a-card--${elevation}`]: elevation,
    }"
    :is="tag"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
    elevation: {
      type: String,
      default: "",
    },
    tag: {
      type: String,
      default: "div",
    },
  },
};
</script>

<style lang="scss">
.a-card {
  box-shadow: 0px 3px 6px rgba(156, 156, 156, 0.25);
  background-color: var(--colors-original-white);
  border-radius: 10px;
  padding: 24px;
  position: relative;

  &--high {
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.16);
  }
}
</style>
