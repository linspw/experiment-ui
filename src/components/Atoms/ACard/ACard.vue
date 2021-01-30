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

<style lang="scss" scoped>
.a-card {
  --a-card--padding: 24px;
  background-color: var(--colors-original-white);
  border-radius: 10px;
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
      background-color: var(--color-theme-success);
    }

    &-info {
      background-color: var(--color-theme-info);
    }

    &-danger {
      background-color: var(--color-theme-danger);
    }

    &-warn {
      background-color: var(--color-theme-warn);
    }

    &-primary {
      background-color: var(--color-theme-primary);
    }

    &-secondary {
      background-color: var(--color-theme-secondary);
    }

    &-tertiary {
      background-color: var(--color-theme-tertiary);
    }

    &-interactive {
      background-color: var(--color-theme-interactive);
    }
  }
}
</style>
