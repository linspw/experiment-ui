<template>
  <component
    :is="$props.tag"
    :class="{
      [`h-grid-item--behavior-${$props.behavior}`]: $props.behavior,
      [`h-grid-item--column-${$props.column}`]: $props.column,
      [`h-grid-item--row-${$props.row}`]: $props.row,
      ['h-grid-item--responsive']: $state.isResponsive,
    }"
    class="h-grid-item"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { shouldBeOneOf } from '@utils/validations';
import { reactive, computed, inject } from 'vue';
import { useInterface } from '@composables';
import { GridContainerKey } from './grid-container-key';

const { gridContainerProps: $config} = inject(GridContainerKey)! ?? {};
const $interfaceState = useInterface();

const $props = defineProps({
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
    validator: shouldBeOneOf([
      'div',
      'article',
      'form',
      'button',
      'a',
      'router-link',
      'header',
      'footer',
      'span',
    ]),
  },
  responsive: {
    type: Boolean,
    default: false,
  },
});

// const name = 'BGridItem';

const $state = reactive({
  isResponsive: computed(() => $props.responsive || $config.responsive),
  gridConfig: computed(() => {
    if (!$state.isResponsive) return { column: $props.column, row: $props.row };

    let newColumnSize = $props.column;
    const halfParentColumns = Math.floor($config.columns / 2);

    if ($interfaceState.window.isSizeDown('largeTablet')) {
      newColumnSize = $config.columns;
    } else if ($interfaceState.window.isSizeDown('mediumDesktop')) {
      newColumnSize = parseInt($props.column as string, 10) >= halfParentColumns ? $config.columns : halfParentColumns;
    }

    return {
      column: newColumnSize,
      row: $props.row,
    };
  }),
});
</script>

<style lang="scss">
@import '@styles/utils/breakpoints';

.h-grid-item {
  position: relative;

  grid-column: span var(--h-grid-item--column-number, v-bind('$state.gridConfig.column'));
  grid-row: span var(--h-grid-item--row-number, v-bind('$state.gridConfig.row'));
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
@/utils/validations