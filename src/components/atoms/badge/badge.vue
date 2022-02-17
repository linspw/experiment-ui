<template>
  <div
    class="h-badge"
    :class="{
      [`h-badge--size-${size}`]: size,
      [`h-badge--variant-${variant}`]: variant,
    }"
  >
    {{ value }}
    <HIcon
      v-if="icon"
      class="h-badge__icon"
      :icon="icon"
    />
  </div>
</template>

<script>
import { shouldBeOneOf } from '@utils/validations';
import { HIcon } from '@components/atoms/icon';

export default {
  name: 'HBadge',
  components: {
    HIcon,
  },
  props: {
    icon: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: 'default',
      validator: shouldBeOneOf([
        'default',
        'primary',
        'secondary',
        'tertiary',
        'warn',
        'success',
        'danger',
        'info',
      ]),
    },
    size: {
      type: String,
      default: 'jumbo',
      validator: shouldBeOneOf([
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
    value: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>
