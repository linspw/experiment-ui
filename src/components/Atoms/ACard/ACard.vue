<template>
  <component
    :class="{
      [`a-card`]: true,
      [`a-card--variant-${variant}`]: variant,
      [`a-card--${size}`]: size,
      [`a-card--elevation-${elevation}`]: elevation,
    }"
    :is="tag"
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
  background-color: var(--colors-original-white);
  border-radius: 10px;
  padding: 24px;
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
      background-color: var(--colors-interactive-green);
    }

    &-info {
      background-color: var(--colors-major-blue);
    }

    &-danger {
      background-color: var(--colors-interactive-normal-red);
    }

    &-alert {
      background-color: var(--colors-normal-yellow);
    }

    &-dark {
      background-color: var(--colors-minor-dark-blue);
    }
  }
}
</style>
