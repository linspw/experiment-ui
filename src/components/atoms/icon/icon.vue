<template>
  <component
    :is="tag"
    :class="{
      'h-icon': true,
      [`h-icon--size-${size}`]: size,
      [`h-icon--color-${color}`]: color !== 'inherit',
      [`h-icon--bounds-${bounds}`]: bounds !== 'default',
    }"
  >
    <i :class="internalIcon" />
  </component>
</template>

<script>
import { shouldBeOneOf } from '@utils/validations';
import {
  iconColors, iconTypes, iconSizes, iconFormats,
} from '@assets/constants';

export default {
  name: 'HIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    bounds: {
      type: String,
      default: 'default',
      validator: shouldBeOneOf(iconFormats),
    },
    size: {
      type: String,
      default: 'large',
      validator: shouldBeOneOf(iconSizes),
    },
    tag: {
      type: String,
      default: 'div',
      validator: shouldBeOneOf(iconTypes),
    },
    color: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf(iconColors),
    },
  },
  computed: {
    internalIcon() {
      return `${this.icon} fa-fw`;
    },
  },
};
</script>

<style lang="scss">
:root {
  --h-icon--color: inherit;
  --h-icon--bounds-color: var(--color-theme-secondary);
  --h-icon--bounds-padding: var(--size-base-small);
  --h-icon--font-size: inherit;
  --h-icon--min-height: inherit;
  --h-icon--min-width: inherit;
}

.h-icon {
  color: var(--h-icon--color);
  display: inline-flex;
  position: relative;

  & > i {
    font-size: calc(var(--h-icon--font-size) - 4px);
    height: var(--h-icon--min-height);
    width: var(--h-icon--min-width);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &--size {
    &-nano {
      --h-icon--font-size: var(--size-scalable-nano);
      --h-icon--min-height: var(--size-scalable-nano);
      --h-icon--min-width: var(--size-scalable-nano);
    }
    &-micro {
      --h-icon--font-size: var(--size-scalable-micro);
      --h-icon--min-height: var(--size-scalable-micro);
      --h-icon--min-width: var(--size-scalable-micro);
    }
    &-extra-small {
      --h-icon--font-size: var(--size-scalable-extra-small);
      --h-icon--min-height: var(--size-scalable-extra-small);
      --h-icon--min-width: var(--size-scalable-extra-small);
    }
    &-small {
      --h-icon--font-size: var(--size-scalable-small);
      --h-icon--min-height: var(--size-scalable-small);
      --h-icon--min-width: var(--size-scalable-small);
    }
    &-medium {
      --h-icon--font-size: var(--size-scalable-medium);
      --h-icon--min-height: var(--size-scalable-medium);
      --h-icon--min-width: var(--size-scalable-medium);
    }
    &-large {
      --h-icon--font-size: var(--size-scalable-large);
      --h-icon--min-height: var(--size-scalable-large);
      --h-icon--min-width: var(--size-scalable-large);
    }
    &-extra-large {
      --h-icon--font-size: var(--size-scalable-extra-large);
      --h-icon--min-height: var(--size-scalable-extra-large);
      --h-icon--min-width: var(--size-scalable-extra-large);
    }
    &-jumbo {
      --h-icon--font-size: var(--size-scalable-jumbo);
      --h-icon--min-height: var(--size-scalable-jumbo);
      --h-icon--min-width: var(--size-scalable-jumbo);
    }
    &-extra-jumbo {
      --h-icon--font-size: var(--size-scalable-extra-jumbo);
      --h-icon--min-height: var(--size-scalable-extra-jumbo);
      --h-icon--min-width: var(--size-scalable-extra-jumbo);
    }
    &-giant {
      --h-icon--font-size: var(--size-scalable-giant);
      --h-icon--min-height: var(--size-scalable-giant);
      --h-icon--min-width: var(--size-scalable-giant);
    }
    &-extra-giant {
      --h-icon--font-size: var(--size-scalable-extra-giant);
      --h-icon--min-height: var(--size-scalable-extra-giant);
      --h-icon--min-width: var(--size-scalable-extra-giant);
    }
    &-colossal {
      --h-icon--font-size: var(--size-scalable-colossal);
      --h-icon--min-height: var(--size-scalable-colossal);
      --h-icon--min-width: var(--size-scalable-colossal);
    }
    &-extra-colossal {
      --h-icon--font-size: var(--size-scalable-extra-colossal);
      --h-icon--min-height: var(--size-scalable-extra-colossal);
      --h-icon--min-width: var(--size-scalable-extra-colossal);
    }
    &-mega {
      --h-icon--font-size: var(--size-scalable-mega);
      --h-icon--min-height: var(--size-scalable-mega);
      --h-icon--min-width: var(--size-scalable-mega);
    }
    &-extra-mega {
      --h-icon--font-size: var(--size-scalable-extra-mega);
      --h-icon--min-height: var(--size-scalable-extra-mega);
      --h-icon--min-width: var(--size-scalable-extra-mega);
    }
    &-immense {
      --h-icon--font-size: var(--size-scalable-immense);
      --h-icon--min-height: var(--size-scalable-immense);
      --h-icon--min-width: var(--size-scalable-immense);
    }
  }

  &--color {
    &-primary {
      --h-icon--color: var(--color-theme-primary);
    }
    &-secondary {
      --h-icon--color: var(--color-theme-secondary);
    }
    &-interactive {
      --h-icon--color: var(--color-theme-secondary);
      &:hover {
        color: var(--color-theme-info);
      }
    }
    &-grey {
      --h-icon--color: var(--color-theme-grey);
    }
    &-success {
      --h-icon--color: var(--color-theme-success);
    }
    &-danger {
      --h-icon--color: var(--color-theme-danger);
    }
    &-warn {
      --h-icon--color: var(--color-theme-warn);
    }
    &-info {
      --h-icon--color: var(--color-theme-info);
    }
    &-inverse {
      --h-icon--color: var(--color-theme-inverse);
    }
  }

  &--bounds {
    &-circle {
      padding: var(--h-icon--bounds-padding);
      background-color: var(--h-icon--bounds-color);
      border-radius: var(--border-radius-circle);
    }

    &-rounded {
      padding: var(--h-icon--bounds-padding);
      background-color: var(--h-icon--bounds-color);
      border-radius: var(--border-radius-normal);
    }

    &-square {
      padding: var(--h-icon--bounds-padding);
      background-color: var(--h-icon--bounds-color);
    }
  }
}

</style>
@/utils/validations@/assets/constants