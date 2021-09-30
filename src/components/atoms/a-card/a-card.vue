<template>
  <component
    :is="tag"
    :class="{
      [`a-card`]: true,
      [`a-card--variant-${variant}`]: variant,
      [`a-card--elevation-${elevation}`]: elevation,
    }"
    v-on="$listeners"
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
