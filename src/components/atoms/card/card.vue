<template>
  <component
    :is="tag"
    :class="{
      [`h-card`]: true,
      [`h-card--color-${color}`]: color,
      [`h-card--variant-${variant}`]: variant,
      [`h-card--elevation-${elevation}`]: elevation && variant != 'outlined',
      [`h-card--behavior-rounded`]: rounded,
    }"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import {
  cardColors,
  cardElevations,
  cardTypes,
} from '@assets/constants';
import { shouldBeOneOf } from '@utils/validations';

export default {
  name: 'HCard',
  props: {
    color: {
      type: String,
      default: 'default',
      validator: shouldBeOneOf(cardColors),
    },
    elevation: {
      type: String,
      default: 'medium',
      validator: shouldBeOneOf(cardElevations),
    },
    tag: {
      type: String,
      default: 'div',
      validator: shouldBeOneOf(cardTypes),
    },
    variant: {
      type: String,
      default: 'default',
    },
    rounded: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss">
:root {
    --h-card--background-color: transparent;
  --h-card--border: none;
  --h-card--box-shadow: none;
  --h-card--padding: var(--size-base-large);
  --h-card--color: inherit;
  --h-card--border-radius: var(--border-radius-normal);
}

.h-card {
  background-color: var(--h-card--background-color);
  border: var(--h-card--border);
  border-radius: var(--h-card--border-radius);
  box-shadow: var(--h-card--box-shadow);
  color: var(--h-card--color);
  padding: var(--h-card--padding);
  position: relative;

  &--behavior {
    &-rounded {
      --h-card--border-radius: var(--border-radius-high);
    }
  }

  &--variant {
    &-outlined {
      --h-card--border: var(--size-base-micro) solid var(--color-grey-scale-400);
    }
  }

  &--elevation {
    &-low {
      --h-card--box-shadow: var(--shadow-s-002);
    }
    &-medium {
      --h-card--box-shadow: var(--shadow-s-003);
    }
    &-high {
      --h-card--box-shadow: var(--shadow-s-004);
    }
    &-000 {
      --b-card--box-shadow: var(--shadow-e-000);
    }
    &-001 {
      --b-card--box-shadow: var(--shadow-e-001);
    }
    &-002 {
      --b-card--box-shadow: var(--shadow-e-002);
    }
    &-003 {
      --b-card--box-shadow: var(--shadow-e-003);
    }
    &-004 {
      --b-card--box-shadow: var(--shadow-e-004);
    }
    &-005 {
      --b-card--box-shadow: var(--shadow-e-005);
    }
    &-006 {
      --b-card--box-shadow: var(--shadow-e-006);
    }
    &-007 {
      --b-card--box-shadow: var(--shadow-e-007);
    }
    &-008 {
      --b-card--box-shadow: var(--shadow-e-008);
    }
    &-009 {
      --b-card--box-shadow: var(--shadow-e-009);
    }
    &-010 {
      --b-card--box-shadow: var(--shadow-e-010);
    }
    &-011 {
      --b-card--box-shadow: var(--shadow-e-011);
    }
    &-012 {
      --b-card--box-shadow: var(--shadow-e-012);
    }
    &-013 {
      --b-card--box-shadow: var(--shadow-e-013);
    }
    &-014 {
      --b-card--box-shadow: var(--shadow-e-014);
    }
    &-015 {
      --b-card--box-shadow: var(--shadow-e-015);
    }
    &-016 {
      --b-card--box-shadow: var(--shadow-e-016);
    }
    &-017 {
      --b-card--box-shadow: var(--shadow-e-017);
    }
    &-018 {
      --b-card--box-shadow: var(--shadow-e-018);
    }
    &-019 {
      --b-card--box-shadow: var(--shadow-e-019);
    }
    &-020 {
      --b-card--box-shadow: var(--shadow-e-020);
    }
    &-021 {
      --b-card--box-shadow: var(--shadow-e-021);
    }
    &-022 {
      --b-card--box-shadow: var(--shadow-e-022);
    }
    &-023 {
      --b-card--box-shadow: var(--shadow-e-023);
    }
    &-024 {
      --b-card--box-shadow: var(--shadow-e-024);
    }
  }

  &--color {
    &-default {
      --h-card--background-color: var(--color-theme-white);
    }

    &-success {
      --h-card--background-color: var(--color-theme-success);
    }

    &-info {
      --h-card--background-color: var(--color-theme-info);
    }

    &-danger {
      --h-card--background-color: var(--color-theme-danger);
    }

    &-warn {
      --h-card--background-color: var(--color-theme-warn);
    }

    &-primary {
      --h-card--background-color: var(--color-theme-primary);
    }

    &-secondary {
      --h-card--background-color: var(--color-theme-secondary);
    }
  }
}
</style>
@/utils/validations@/assets/constants