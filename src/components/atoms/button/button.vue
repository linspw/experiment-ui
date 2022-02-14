<template>
  <button
    :class="{
      [`h-button`]: true,
      [`h-button--behavior-${behavior}`]: behavior,
      ['h-button--behavior-is-rounded']: isRounded,
      [`h-button--behavior-is-loading`]: isLoading,
      [`h-button--variant-${variant}`]: variant,
      [`h-button--size-${size}`]: size,
    }"
    v-bind="$attrs"
  >
    <HIcon
      v-if="icon && iconPosition === 'left'"
      :icon="icon"
      :color="iconColor"
      :class="{'h-button__icon h-button__icon--position-left': slotPassed}"
    />
    <HIcon
      v-if="isLoading"
      icon="fas fa-circle-notch fa-spin"
      class="h-button__icon h-button__icon--is-loading"
    />
    <span
      v-if="slotPassed"
      :class="{ 'h-button__text': true }"
    >
      <slot />
    </span>
    <HIcon
      v-if="icon && iconPosition === 'right'"
      :icon="icon"
      :color="iconColor"
      :class="{'h-button__icon h-button__icon--position-right': slotPassed}"
    />
  </button>
</template>

<script>
import { shouldBeOneOf } from '@utils/validations';
import { HIcon } from '@components/atoms/icon';

export default {
  name: 'HButton',
  components: { HIcon },
  inheritAttrs: false,
  props: {
    iconPosition: {
      type: String,
      default: 'left',
      validator: shouldBeOneOf([
        'left',
        'right',
      ]),
    },
    behavior: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: 'primary',
      validator: shouldBeOneOf([
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quintenary',
      ]),
    },
    size: {
      type: String,
      default: 'small',
      validator: shouldBeOneOf([
        'small',
        'medium',
      ]),
    },
    icon: {
      type: String,
      default: '',
    },
    iconColor: {
      type: String,
      default: 'inherit',
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    isRounded: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    slotPassed() {
      return !!this.$slots.default;
    },
  },
};
</script>

<style lang="scss">
.h-button {
  /**
  * @tokens HButton
  */
  --h-button-border-radius: var(--border-radius-normal);
  --h-button-background-color: transparent;
  --h-button-background-color--hover: var(--colors-scale-grey-darkest);
  --h-button-background-color--active: var(--colors-scale-grey-superior);
  --h-button-text-decoration: none;
  --h-button-text-decoration--hover: none;
  --h-button-text-decoration--active: none;
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
  padding: var(--size-base-small) var(--size-base-large);
  position: relative;
  text-decoration: var(--h-button-text-decoration);
  transition: background-color 250ms, opacity 250ms;
  white-space: nowrap;
  background-color: var(--h-button-background-color);
  color: var(--h-button-color);
  height: var(--h-button-height);
  min-height: var(--h-button-min-height);
  width: var(--h-button-width);

  &:hover {
    --h-button-background-color: var(--h-button-background-color--hover);
    --h-button-text-decoration: var(--h-button-text-decoration--hover)
  }
  &:active {
    --h-button-background-color: var(--h-button-background-color--active);
    --h-button-text-decoration: var(--h-button-text-decoration--active);
  }
  &:disabled {
    --h-button-background-color: var(--color-theme-tertiary);
    pointer-events: none;
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

  &--variant {
    &-primary {
      --h-button-background-color: var(--color-theme-primary);
      --h-button-color: var(--colors-original-white);
    }
    &-secondary {
      --h-button-background-color: var(--color-theme-secondary);
      --h-button-color: var(--colors-original-white);
    }
    &-tertiary {
      --h-button-background-color: var(--colors-original-white);
      --h-button-border: var(--size-base-micro) solid var(--color-theme-secondary);
      --h-button-color: var(--color-theme-secondary);
    }
    &-quaternary {
      --h-button-background-color: transparent;
      --h-button-color: var(--color-theme-secondary);
      --h-button-background-color--hover: transparent;
      --h-button-background-color--active: transparent;
      --h-button-text-decoration--hover: underline;
      --h-button-text-decoration--active: underline;
    }
    &-quintenary {
      --h-button-background-color: var(--color-theme-primary);
      --h-button-color: var(--color-theme-secondary);
    }
  }

  &--behavior {
    &-block {
      --h-button-width: 100%;
    }

    &-is-rounded {
      --h-button-border-radius: var(--border-radius-high);
    }

    &-is-loading {
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
</style>
