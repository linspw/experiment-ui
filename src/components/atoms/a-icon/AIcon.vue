<template>
  <div
    :class="{
      'a-icon': true,
      [`a-icon--size-${size}`]: size,
      [`a-icon--color-${color}`]: color,
    }"
  >
    <i :class="icon" />
  </div>
</template>

<script>
import { shouldBeOneOf } from 'vue-prop-validation-helper';

export default {
  props: {
    icon: {
      type: String,
      required: true,
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
  position: relative;
  display: inline-flex;

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
}
</style>
