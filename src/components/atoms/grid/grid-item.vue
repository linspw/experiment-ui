<template>
  <component
    :is="tag"
    :class="{
      [`h-grid-item--behavior-${behavior}`]: behavior,
      [`h-grid-item--column-${column}`]: column,
      [`h-grid-item--row-${row}`]: row,
      ['h-grid-item--responsive']: responsive,
    }"
    class="h-grid-item"
  >
    <slot />
  </component>
</template>

<script>
import { shouldBeOneOf } from '@utils/validations';
import {
  gridItemTypes,
} from '@assets/constants';

export default {
  name: 'HGridItem',
  inject: {
    responsiveFromParent: {
      from: 'responsive',
      default: null,
    },
  },
  props: {
    behavior: {
      type: String,
      default: null,
    },
    column: {
      type: [Number, String],
      default: 12,
    },
    row: {
      type: [Number, String],
      default: 1,
    },
    tag: {
      type: String,
      default: 'div',
      validator: shouldBeOneOf(gridItemTypes),
    },
    responsive: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    isResponsive() {
      return this.responsive || this.responsiveFromParent;
    },
  },
};
</script>

<style lang="scss">
@import '@styles/utils/breakpoints';

.h-grid-item {
  position: relative;
}

.h-grid-item--responsive {
  @for $i from 1 through 12 {
    &.h-grid-item--column-#{$i} {
      grid-column: span #{$i};

      @include for-medium-desktop-down {
        @if $i >= 6 {
          grid-column: span 12;
        } @else {
          grid-column: span 6;
        }
      }
      @include for-large-tablet-down {
        grid-column: span 12;
      }
    }
    &.h-grid-item--row-#{$i} {
      grid-row: span #{$i};
    }
  }
}

@for $i from 1 through 12 {
  .h-grid-item--column-#{$i} {
    grid-column: span #{$i};
  }
  .h-grid-item--row-#{$i} {
    grid-row: span #{$i};
  }
}

.h-grid-item--behavior-horizontal {
  align-items: flex-start;
  display: flex;
}

.h-grid-item--behavior-vertical {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}
</style>
