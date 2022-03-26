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
    <i :class="internalIcon" />
  </component>
</template>

<script>
import { shouldBeOneOf } from '@utils/validations';

export default {
  name: 'HIcon',
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
      default: 'large',
      validator: shouldBeOneOf([
        'inherit',
        'medium',
        'large',
        'extra-large',
        'jumbo',
        'extra-jumbo',
        'giant',
        'extra-giant',
        'colossal',
        'extra-colossal',
        'mega',
        'extra-mega',
        'immense',
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
        'router-link',
      ]),
    },
    color: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
        'primary',
        'secondary',
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
  computed: {
    internalIcon() {
      return `${this.icon} fa-fw`;
    },
  },
};
</script>
