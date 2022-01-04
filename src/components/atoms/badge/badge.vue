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
      class="a-badge__icon"
      :icon="icon"
    />
  </div>
</template>

<script>
import { shouldBeOneOf } from 'vue-prop-validation-helper';
import { HIcon } from '@components/atoms/icon';

export default {
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

<style lang="scss">
.h-badge {
  --h-badge--width: fit-content;
  --h-badge--height: fit-content;

  align-items: center;
  background-color: var(--h-badge--background-color);
  border-radius: 50%;
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
      --h-badge--font-size: calc(var(--size-medium) / 2);
      --h-badge--padding: calc(var(--size-medium) / 8);
      --h-badge--width: var(--size-medium);
      --h-badge--height: var(--size-medium);
    }
    &-large {
      --h-badge--font-size: calc(var(--size-large) / 2);
      --h-badge--padding: calc(var(--size-large) / 8);
      --h-badge--width: var(--size-large);
      --h-badge--height: var(--size-large);
    }
    &-extra-large {
      --h-badge--font-size: calc(var(--size-extra-large) / 2);
      --h-badge--padding: calc(var(--size-extra-large) / 8);
      --h-badge--width: var(--size-extra-large);
      --h-badge--height: var(--size-extra-large);
    }
    &-jumbo {
      --h-badge--font-size: calc(var(--size-jumbo) / 2);
      --h-badge--padding: calc(var(--size-jumbo) / 8);
      --h-badge--width: var(--size-jumbo);
      --h-badge--height: var(--size-jumbo);
    }
    &-extra-jumbo {
      --h-badge--font-size: calc(var(--size-extra-jumbo) / 2);
      --h-badge--padding: calc(var(--size-extra-jumbo) / 8);
      --h-badge--width: var(--size-extra-jumbo);
      --h-badge--height: var(--size-extra-jumbo);
    }
    &-giant {
      --h-badge--font-size: calc(var(--size-giant) / 2);
      --h-badge--padding: calc(var(--size-giant) / 8);
      --h-badge--width: var(--size-giant);
      --h-badge--height: var(--size-giant);
    }
    &-extra-giant {
      --h-badge--font-size: calc(var(--size-extra-giant) / 2);
      --h-badge--padding: calc(var(--size-extra-giant) / 8);
      --h-badge--width: var(--size-extra-giant);
      --h-badge--height: var(--size-extra-giant);
    }
    &-colossal {
      --h-badge--font-size: calc(var(--size-colossal) / 2);
      --h-badge--padding: calc(var(--size-colossal) / 8);
      --h-badge--width: var(--size-colossal);
      --h-badge--height: var(--size-colossal);
    }
    &-extra-colossal {
      --h-badge--font-size: calc(var(--size-extra-colossal) / 2);
      --h-badge--padding: calc(var(--size-extra-colossal) / 8);
      --h-badge--width: var(--size-extra-colossal);
      --h-badge--height: var(--size-extra-colossal);
    }
    &-mega {
      --h-badge--font-size: calc(var(--size-mega) / 2);
      --h-badge--padding: calc(var(--size-mega) / 8);
      --h-badge--width: var(--size-mega);
      --h-badge--height: var(--size-mega);
    }
    &-extra-mega {
      --h-badge--font-size: calc(var(--size-extra-mega) / 2);
      --h-badge--padding: calc(var(--size-extra-mega) / 8);
      --h-badge--width: var(--size-extra-mega);
      --h-badge--height: var(--size-extra-mega);
    }
    &-immense {
      --h-badge--font-size: calc(var(--size-immense) / 2);
      --h-badge--padding: calc(var(--size-immense) / 8);
      --h-badge--width: var(--size-immense);
      --h-badge--height: var(--size-immense);
    }
  }

  &--variant {
    &-default {
      --h-badge--background-color: var(--color-theme-secondary);
      --h-badge--color: var(--colors-original-white);
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
      --h-badge--color: var(--colors-original-white);
    }

    &-secondary {
      --h-badge--background-color: var(--color-theme-secondary);
    }

    &-tertiary {
      --h-badge--background-color: var(--color-theme-tertiary);
    }
  }
}

.a-badge__icon {
  margin-left: var(--size-extra-small);
}
</style>
