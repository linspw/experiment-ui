<template>
  <ul
    :class="{
      'h-steps': true,
      [`h-steps--direction-${$config.direction}`]: $config.direction,
    }"
  >
    <StepsComponent />
  </ul>
</template>



<script setup lang="ts">
import {
  provide,
  useSlots,
  computed,
} from 'vue';
import { HStepKey } from './step-key';

defineOptions({
  name: 'HSteps',
})

const $config = defineProps({
  direction: {
    type: String,
    default: 'horizontal',
  },
  textDirection: {
    type: String,
    default: 'horizontal',
  },
  modelValue: {
    type: Number,
    default: undefined,
  },
  autoPosition: {
    type: Boolean,
    default: true,
  },
  clickable: {
    type: Boolean,
    default: true,
  },
  showDescriptionOnlyIfSelected: {
    type: Boolean,
    default: true,
  },
  hasAnimation: {
    type: Boolean,
    default: false,
  },
});

const $emit = defineEmits(['update:modelValue']);

const $slots = useSlots();

const updatePosition = (index: number) => {
  $emit('update:modelValue', index);
};

const updateProps = (element: any, index: number) => {
  if (element?.type?.name === 'HStep') {
    if (!element.props) element.props = {};
    if ($config.autoPosition) {
      element.props.position = index + 1;
    }
    element.key = index;
  }

  return element;
};

const getComponents = (element: any) => {
  if (element?.type?.name !== 'HStep' && element?.children?.forEach) {
    return element?.children?.map?.(getComponents);
  }

  return element;
};

const StepsComponent = computed(() => {
  const result = $slots.default?.();
  result?.flatMap(getComponents).map(updateProps);
  return () => result;
});

provide(HStepKey, {
  $config,
  updatePosition,
});
</script>

<style lang="scss">
.h-steps {
  position: relative;
  display: flex;

  &--direction {
    &-horizontal {
      flex-direction: row;
    }

    &-vertical {
      flex-direction: column;
    }
  }
}

.h-steps__transition-list-move, /* apply transition to moving elements */
.h-steps__transition-list-enter-active,
.h-steps__transition-list-leave-active {
  transition: all 0.5s ease;
}

.h-steps__transition-list-enter-from,
.h-steps__transition-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
