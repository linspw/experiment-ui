<template>
  <component
    :is="tag"
    :class="{
      ['v-title']: true,
      [`v-title--size-${size}`]: size != 'inherit',
      [`v-title--color-${color}`]: color != 'inherit',
      [`v-title--align-${align}`]: align != 'inherit',
      [`v-title--weight-${weight}`]: weight,
    }"
  >
    <slot />
  </component>
</template>

<script>
import { shouldBeOneOf } from "vue-prop-validation-helper";

export default {
  props: {
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
      validator: shouldBeOneOf(["inherit", "primary", "secundary", "tertiary", "interactive", "inverse", "grey"]),
    },
    tag: {
      type: String,
      default: "strong",
    },
    align: {
      type: String,
      default: "inherit",
      validator: shouldBeOneOf([
        "inherit",
        "left",
        "right",
        "center",
        "justify",
      ]),
    },
    weight: {
      type: String,
      default: "bold",
      validator: shouldBeOneOf([
        "bold",
        "medium",
        "regular",
      ]),
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/utils/breakpoints.scss';

.v-title {
  &--weight {
    &-bold {
      font-weight: 700;
    }
    &-medium {
      font-weight: 500;
    }
    &-regular {
      font-weight: 400;
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

  &--size {
    &-extra-small {
      font-size: 16px;

      @media (min-width: $screen-desktop) {
        font-size: 18px;
      }
    }
    &-small {
      font-size: 18px;

      @media (min-width: $screen-desktop) {
        font-size: 20px;
      }
    }
    &-medium {
      font-size: 20px;

      @media (min-width: $screen-desktop) {
        font-size: 22px;
      }
    }
    &-large {
      font-size: 22px;

      @media (min-width: $screen-desktop) {
        font-size: 24px;
      }
    }
    &-extra-large {
      font-size: 26px;

      @media (min-width: $screen-desktop) {
        font-size: 28px;
      }
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
}
</style>
