<template>
  <button
    :class="{
      [`a-button`]: true,
      [`a-button--behavior-${behavior}`]: behavior,
      ['a-button--behavior-is-rounded']: isRounded,
      [`a-button--behavior-is-loading`]: isLoading,
      [`a-button--variant-${variant}`]: variant,
      [`a-button--size-${size}`]: size,
    }"
    v-bind="$attrs"
    @click="$emit('click')"
  >
    <AIcon
      v-if="icon"
      :icon="icon"
      :color="iconColor"
      :class="{'a-button__icon': slotPassed}"
    />
    <AIcon
      v-if="isLoading"
      icon="fas fa-circle-notch fa-spin"
      class="a-button__icon a-button__icon--is-loading"
    />
    <span
      v-if="slotPassed"
      :class="{ 'a-button__text': true }"
    >
      <slot />
    </span>
  </button>
</template>

<script>
import { shouldBeOneOf } from 'vue-prop-validation-helper';
import { AIcon } from '@/components/atoms/a-icon';

export default {
  name: 'AButton',
  components: { AIcon },
  inheritAttrs: false,
  props: {
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

<style lang="scss" scoped>
.a-button {
  align-items: center;
  border-radius: var(--border-radius-normal);
  display: inline-flex;
  font-weight: 500;
  justify-content: center;
  padding: var(--size-small) var(--size-large);
  position: relative;
  transition: background-color 250ms, opacity 250ms;
  white-space: nowrap;

  &:hover {
    background-color: #CFDAE3;
  }
  &:active {
    background-color: #839fb6;
  }

  &--size {
    &-small {
      min-height: var(--size-extra-large);
      height: fit-content;
      & > .a-button__text {
        font-size: 14px;
      }
    }
    &-medium {
      min-height: var(--size-jumbo);
      height: fit-content;
      & > .a-button__text {
        font-size: 18px;
      }
    }
  }

  &--variant {
    &-primary {
      background-color: var(--color-theme-primary);
      color: var(--colors-original-white);
    }
    &-secondary {
      background-color: var(--color-theme-secondary);
      color: var(--colors-original-white);
    }
    &-tertiary {
      background-color: var(--colors-original-white);
      border: var(--size-micro) solid var(--color-theme-secondary);
      color: var(--color-theme-secondary);
    }
    &-quaternary {
      background-color: transparent;
      color: var(--color-theme-secondary);
      &:hover {
        text-decoration: underline;
        background-color: transparent;
      }
      &:active {
        text-decoration: underline;
        background-color: transparent;
      }
    }
    &-quintenary {
      background-color: var(--color-theme-primary);
      color: var(--color-theme-secondary);
    }
  }

  &--behavior {
    &-block {
      width: 100%;
    }

    &-is-rounded {
      border-radius: var(--border-radius-high);
    }

    &-is-loading {
      & > .a-button__text {
        opacity: 0;
      }

      & > .a-button__icon {
        opacity: 0;
      }

      & > .a-button__icon--is-loading {
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
    margin-right: var(--size-small);
  }

  &__text {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    white-space: nowrap;
  }
}
</style>
