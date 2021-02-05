<template>
  <component
    :is="tag"
    :class="{
      ['a-text']: true,
      [`a-text--size-${size}`]: size != 'inherit',
      [`a-text--color-${color}`]: color != 'inherit',
      [`a-text--align-${align}`]: align != 'inherit',
      [`a-text--weight-${weight}`]: weight,
      [`a-text--italic`]: italic,
    }"
  >
    <slot />
  </component>
</template>

<script>
import { shouldBeOneOf } from 'vue-prop-validation-helper';

export default {
  props: {
    size: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
        'micro',
        'extra-small',
        'small',
        'medium',
        'large',
        'extra-large',
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
    tag: {
      type: String,
      default: 'p',
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
      default: 'regular',
      validator: shouldBeOneOf([
        'black',
        'extra-bold',
        'bold',
        'medium',
        'semi-bold',
        'regular',
        'light',
        'extra-light',
        'thin',
      ]),
    },
    italic: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/utils/breakpoints.scss';

.a-text {
  &--weight {
    &-black {
      font-weight: 900;
    }
    &-extra-bold {
      font-weight: 800;
    }
    &-bold {
      font-weight: 700;
    }
    &-semi-bold {
      font-weight: 600;
    }
    &-medium {
      font-weight: 500;
    }
    &-regular {
      font-weight: 400;
    }
    &-light {
      font-weight: 300;
    }
    &-extra-light {
      font-weight: 200;
    }
    &-thin {
      font-weight: 100;
    }
  }

  &--color {
    &-primary {
      color: var(--color-theme-primary);
    }
    &-secondary {
      color: var(--color-theme-secondary);
    }
    &-tertiary {
      color: var(--color-theme-tertiary);
    }
    &-interactive {
      color: var(--color-theme-interactive);
    }
    &-grey {
      color: var(--color-theme-grey);
    }
    &-success {
      color: var(--color-theme-success);
    }
    &-danger {
      color: var(--color-theme-danger);
    }
    &-warn {
      color: var(--color-theme-warn);
    }
    &-info {
      color: var(--color-theme-info);
    }
    &-inverse {
      color: var(--color-theme-inverse);
    }
  }

  &--size {
    &-micro {
      font-size: 10px;
    }
    &-extra-small {
      font-size: 12px;
    }
    &-small {
      font-size: 14px;
    }
    &-medium {
      font-size: 16px;
    }
    &-large {
      font-size: 18px;
    }
    &-extra-large {
      font-size: 20px;
    }
  }

  &--align {
    &-left {
      text-align: left;
    }
    &-center {
      text-align: center;
    }
    &-right {
      text-align: right;
    }
    &-justify {
      text-align: justify;
      text-justify: inter-word;
    }
  }

  &--italic {
    font-style: italic;
  }
}
</style>
