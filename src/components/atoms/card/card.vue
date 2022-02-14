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
import { shouldBeOneOf } from '@utils/validations';

export default {
  name: 'HCard',
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

<style lang="scss">
.h-card {
  --h-card--background-color: transparent;
  --h-card--border: none;
  --h-card--box-shadow: none;
  --h-card--padding: var(--size-base-large);
  --h-card--color: inherit;
  --h-card--border-radius: var(--border-radius-normal);

  background-color: var(--h-card--background-color);
  border: var(--h-card--border);
  border-radius: var(--h-card--border-radius);
  box-shadow: var(--h-card--box-shadow);
  color: var(--h-card--color);
  padding: var(--h-card--padding);
  position: relative;

  &--elevation {
    &-low {
      --h-card--box-shadow: var(--shadow-elevation-01);
    }

    &-medium {
      --h-card--box-shadow: var(--shadow-elevation-02);
    }

    &-high {
      --h-card--box-shadow: var(--shadow-elevation-03);
    }
  }

  &--variant {
    &-default {
      --h-card--background-color: var(--colors-original-white);
    }

    &-success {
      --h-card--background-color: var(--color-theme-success);
    }

    &-info {
      --h-card--background-color: var(--color-theme-info);
    }

    &-danger {
      --h-card--background-color: var(--color-theme-danger);
    }

    &-warn {
      --h-card--background-color: var(--color-theme-warn);
    }

    &-primary {
      --h-card--background-color: var(--color-theme-primary);
    }

    &-secondary {
      --h-card--background-color: var(--color-theme-secondary);
    }

    &-tertiary {
      --h-card--background-color: var(--color-theme-tertiary);
    }
  }
}
</style>
