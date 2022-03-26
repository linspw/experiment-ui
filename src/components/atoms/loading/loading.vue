<template>
  <svg
    class="h-spinner"
    :class="{
      [`h-spinner--color-${$props.color}`]: $props.color !== 'default',
      [`h-spinner--size-${$props.size}`]: $props.size,
    }"
    viewBox="0 0 66 66"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      class="h-spinner__path"
      fill="none"
      stroke-width="6"
      stroke-linecap="round"
      cx="33"
      cy="33"
      r="30"
    />
  </svg>
</template>

<script setup>
import { shouldBeOneOf } from '@utils/validations';

const $props = defineProps({
  size: {
    type: String,
    default: 'colossal',
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
  color: {
    type: String,
    default: 'default',
    validator: shouldBeOneOf([
      'default',
      'primary',
      'secondary',
      'tertiary',
      'inverse',
    ]),
  },
});
</script>

<style lang="scss" scoped>
$offset: 187;
$duration: 1.4s;

.h-spinner {
  /* HSpinner */
  --h-spinner-width: inherit;
  --h-spinner-height: inherit;
  --h-spinner-stroke: inherit;

  animation: rotator $duration linear infinite;
  width: var(--h-spinner-width);
  height: var(--h-spinner-height);

  &--size {
    &-medium {
      --h-spinner-width: var(--size-base-medium);
      --h-spinner-height: var(--size-base-medium);
    }
    &-large {
      --h-spinner-width: var(--size-base-large);
      --h-spinner-height: var(--size-base-large);
    }
    &-extra-large {
      --h-spinner-width: var(--size-base-extra-large);
      --h-spinner-height: var(--size-base-extra-large);
    }
    &-jumbo {
      --h-spinner-width: var(--size-base-jumbo);
      --h-spinner-height: var(--size-base-jumbo);
    }
    &-extra-jumbo {
      --h-spinner-width: var(--size-base-extra-jumbo);
      --h-spinner-height: var(--size-base-extra-jumbo);
    }
    &-giant {
      --h-spinner-width: var(--size-base-giant);
      --h-spinner-height: var(--size-base-giant);
    }
    &-extra-giant {
      --h-spinner-width: var(--size-base-extra-giant);
      --h-spinner-height: var(--size-base-extra-giant);
    }
    &-colossal {
      --h-spinner-width: var(--size-base-colossal);
      --h-spinner-height: var(--size-base-colossal);
    }
    &-extra-colossal {
      --h-spinner-width: var(--size-base-extra-colossal);
      --h-spinner-height: var(--size-base-extra-colossal);
    }
    &-mega {
      --h-spinner-width: var(--size-base-mega);
      --h-spinner-height: var(--size-base-mega);
    }
    &-extra-mega {
      --h-spinner-width: var(--size-base-extra-mega);
      --h-spinner-height: var(--size-base-extra-mega);
    }
    &-immense {
      --h-spinner-width: var(--size-base-immense);
      --h-spinner-height: var(--size-base-immense);
    }
  }

  &--color {
    &-primary {
      --h-spinner-stroke: var(--color-theme-primary);
    }
    &-secondary {
      --h-spinner-stroke: var(--color-theme-secondary);
    }

    &-inverse {
      --h-spinner-stroke: var(--color-white);
    }
    &-rainbow {
      animation: dash $duration ease-in-out infinite,
        colors ($duration * 4) ease-in-out infinite;
    }
  }
}

@keyframes rotator {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

.h-spinner__path {
  stroke: var(--h-spinner-stroke);
  stroke-dasharray: $offset;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dash $duration ease-in-out infinite;
}

@keyframes colors {
  0% {
    stroke: #4285f4;
  }
  25% {
    stroke: #de3e35;
  }
  50% {
    stroke: #f7c223;
  }
  75% {
    stroke: #1b9a59;
  }
  100% {
    stroke: #4285f4;
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: $offset;
  }
  50% {
    stroke-dashoffset: calc($offset/4);
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: $offset;
    transform: rotate(450deg);
  }
}
</style>
