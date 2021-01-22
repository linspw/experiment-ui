<template>
  <a
    :class="{
      ['a-link']: true,
      [`a-link--size-${size}`]: size,
    }"
    v-bind="$attrs"
  >
    <slot />
  </a>
</template>

<script>
import { shouldBeOneOf } from "vue-prop-validation-helper";

export default {
  props: {
    size: {
      type: String,
      default: "inherit",
      validator: shouldBeOneOf([
        "inherit",
        "extra-small",
        "small",
        "medium",
        "large",
        "extra-large",
      ]),
    },
  },
};
</script>

<style lang="scss" scoped>
.a-link {
  color: var(--colors-interactive-blue);
  transition: color 250mx;
  font-weight: 500;

  &:hover {
    color: var(--colors-major-blue);
    text-decoration: underline;
  }
}
</style>
