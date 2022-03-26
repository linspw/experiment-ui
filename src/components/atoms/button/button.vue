<template>
  <component
    :is="tag"
    :class="{
      [`h-button`]: true,
      [`h-button--behavior-${behavior}`]: behavior,
      ['h-button--behavior-is-rounded']: isRounded,
      [`h-button--behavior-is-loading`]: isLoading,
      [`h-button--behavior-is-accessible`]: isAccessible,
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

export default {
  name: 'HButton',
  components: { HIcon },
  inheritAttrs: false,
  props: {
    tag: {
      type: String,
      default: 'button',
      validator: shouldBeOneOf([
        'button',
        'a',
        'router-link',
      ]),
    },
    behavior: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'primary',
      validator: shouldBeOneOf([
        'primary',
        'secondary',
        'success',
        'danger',
        'warn',
        'info',
      ]),
    },
    variant: {
      type: String,
      default: 'contained',
    },
    size: {
      type: String,
      default: 'small',
      validator: shouldBeOneOf([
        'small',
        'medium',
      ]),
    },
    iconLeft: {
      type: String,
      default: null,
    },
    iconLeftColor: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
      ]),
    },
    iconRight: {
      type: String,
      default: null,
    },
    iconRightColor: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
      ]),
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    isRounded: {
      type: Boolean,
      default: false,
    },
    isAccessible: {
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
