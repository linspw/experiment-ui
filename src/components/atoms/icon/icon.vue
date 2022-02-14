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
.h-icon {
  --h-icon--color: inherit;
  --h-icon--wrapper-color: var(--color-theme-secondary);
  --h-icon--wrapper-padding: var(--size-base-small);
  color: var(--h-icon--color);
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
      --h-icon--color: var(--color-theme-primary);
    }
    &-secondary {
      --h-icon--color: var(--color-theme-secondary);
    }
    &-tertiary {
      --h-icon--color: var(--color-theme-tertiary);
    }
    &-interactive {
      --h-icon--color: var(--color-theme-interactive);
    }
    &-grey {
      --h-icon--color: var(--color-theme-grey);
    }
    &-success {
      --h-icon--color: var(--color-theme-success);
    }
    &-danger {
      --h-icon--color: var(--color-theme-danger);
    }
    &-warn {
      --h-icon--color: var(--color-theme-warn);
    }
    &-info {
      --h-icon--color: var(--color-theme-info);
    }
    &-inverse {
      --h-icon--color: var(--color-theme-inverse);
    }
  }

  &--wrapper {
    &-circle {
      padding: var(--h-icon--wrapper-padding);
      background-color: var(--h-icon--wrapper-color);
      border-radius: var(--border-radius-circle);
    }

    &-rounded {
      padding: var(--h-icon--wrapper-padding);
      background-color: var(--h-icon--wrapper-color);
      border-radius: var(--border-radius-normal);
    }

    &-square {
      padding: var(--h-icon--wrapper-padding);
      background-color: var(--h-icon--wrapper-color);
    }
  }
}
</style>
