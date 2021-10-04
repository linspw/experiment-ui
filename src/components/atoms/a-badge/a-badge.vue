<template>
  <div
    class="a-badge"
    :class="{
      [`a-badge--size-${size}`]: size,
      [`a-badge--variant-${variant}`]: variant,
    }"
  >
    {{ value }}
    <AIcon
      v-if="icon"
      class="a-badge__icon"
      :icon="icon"
    />
  </div>
</template>

<script>
import { shouldBeOneOf } from 'vue-prop-validation-helper';
import { AIcon } from '@/components/atoms/a-icon';

export default {
  components: {
    AIcon,
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
.a-badge {
  --a-badge--width: fit-content;
  --a-badge--height: fit-content;

  align-items: center;
  background-color: var(--a-badge--background-color);
  border-radius: 50%;
  color: var(--a-badge--color);
  display: flex;
  font-size: var(--a-badge--font-size);
  font-weight: bold;
  min-height: var(--a-badge--height);
  max-height: fit-content;
  justify-content: center;
  max-width: fit-content;
  min-width: var(--a-badge--width);
  padding: var(--a-badge--padding);
  position: relative;

  &--size {
    &-medium {
      --a-badge--font-size: calc(var(--size-medium) / 2);
      --a-badge--padding: calc(var(--size-medium) / 8);
      --a-badge--width: var(--size-medium);
      --a-badge--height: var(--size-medium);
    }
    &-large {
      --a-badge--font-size: calc(var(--size-large) / 2);
      --a-badge--padding: calc(var(--size-large) / 8);
      --a-badge--width: var(--size-large);
      --a-badge--height: var(--size-large);
    }
    &-extra-large {
      --a-badge--font-size: calc(var(--size-extra-large) / 2);
      --a-badge--padding: calc(var(--size-extra-large) / 8);
      --a-badge--width: var(--size-extra-large);
      --a-badge--height: var(--size-extra-large);
    }
    &-jumbo {
      --a-badge--font-size: calc(var(--size-jumbo) / 2);
      --a-badge--padding: calc(var(--size-jumbo) / 8);
      --a-badge--width: var(--size-jumbo);
      --a-badge--height: var(--size-jumbo);
    }
    &-extra-jumbo {
      --a-badge--font-size: calc(var(--size-extra-jumbo) / 2);
      --a-badge--padding: calc(var(--size-extra-jumbo) / 8);
      --a-badge--width: var(--size-extra-jumbo);
      --a-badge--height: var(--size-extra-jumbo);
    }
    &-giant {
      --a-badge--font-size: calc(var(--size-giant) / 2);
      --a-badge--padding: calc(var(--size-giant) / 8);
      --a-badge--width: var(--size-giant);
      --a-badge--height: var(--size-giant);
    }
    &-extra-giant {
      --a-badge--font-size: calc(var(--size-extra-giant) / 2);
      --a-badge--padding: calc(var(--size-extra-giant) / 8);
      --a-badge--width: var(--size-extra-giant);
      --a-badge--height: var(--size-extra-giant);
    }
    &-colossal {
      --a-badge--font-size: calc(var(--size-colossal) / 2);
      --a-badge--padding: calc(var(--size-colossal) / 8);
      --a-badge--width: var(--size-colossal);
      --a-badge--height: var(--size-colossal);
    }
    &-extra-colossal {
      --a-badge--font-size: calc(var(--size-extra-colossal) / 2);
      --a-badge--padding: calc(var(--size-extra-colossal) / 8);
      --a-badge--width: var(--size-extra-colossal);
      --a-badge--height: var(--size-extra-colossal);
    }
    &-mega {
      --a-badge--font-size: calc(var(--size-mega) / 2);
      --a-badge--padding: calc(var(--size-mega) / 8);
      --a-badge--width: var(--size-mega);
      --a-badge--height: var(--size-mega);
    }
    &-extra-mega {
      --a-badge--font-size: calc(var(--size-extra-mega) / 2);
      --a-badge--padding: calc(var(--size-extra-mega) / 8);
      --a-badge--width: var(--size-extra-mega);
      --a-badge--height: var(--size-extra-mega);
    }
    &-immense {
      --a-badge--font-size: calc(var(--size-immense) / 2);
      --a-badge--padding: calc(var(--size-immense) / 8);
      --a-badge--width: var(--size-immense);
      --a-badge--height: var(--size-immense);
    }
  }

  &--variant {
    &-default {
      --a-badge--background-color: var(--color-theme-secondary);
      --a-badge--color: var(--colors-original-white);
    }

    &-success {
      --a-badge--background-color: var(--color-theme-success);
    }

    &-info {
      --a-badge--background-color: var(--color-theme-info);
    }

    &-danger {
      --a-badge--background-color: var(--color-theme-danger);
    }

    &-warn {
      --a-badge--background-color: var(--color-theme-warn);
    }

    &-primary {
      --a-badge--background-color: var(--color-theme-primary);
      --a-badge--color: var(--colors-original-white);
    }

    &-secondary {
      --a-badge--background-color: var(--color-theme-secondary);
    }

    &-tertiary {
      --a-badge--background-color: var(--color-theme-tertiary);
    }
  }
}

.a-badge__icon {
  margin-left: var(--size-extra-small);
}
</style>
