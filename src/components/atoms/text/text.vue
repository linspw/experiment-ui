<template>
  <component
    :is="tag"
    :class="{
      ['h-text']: true,
      [`h-text--variant-${variant}`]: variant != 'inherit',
      [`h-text--size-${size}`]: size != 'inherit',
      [`h-text--align-${align}`]: align != 'inherit',
      [`h-text--weight-${weight}`]: weight != 'inherit',
      [`h-text--behavior-uppercase`]: uppercase,
      [`h-text--behavior-lowercase`]: lowercase,
      [`h-text--behavior-capitalize`]: capitalize,
      [`h-text--behavior-italic`]: italic,
      [`h-text--behavior-ellipsis-nowrap`]: ellipsisNowrap,
      [`h-text--behavior-link`]: link,
      [`h-text--behavior-dynamic`]: dynamic,
      [`h-text--color-${color}`]: color != 'inherit',
      [`h-text--emphasis-${emphasis}`]: emphasis != 'inherit',
    }"
    :href="href"
    :to="href"
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
        'router-link',
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
    uppercase: {
      type: Boolean,
      default: false,
    },
    lowercase: {
      type: Boolean,
      default: false,
    },
    capitalize: {
      type: Boolean,
      default: false,
    },
    italic: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: null,
    },
    ellipsisNowrap: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
    dynamic: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
