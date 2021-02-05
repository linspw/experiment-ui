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
import { AIcon } from '@/components/Atoms/AIcon';

export default {
  name: 'AButton',
  components: { AIcon },
  props: {
    behavior: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'medium',
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
  font-weight: 600;
  justify-content: center;
  padding: var(--size-small) var(--size-large);
  position: relative;
  transition: background-color 250ms, opacity 250ms;
  box-shadow: var(--shadow-elevation-02);
  &:hover {
    background-color: #CFDAE3;
  }
  &:active {
    background-color: #839fb6;
  }

  &--size {
    &-medium {
      min-height: 40px;
      height: fit-content;
    }
  }

  &--variant {
    &-primary {
      background-color: var(--colors-major-black);
      color: var(--colors-original-white);
    }
    &-secondary {
      background-color: var(--color-theme-interactive);
      color: var(--colors-original-white);
    }
    &-tertiary {
      background-color: transparent;
      color: var(--colors-major-black);
      box-shadow: none;
      &:hover {
        text-decoration: underline;
      }
      &:active {
        color: #839fb6;
        text-decoration: underline;
      }
    }
    &-quaternary {
      background-color: var(--colors-original-white);
      color: var(--colors-normal-dark-blue);
    }
    &-quintenary {
      background-color: var(--colors-original-white);
      border: var(--size-micro) solid var(--colors-major-black);
      color: var(--colors-major-black);
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
    margin-right: 8px;
  }

  &__text {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
