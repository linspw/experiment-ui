<template>
  <component
    :is="tag"
    :class="{
      ['h-text']: true,
      [`h-text--size-${size}`]: size != 'inherit',
      [`h-text--color-${color}`]: color != 'inherit',
      [`h-text--align-${align}`]: align != 'inherit',
      [`h-text--weight-${weight}`]: weight != 'inherit',
      [`h-text--behavior-italic`]: italic,
      [`h-text--behavior-link`]: link,
    }"
  >
    <slot />
  </component>
</template>

<script>
import { shouldBeOneOf } from '@utils/validations';

export default {
  name: 'HText',
  props: {
    size: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
        'nano',
        'micro',
        'extra-small',
        'small',
        'medium',
        'large',
        'extra-large',
        'jumbo',
        'extra-jumbo',
        'giant',
        'extra-giant',
        'colossal',
        'extra-colossal',
        'mega',
        'extra-mega',
        'immense',
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
    tag: {
      type: String,
      default: 'p',
      validator: shouldBeOneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span',
        'div',
        'a',
        'strong',
        'caption'
      ]),
    },
    align: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
        'left',
        'right',
        'center',
        'justify',
      ]),
    },
    weight: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
        'black',
        'extra-bold',
        'bold',
        'semi-bold',
        'medium',
        'regular',
        'light',
        'extra-light',
        'thin',
      ]),
    },
    italic: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@use 'sass:math';
@import '@/styles/utils/index.scss';

@function pxToRem($pxValue) {
  @return math.div($pxValue, 16px) * 1rem; 
}

.h-text {
  --h-text--color: inherit;
  --h-text--font-size: inherit;
  --h-text--font-style: inherit;
  --h-text--font-weight: inherit;

  color: var(--h-text--color);
  font-size: var(--h-text--font-size);
  font-style: var(--h-text--font-style);
  font-weight: var(--h-text--font-weight);

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
    &-tertiary {
      --h-text--color: var(--color-theme-tertiary);
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
    &-italic {
      --h-text--font-style: italic;
    }
    &-link {
      --h-text--color: var(--color-theme-secondary);
      --h-text--font-weight: 500;
      transition: color 250ms;
    
      &:hover {
        --h-text--color: var(--color-theme-info);
        text-decoration: underline;
      }
    }
  }
}
</style>