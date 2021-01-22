<template>
  <div :class="{
    'a-icon': true,
    [`a-icon--size-${size}`]: size,
    [`a-icon--color-${color}`]: color,
  }">
    <i :class="icon"></i>
  </div>
</template>

<script>
import { shouldBeOneOf } from "vue-prop-validation-helper";

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "inherit",
      validator: shouldBeOneOf([
        "inherit",
        "extra-small",
        "small",
        "medium",
        "large",
        "extra-large",
      ]),
    },
    color: {
      type: String,
      default: "inherit",
      validator: shouldBeOneOf([
        "inherit",
        "primary",
        "secundary",
        "tertiary",
        "interactive",
        "inverse",
        "grey",
      ]),
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/styles/font-awesome/css/fontawesome.min.css';
@import '~@/styles/font-awesome/css/brands.min.css';
@import '~@/styles/font-awesome/css/solid.min.css';

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
      color: var(--colors-major-black);
    }
    &-secundary {
      color: var(--colors-minor-dark-blue);
    }
    &-tertiary {
      color: var(--colors-normal-dark-blue);
    }
    &-interactive {
      color: var(--colors-interactive-blue);
    }
    &-inverse {
      color: var(--colors-original-white);
    }
    &-grey {
      color: var(--colors-scale-grey-medium);
    }
  }
}
</style>