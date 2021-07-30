<template>
  <component
    :is="tag"
    :class="{
      [`a-card`]: true,
      [`a-card--variant-${variant}`]: variant,
      [`a-card--${size}`]: size,
      [`a-card--elevation-${elevation}`]: elevation,
    }"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    elevation: {
      type: String,
      default: 'medium',
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
};
</script>

<style lang="scss">
.a-card {
  --a-card--padding: var(--size-large);
  --a-card--background-color: var(--colors-original-white);

  background-color: var(--a-card--background-color);
  border-radius: var(--border-radius-normal);
  padding: var(--a-card--padding);
  position: relative;

  &--elevation {
    &-low {
      box-shadow: var(--shadow-elevation-01);
    }

    &-medium {
      box-shadow: var(--shadow-elevation-02);
    }

    &-high {
      box-shadow: var(--shadow-elevation-03);
    }
  }

  &--variant {
    &-success {
      --a-card--background-color: var(--color-theme-success);
    }

    &-info {
      --a-card--background-color: var(--color-theme-info);
    }

    &-danger {
      --a-card--background-color: var(--color-theme-danger);
    }

    &-warn {
      --a-card--background-color: var(--color-theme-warn);
    }

    &-primary {
      --a-card--background-color: var(--color-theme-primary);
    }

    &-secondary {
      --a-card--background-color: var(--color-theme-secondary);
    }

    &-tertiary {
      --a-card--background-color: var(--color-theme-tertiary);
    }
  }
}
</style>
