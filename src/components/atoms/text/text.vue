<template>
  <component
    :is="tag"
    :class="{
      ['h-text']: true,
      [`h-text--variant-${variant}`]: variant != 'inherit',
      [`h-text--size-${size}`]: size != 'inherit',
      [`h-text--align-${align}`]: align != 'inherit',
      [`h-text--weight-${weight}`]: weight != 'inherit',
      [`h-text--behavior-italic`]: italic,
      [`h-text--color-${color}`]: color != 'inherit',
      [`h-text--emphasis-${emphasis}`]: emphasis != 'inherit',
    }"
  >
    <slot />
  </component>
</template>

<script>
import { shouldBeOneOf } from '@utils/validations';

export default {
  name: 'HText',
  props: {
    size: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
        'nano',
        'micro',
        'extra-small',
        'small',
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
    variant: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'button',
        'caption',
        'overline',
      ]),
    },
    tag: {
      type: String,
      default: 'p',
      validator: shouldBeOneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span',
        'div',
        'a',
        'strong',
        'caption',
      ]),
    },
    align: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
        'left',
        'right',
        'center',
        'justify',
      ]),
    },
    weight: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
        'black',
        'extra-bold',
        'bold',
        'semi-bold',
        'medium',
        'regular',
        'light',
        'extra-light',
        'thin',
      ]),
    },
    emphasis: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
        'low',
        'medium',
        'high',
      ]),
    },
    italic: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
