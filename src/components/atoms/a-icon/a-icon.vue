<template>
  <component
    :is="tag"
    :class="{
      'a-icon': true,
      [`a-icon--size-${size}`]: size,
      [`a-icon--color-${color}`]: color !== 'inherit',
      [`a-icon--wrapper-${wrapper}`]: wrapper !== 'default',
    }"
    v-bind="$attrs"
  >
    <i :class="icon" />
  </component>
</template>

<script>
import { shouldBeOneOf } from 'vue-prop-validation-helper';

export default {
  inheritAttrs: false,
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

<style lang="scss">
.a-icon {
  --a-icon--color: inherit;
  --a-icon--wrapper-color: var(--color-theme-secondary);
  --a-icon--wrapper-padding: var(--size-small);
  color: var(--a-icon--color);
  display: inline-flex;
  position: relative;

  &--size {
    &-extra-small {
      font-size: 8px;
      min-height: 8px;
    }
    &-small {
      font-size: 16px;
      min-height: 16px;
    }
    &-medium {
      font-size: 24px;
      min-height: 24px;
    }
    &-large {
      font-size: 32px;
      min-height: 32px;
    }
    &-extra-large {
      font-size: 40px;
      min-height: 40px;
    }
  }

  &--color {
    &-primary {
      --a-icon--color: var(--color-theme-primary);
    }
    &-secondary {
      --a-icon--color: var(--color-theme-secondary);
    }
    &-tertiary {
      --a-icon--color: var(--color-theme-tertiary);
    }
    &-interactive {
      --a-icon--color: var(--color-theme-interactive);
    }
    &-grey {
      --a-icon--color: var(--color-theme-grey);
    }
    &-success {
      --a-icon--color: var(--color-theme-success);
    }
    &-danger {
      --a-icon--color: var(--color-theme-danger);
    }
    &-warn {
      --a-icon--color: var(--color-theme-warn);
    }
    &-info {
      --a-icon--color: var(--color-theme-info);
    }
    &-inverse {
      --a-icon--color: var(--color-theme-inverse);
    }
  }

  &--wrapper {
    &-circle {
      padding: var(--a-icon--wrapper-padding);
      background-color: var(--a-icon--wrapper-color);
      border-radius: var(--border-radius-circle);
    }

    &-rounded {
      padding: var(--a-icon--wrapper-padding);
      background-color: var(--a-icon--wrapper-color);
      border-radius: var(--border-radius-normal);
    }

    &-square {
      padding: var(--a-icon--wrapper-padding);
      background-color: var(--a-icon--wrapper-color);
    }
  }
}
</style>
