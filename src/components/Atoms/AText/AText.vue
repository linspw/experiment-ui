<template>
  <component
    :is="tag"
    :class="{
      ['v-text']: true,
      [`v-text--size-${size}`]: size != 'inherit',
      [`v-text--color-${color}`]: color != 'inherit',
      [`v-text--align-${align}`]: align != 'inherit',
      [`v-text--weight-${weight}`]: weight,
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
      validator: shouldBeOneOf([
        "inherit",
        "primary",
        "secundary",
        "tertiary",
        "inverse",
        "grey",
      ]),
    },
    tag: {
      type: String,
      default: "p",
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
      default: "regular",
      validator: shouldBeOneOf([
        "bold",
        "semi-bold",
        "medium",
        "regular",
        "light",
        "thin",
      ]),
    },
  },
};
</script>

<style lang="scss">
.v-text {
  font-family: 'Lato', sans-serif;

  &--weight {
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
    &-thin {
      font-weight: 100;
    }
  }

  &--color {
    &-primary {
      color: var(--colors-major-black);
    }
    &-secundary {
      color: var(--colors-interactive-blue);
    }
    &-tertiary {
      color: var(--main-dark-blue);
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
      font-size: 10px;

      @media (min-width: $screen-desktop) {
        font-size: 12px;
      }
    }
    &-small {
      font-size: 12px;

      @media (min-width: $screen-desktop) {
        font-size: 14px;
      }
    }
    &-medium {
      font-size: 14px;

      @media (min-width: $screen-desktop) {
        font-size: 16px;
      }
    }
    &-large {
      font-size: 16px;

      @media (min-width: $screen-desktop) {
        font-size: 18px;
      }
    }
    &-extra-large {
      font-size: 18px;

      @media (min-width: $screen-desktop) {
        font-size: 20px;
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
    }
  }
}
</style>
