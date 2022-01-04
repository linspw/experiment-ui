<template>
  <component
    :is="tag"
    :class="{
      'h-icon': true,
      [`h-icon--size-${size}`]: size,
      [`h-icon--color-${color}`]: color !== 'inherit',
      [`h-icon--wrapper-${wrapper}`]: wrapper !== 'default',
    }"
  >
    <i :class="icon" />
  </component>
</template>

<script>
import { shouldBeOneOf } from 'vue-prop-validation-helper';

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    wrapper: {
      type: String,
      default: 'default',
      validator: shouldBeOneOf([
        'default',
        'circle',
        'rounded',
        'square',
      ]),
    },
    size: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
        'extra-small',
        'small',
        'medium',
        'large',
        'extra-large',
      ]),
    },
    tag: {
      type: String,
      default: 'div',
      validator: shouldBeOneOf([
        'div',
        'span',
        'button',
        'a',
      ]),
    },
    color: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
        'primary',
        'secondary',
        'tertiary',
        'interactive',
        'grey',
        'success',
        'danger',
        'warn',
        'info',
        'inverse',
      ]),
    },
  },
};
</script>
