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

<script lang="ts">
import { shouldBeOneOf } from '@utils/validations';
import { HIcon } from '@components/atoms/icon';
import { badgeSizes, badgeColors } from '@assets/constants';

export default {
  name: 'HBadge',
  components: {
    HIcon,
  },
  props: {
    icon: {
      type: String,
      default: null,
    },
    variant: {
      type: String,
      default: 'default',
      validator: shouldBeOneOf(badgeColors),
    },
    size: {
      type: String,
      default: 'jumbo',
      validator: shouldBeOneOf(badgeSizes),
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style lang="scss">
:root {
  --h-badge--width: fit-content;
  --h-badge--height: fit-content;
  --h-badge--border-radius: 50%;
}

.h-badge {
  align-items: center;
  background-color: var(--h-badge--background-color);
  border-radius: var(--h-badge--border-radius);
  color: var(--h-badge--color);
  display: flex;
  font-size: var(--h-badge--font-size);
  font-weight: bold;
  min-height: var(--h-badge--height);
  max-height: fit-content;
  justify-content: center;
  max-width: fit-content;
  min-width: var(--h-badge--width);
  padding: var(--h-badge--padding);
  position: relative;

  &--size {
    &-medium {
      --h-badge--font-size: calc(var(--size-base-medium) / 2);
      --h-badge--padding: calc(var(--size-base-medium) / 8);
      --h-badge--width: var(--size-base-medium);
      --h-badge--height: var(--size-base-medium);
    }
    &-large {
      --h-badge--font-size: calc(var(--size-base-large) / 2);
      --h-badge--padding: calc(var(--size-base-large) / 8);
      --h-badge--width: var(--size-base-large);
      --h-badge--height: var(--size-base-large);
    }
    &-extra-large {
      --h-badge--font-size: calc(var(--size-base-extra-large) / 2);
      --h-badge--padding: calc(var(--size-base-extra-large) / 8);
      --h-badge--width: var(--size-base-extra-large);
      --h-badge--height: var(--size-base-extra-large);
    }
    &-jumbo {
      --h-badge--font-size: calc(var(--size-base-jumbo) / 2);
      --h-badge--padding: calc(var(--size-base-jumbo) / 8);
      --h-badge--width: var(--size-base-jumbo);
      --h-badge--height: var(--size-base-jumbo);
    }
    &-extra-jumbo {
      --h-badge--font-size: calc(var(--size-base-extra-jumbo) / 2);
      --h-badge--padding: calc(var(--size-base-extra-jumbo) / 8);
      --h-badge--width: var(--size-base-extra-jumbo);
      --h-badge--height: var(--size-base-extra-jumbo);
    }
    &-giant {
      --h-badge--font-size: calc(var(--size-base-giant) / 2);
      --h-badge--padding: calc(var(--size-base-giant) / 8);
      --h-badge--width: var(--size-base-giant);
      --h-badge--height: var(--size-base-giant);
    }
    &-extra-giant {
      --h-badge--font-size: calc(var(--size-base-extra-giant) / 2);
      --h-badge--padding: calc(var(--size-base-extra-giant) / 8);
      --h-badge--width: var(--size-base-extra-giant);
      --h-badge--height: var(--size-base-extra-giant);
    }
    &-colossal {
      --h-badge--font-size: calc(var(--size-base-colossal) / 2);
      --h-badge--padding: calc(var(--size-base-colossal) / 8);
      --h-badge--width: var(--size-base-colossal);
      --h-badge--height: var(--size-base-colossal);
    }
    &-extra-colossal {
      --h-badge--font-size: calc(var(--size-base-extra-colossal) / 2);
      --h-badge--padding: calc(var(--size-base-extra-colossal) / 8);
      --h-badge--width: var(--size-base-extra-colossal);
      --h-badge--height: var(--size-base-extra-colossal);
    }
    &-mega {
      --h-badge--font-size: calc(var(--size-base-mega) / 2);
      --h-badge--padding: calc(var(--size-base-mega) / 8);
      --h-badge--width: var(--size-base-mega);
      --h-badge--height: var(--size-base-mega);
    }
    &-extra-mega {
      --h-badge--font-size: calc(var(--size-base-extra-mega) / 2);
      --h-badge--padding: calc(var(--size-base-extra-mega) / 8);
      --h-badge--width: var(--size-base-extra-mega);
      --h-badge--height: var(--size-base-extra-mega);
    }
    &-immense {
      --h-badge--font-size: calc(var(--size-base-immense) / 2);
      --h-badge--padding: calc(var(--size-base-immense) / 8);
      --h-badge--width: var(--size-base-immense);
      --h-badge--height: var(--size-base-immense);
    }
  }

  &--variant {
    &-default {
      --h-badge--background-color: var(--color-theme-secondary);
      --h-badge--color: var(--color-theme-white);
    }

    &-success {
      --h-badge--background-color: var(--color-theme-success);
    }

    &-info {
      --h-badge--background-color: var(--color-theme-info);
    }

    &-danger {
      --h-badge--background-color: var(--color-theme-danger);
    }

    &-warn {
      --h-badge--background-color: var(--color-theme-warn);
    }

    &-primary {
      --h-badge--background-color: var(--color-theme-primary);
      --h-badge--color: var(--color-theme-white);
    }

    &-secondary {
      --h-badge--background-color: var(--color-theme-secondary);
    }
  }
}

.h-badge__icon {
  margin-left: var(--size-base-extra-small);
}
</style>
@/utils/validations@/components/atoms/icon@/assets/constants