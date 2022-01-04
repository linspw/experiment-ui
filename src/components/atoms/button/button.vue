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
import { shouldBeOneOf } from 'vue-prop-validation-helper';
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
