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
      validator: shouldBeOneOf(["inherit", "primary", "secundary", "tertiary", "inverse"]),
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
        "extra-bold",
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
.v-title {
  font-family: 'Lato', sans-serif;

  &--weight {
    &-extra-bold {
      font-weight: 900;
    }
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
      font-weight: 300;
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
    }
  }
}
</style>
