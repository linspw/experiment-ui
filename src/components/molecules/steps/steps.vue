<template>
  <HStepsComponent />
</template>

<script>
/* eslint-disable import/first, no-param-reassign */
export default {
  name: 'HSteps',
};
</script>

<script setup>
import {
  provide,
  useSlots,
  computed,
  TransitionGroup,
  h,
} from 'vue';
import { HStepKey } from './step-key';

const $props = defineProps({
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

const updatePosition = (index) => {
  $emit('update:modelValue', index);
};

const updateProps = (element, index) => {
  if (element?.type?.name === 'HStep') {
    if (!element.props) element.props = {};
    if ($props.autoPosition) {
      element.props.position = index + 1;
    }
    element.props['onUpdate:modelValue'] = (stepIndex) => updatePosition(stepIndex);
    element.key = index;
  }

  return element;
};

const getComponents = (element) => {
  if (element?.type?.name !== 'HStep' && element?.children?.forEach) {
    return element?.children?.map?.(getComponents);
  }

  return element;
};

const Steps = computed(() => {
  const result = $slots.default();
  result.flatMap(getComponents).map(updateProps);
  return result;
});

const HStepsComponent = () => h(TransitionGroup, {
  name: $props.hasAnimation ? 'h-steps__transition-list' : undefined,
  tag: 'ul',
  type: 'transition',
  class: {
    'h-steps': true,
    [`h-steps--direction-${$props.direction}`]: $props.direction,
  },
}, () => Steps.value);

provide(HStepKey, $props);
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
