<template>
  <component
    :is="tag"
    :class="{
      [`h-button`]: true,
      ['h-button--bounds-rounded']: rounded,
      ['h-button--behavior-block']: block,
      [`h-button--behavior-loading`]: loading,
      [`h-button--behavior-accessible`]: accessible,
      [`h-button--behavior-only-icon`]: onlyIcon,
      [`h-button--color-${color}`]: color,
      [`h-button--size-${size}`]: size,
      [`h-button--variant-${variant}`]: variant,
    }"
    v-bind="$attrs"
  >
    <HIcon
      v-if="iconLeft"
      :icon="iconLeft"
      :color="iconLeftColor"
      :class="{'h-button__icon h-button__icon--position-left': slotPassed}"
    />

    <HIcon
      v-if="loading"
      icon="fas fa-circle-notch fa-spin"
      class="h-button__icon h-button__icon--is-loading"
    />

    <span
      v-if="slotPassed && !onlyIcon"
      :class="{ 'h-button__text': true }"
    >
      <slot />
    </span>

    <HIcon
      v-if="iconRight"
      :icon="iconRight"
      :color="iconRightColor"
      :class="{'h-button__icon h-button__icon--position-right': slotPassed}"
    />
  </component>
</template>

<script>
import { shouldBeOneOf } from '@utils/validations';
import { HIcon } from '@components/atoms/icon';
import {
  iconColors, buttonColors, buttonTypes, buttonVariants, buttonSizes,
} from '@assets/constants';

export default {
  name: 'HButton',
  components: { HIcon },
  inheritAttrs: false,
  props: {
    tag: {
      type: String,
      default: 'button',
      validator: shouldBeOneOf(buttonTypes),
    },
    color: {
      type: String,
      default: 'default',
      validator: shouldBeOneOf(buttonColors),
    },
    variant: {
      type: String,
      default: 'contained',
      validator: shouldBeOneOf(buttonVariants),
    },
    size: {
      type: String,
      default: 'small',
      validator: shouldBeOneOf(buttonSizes),
    },
    iconLeft: {
      type: String,
      default: null,
    },
    iconLeftColor: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf(iconColors),
    },
    iconRight: {
      type: String,
      default: null,
    },
    iconRightColor: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf(iconColors),
    },
    loading: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    accessible: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    onlyIcon: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    slotPassed() {
      return !!this.$slots.default;
    },
  },
};
</script>

<styles lang="scss">
.h-button {
  /**
  * @tokens HButton
  */
  --h-button-color-first: none;
  --h-button-color-second: none;
  --h-button-color-third: none;
  --h-button-color-quarter: none;
  --h-button-color-quintenary: none;

  --h-button-border-radius: var(--border-radius-normal);
  --h-button-background-color: transparent;
  --h-button-background-color--hover: initial;
  --h-button-background-color--active: initial;
  --h-button-text-decoration: none;
  --h-button-text-decoration--hover: none;
  --h-button-text-decoration--active: none;
  --h-button-padding: var(--size-base-small) var(--size-base-large);
  --h-button-color: inherit;
  --h-button-font-weight: 500;
  --h-button-border: none;
  --h-button-height: auto;
  --h-button-min-height: fit-content;
  --h-button-width: auto;
  --h-button__text-font-size: inherit;

  align-items: center;
  border-radius: var(--h-button-border-radius);
  border: var(--h-button-border);
  display: inline-flex;
  font-weight: var(--h-button-font-weight);
  justify-content: center;
  padding: var(--h-button-padding);
  position: relative;
  text-decoration: var(--h-button-text-decoration);
  transition: background-color 250ms, opacity 250ms;
  white-space: nowrap;
  background-color: var(--h-button-background-color);
  color: var(--h-button-color);
  height: var(--h-button-height);
  min-height: var(--h-button-min-height);
  width: var(--h-button-width);
  overflow: hidden;

  &:hover {
    --h-button-background-color: var(--h-button-background-color--hover);
    --h-button-text-decoration: var(--h-button-text-decoration--hover)
  }
  &:active {
    --h-button-background-color: var(--h-button-background-color--active);
    --h-button-text-decoration: var(--h-button-text-decoration--active);
  }
  &:disabled {
    --h-button-background-color: var(--color-blue-grey-scale-200);
    --h-button-border: var(--size-base-micro) solid var(--color-blue-grey-scale-200);
    // pointer-events: none;
    cursor: not-allowed;
  }

  &--size {
    &-small {
      --h-button-min-height: var(--size-base-extra-large);
      --h-button__text-font-size: 14px;
    }
    &-medium {
      --h-button-min-height: var(--size-base-jumbo);
      --h-button__text-font-size: 18px;
    }
  }

  &--color {
    &-default,
    &-primary {
      --h-button-color-first: var(--color-theme-primary);
      --h-button-color-second: var(--color-theme-white);
      --h-button-color-third: var(--color-theme-primary-800);
      --h-button-color-quarter: var(--color-theme-primary-600);
      --h-button-color-quintenary: var(--color-theme-primary-100);
    }
    &-secondary {
      --h-button-color-first: var(--color-theme-secondary);
      --h-button-color-second: var(--color-theme-white);
      --h-button-color-third: var(--color-theme-secondary-300);
      --h-button-color-quarter: var(--color-theme-secondary-100);
      --h-button-color-quintenary: var(--color-theme-secondary-050);
    }
    &-success {
      --h-button-color-first: var(--color-support-success-scale-400);
      --h-button-color-second: var(--color-theme-white);
      --h-button-color-third: var(--color-support-success-scale-300);
      --h-button-color-quarter: var(--color-support-success-scale-200);
      --h-button-color-quintenary: var(--color-support-success-scale-100);
    }
    &-danger {
      --h-button-color-first: var(--color-support-danger-scale-400);
      --h-button-color-second: var(--color-theme-white);
      --h-button-color-third: var(--color-support-danger-scale-300);
      --h-button-color-quarter: var(--color-support-danger-scale-200);
      --h-button-color-quintenary: var(--color-support-danger-scale-100);
    }
    &-warn {
      --h-button-color-first: var(--color-support-warn-scale-400);
      --h-button-color-second: var(--color-theme-black);
      --h-button-color-third: var(--color-support-warn-scale-300);
      --h-button-color-quarter: var(--color-support-warn-scale-200);
      --h-button-color-quintenary: var(--color-support-warn-scale-100);
    }
    &-info {
      --h-button-color-first: var(--color-support-info-scale-400);
      --h-button-color-second: var(--color-theme-white);
      --h-button-color-third: var(--color-support-info-scale-300);
      --h-button-color-quarter: var(--color-support-info-scale-200);
      --h-button-color-quintenary: var(--color-support-info-scale-100);
    }
  }

  &--variant {
    &-contained {
      --h-button-background-color: var(--h-button-color-first);
      --h-button-color: var(--h-button-color-second);
      --h-button-border: var(--size-base-micro) solid var(--h-button-color-first);
      --h-button-background-color--hover: var(--h-button-color-third);
      --h-button-background-color--active: var(--h-button-color-quarter);
    }
    &-outlined {
      --h-button-background-color: transparent;
      --h-button-color: var(--h-button-color-first);
      --h-button-border: var(--size-base-micro) solid var(--h-button-color-first);
      --h-button-background-color--hover: var(--h-button-color-quintenary);
      --h-button-background-color--active: var(--h-button-color-quarter);
    }
    &-text {
      --h-button-border: var(--size-base-micro) solid transparent;
      --h-button-color: var(--h-button-color-first);
    }
  }

  &--bounds {
    &-rounded {
      --h-button-border-radius: var(--border-radius-high);
    }
  }

  &--behavior {
    &-block {
      --h-button-width: 100%;
    }

    &-loading {
      & > .h-button__text {
        opacity: 0;
      }

      & > .h-button__icon {
        opacity: 0;
      }

      & > .h-button__icon--is-loading {
        position: absolute;
        height: auto;
        width: auto;
        opacity: 1;
        margin: 0;
      }
    }
    &-accessible {
      margin-top: var(--size-base-extra-small);
      margin-bottom: var(--size-base-extra-small);
    }
    &-only-icon {
      --h-button-padding: var(--size-base-small);
    }
  }

  &__icon {
    align-items: center;
    display: flex;
    height: 100%;
    width: 16px;
    &--position-left {
      margin-right: var(--size-base-small);
    }
    &--position-right {
      margin-left: var(--size-base-small);
    }
  }

  &__text {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    white-space: nowrap;
  }
}

.h-button__text {
  font-size: var(--h-button__text-font-size);
}
</styles>
