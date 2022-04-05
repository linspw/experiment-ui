<template>
  <component
    :is="tag"
    :class="{
      ['h-text']: true,
      [`h-text--variant-${variant}`]: variant != 'inherit',
      [`h-text--size-${size}`]: size != 'inherit',
      [`h-text--align-${align}`]: align != 'inherit',
      [`h-text--weight-${weight}`]: weight != 'inherit',
      [`h-text--behavior-uppercase`]: uppercase,
      [`h-text--behavior-lowercase`]: lowercase,
      [`h-text--behavior-capitalize`]: capitalize,
      [`h-text--behavior-italic`]: italic,
      [`h-text--behavior-ellipsis-nowrap`]: ellipsisNowrap,
      [`h-text--behavior-link`]: link,
      [`h-text--behavior-dynamic`]: dynamic,
      [`h-text--color-${color}`]: color != 'inherit',
      [`h-text--emphasis-${emphasis}`]: emphasis != 'inherit',
    }"
    :href="href"
    :to="href"
  >
    <slot />
  </component>
</template>

<script>
import { shouldBeOneOf } from '@utils/validations';
import {
  textWeights, textTypes, textSizes, textColors, textVariants, textAligns, textEmphasis,
} from '@assets/constants';

export default {
  name: 'HText',
  props: {
    size: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf(textSizes),
    },
    color: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf(textColors),
    },
    variant: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf(textVariants),
    },
    tag: {
      type: String,
      default: 'p',
      validator: shouldBeOneOf(textTypes),
    },
    align: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf(textAligns),
    },
    weight: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf(textWeights),
    },
    emphasis: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf(textEmphasis),
    },
    uppercase: {
      type: Boolean,
      default: false,
    },
    lowercase: {
      type: Boolean,
      default: false,
    },
    capitalize: {
      type: Boolean,
      default: false,
    },
    italic: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: null,
    },
    ellipsisNowrap: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
    dynamic: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">

:root {
  /* HText */
  --h-text--color: inherit;
  --h-text--font-size: inherit;
  --h-text--font-style: inherit;
  --h-text--font-weight: inherit;
}

.h-text {
  color: var(--h-text--color);
  font-size: var(--h-text--font-size);
  font-style: var(--h-text--font-style);
  font-weight: var(--h-text--font-weight);
  word-wrap: break-word;

  &--variant {
    &-h1 {
      --h-text--font-size: 96px;
      letter-spacing: -1.5px;
      --h-text--font-weight: 100;
    }
    &-h2 {
      --h-text--font-size: 60px;
      letter-spacing: -0.5px;
      --h-text--font-weight: 100;
    }
    &-h3 {
      --h-text--font-size: 48px;
      letter-spacing: 0px;
      --h-text--font-weight: 400;
    }
    &-h4 {
      --h-text--font-size: 34px;
      letter-spacing: 0.25px;
      --h-text--font-weight: 400;
    }
    &-h5 {
      --h-text--font-size: 24px;
      letter-spacing: 0px;
      --h-text--font-weight: 400;
    }
    &-h6 {
      --h-text--font-size: 20px;
      letter-spacing: 0.15px;
      --h-text--font-weight: 500;
    }
    &-subtitle1 {
      --h-text--font-size: 16px;
      letter-spacing: 0.15px;
      --h-text--font-weight: 400;
    }
    &-subtitle2 {
      --h-text--font-size: 14px;
      letter-spacing: 0.1px;
      --h-text--font-weight: 500;
    }
    &-body1 {
      --h-text--font-size: 16px;
      letter-spacing: 0.5px;
      --h-text--font-weight: 400;
    }
    &-body2 {
      --h-text--font-size: 14px;
      letter-spacing: 0.25px;
      --h-text--font-weight: 400;
    }
    &-button {
      --h-text--font-size: 14px;
      letter-spacing: 1.25px;
      --h-text--font-weight: 400;
      text-transform: uppercase;
    }
    &-caption {
      --h-text--font-size: 12px;
      letter-spacing: 0.4px;
      --h-text--font-weight: 400;
    }
    &-overline {
      --h-text--font-size: 10px;
      letter-spacing: 1.5px;
      --h-text--font-weight: 400;
    }
  }

  &--weight {
    &-black {
      --h-text--font-weight: 900;
    }
    &-extra-bold {
      --h-text--font-weight: 800;
    }
    &-bold {
      --h-text--font-weight: 700;
    }
    &-semi-bold {
      --h-text--font-weight: 600;
    }
    &-medium {
      --h-text--font-weight: 500;
    }
    &-regular {
      --h-text--font-weight: 400;
    }
    &-light {
      --h-text--font-weight: 300;
    }
    &-extra-light {
      --h-text--font-weight: 200;
    }
    &-thin {
      --h-text--font-weight: 100;
    }
  }

  &--color {
    &-primary {
      --h-text--color: var(--color-theme-primary);
    }
    &-secondary {
      --h-text--color: var(--color-theme-secondary);
    }
    &-interactive {
      --h-text--color: var(--color-theme-secondary);
      &:hover {
        --h-text--color: var(--color-theme-info);
      }
    }
    &-grey {
      --h-text--color: var(--color-theme-grey);
    }
    &-success {
      --h-text--color: var(--color-theme-success);
    }
    &-danger {
      --h-text--color: var(--color-theme-danger);
    }
    &-warn {
      --h-text--color: var(--color-theme-warn);
    }
    &-info {
      --h-text--color: var(--color-theme-info);
    }
    &-inverse {
      --h-text--color: var(--color-theme-inverse);
    }
  }

  &--emphasis {
    &-high {
      opacity: 0.87;
    }
    &-medium {
      opacity: 0.60;
    }
    &-low {
      opacity: 0.38;
    }
  }

  &--size {
    &-nano {
      --h-text--font-size: var(--size-scalable-nano);
    }
    &-micro {
      --h-text--font-size: var(--size-scalable-micro);
    }
    &-extra-small {
      --h-text--font-size: var(--size-scalable-extra-small);
    }
    &-small {
      --h-text--font-size: var(--size-scalable-small);
    }
    &-medium {
      --h-text--font-size: var(--size-scalable-medium);
    }
    &-large {
      --h-text--font-size: var(--size-scalable-large);
    }
    &-extra-large {
      --h-text--font-size: var(--size-scalable-extra-large);
    }
    &-jumbo {
      --h-text--font-size: var(--size-scalable-jumbo);
    }
    &-extra-jumbo {
      --h-text--font-size: var(--size-scalable-extra-jumbo);
    }
    &-giant {
      --h-text--font-size: var(--size-scalable-giant);
    }
    &-extra-giant {
      --h-text--font-size: var(--size-scalable-extra-giant);
    }
    &-colossal {
      --h-text--font-size: var(--size-scalable-colossal);
    }
    &-extra-colossal {
      --h-text--font-size: var(--size-scalable-extra-colossal);
    }
    &-mega {
      --h-text--font-size: var(--size-scalable-mega);
    }
    &-extra-mega {
      --h-text--font-size: var(--size-scalable-extra-mega);
    }
    &-immense {
      --h-text--font-size: var(--size-scalable-immense);
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

  &--behavior {
    &-uppercase {
      text-transform: uppercase;
    }
    &-lowercase {
      text-transform: lowercase;
    }
    &-capitalize {
      text-transform: capitalize;
    }
    &-italic {
      --h-text--font-style: italic;
    }
    &-ellipsis-nowrap {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &-link {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
    &-dynamic {
      & a {
        cursor: pointer;
        color: var(--color-theme-secondary);
        font-weight: 500;

        &:hover {
          text-decoration: underline;
        }
      }
      & i {
        font-style: italic;
      }
      & strong,
      & b {
        font-weight: 700;
      }
    }
  }
}
</style>
