<template>
  <button
    :class="{
      [`a-button`]: true,
      [`a-button--behavior-${behavior}`]: behavior,
      [`a-button--behavior-is-loading`]: isLoading,
      [`a-button--variant-${variant}`]: variant,
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
      :class="{
        'a-button__text': true,
        'a-button__text--icon': icon
      }"
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
      default: 'quaternary',
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
  min-height: 40px;
  padding: var(--size-small) var(--size-large);
  position: relative;
  transition: background-color 250ms, opacity 250ms;

  &--variant {
    &-primary {
      background-color: var(--colors-major-black);
      box-shadow: var(--shadow-elevation-02);
      color: var(--colors-original-white);
      &:hover {
        background-color: #CFDAE3;
      }
      &:active {
        background-color: #839fb6;
      }
    }

    &-secondary {
      background-color: var(--colors-original-white);
      box-shadow: var(--shadow-elevation-02);
      border: var(--size-micro) solid var(--colors-major-black);
      color: var(--colors-major-black);
      &:hover {
        background-color: #CFDAE3;
      }
      &:active {
        background-color: #839fb6;
      }
    }

    &-tertiary {
      background-color: transparent;
      color: var(--colors-major-black);
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
      box-shadow: var(--shadow-elevation-02);
      color: var(--colors-normal-dark-blue);
      &:hover {
        background-color: #CFDAE3;
      }
      &:active {
        background-color: #839fb6;
      }
    }
  }

  &--behavior {
    &-block {
      width: 100%;
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
      }
    }
  }

  &__icon {
    height: 100%;
    width: 40px;
  }

  &__text {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    &--icon {
      margin-right: 32px;
    }
  }
}
</style>
