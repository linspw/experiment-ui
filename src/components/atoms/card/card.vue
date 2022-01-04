<template>
  <component
    :is="tag"
    :class="{
      [`h-card`]: true,
      [`h-card--variant-${variant}`]: variant,
      [`h-card--elevation-${elevation}`]: elevation,
    }"
  >
    <slot />
  </component>
</template>

<script>
import { shouldBeOneOf } from 'vue-prop-validation-helper';

export default {
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: shouldBeOneOf([
        'default',
        'primary',
        'secondary',
        'tertiary',
        'warn',
        'success',
        'danger',
        'info',
      ]),
    },
    elevation: {
      type: String,
      default: 'medium',
      validator: shouldBeOneOf([
        'low',
        'medium',
        'high',
      ]),
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
};
</script>
