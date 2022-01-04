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
  >
    <AIcon
      v-if="icon && iconPosition === 'left'"
      :icon="icon"
      :color="iconColor"
      :class="{'a-button__icon a-button__icon--position-left': slotPassed}"
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
    <AIcon
      v-if="icon && iconPosition === 'right'"
      :icon="icon"
      :color="iconColor"
      :class="{'a-button__icon a-button__icon--position-right': slotPassed}"
    />
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
