<template>
  <div
    ref="tab"
    class="h-tabs"
    :class="{
      [`h-tabs--behavior-rounded`]: $props.rounded,
    }"
  >
    <slot />

    <div class="h-tabs__line" />
  </div>
</template>

<script setup>
import {
  provide,
  computed,
  reactive,
  ref,
  onMounted,
  onUnmounted,
  watch,
} from 'vue';
import { BTabsKey } from './tabs-key';

const $props = defineProps({
  modelValue: {
    type: [Number, String],
    default: undefined,
  },
  rounded: {
    type: Boolean,
    default: true,
  },
});

const $emits = defineEmits(['update:modelValue']);

const tab = ref();

const $state = reactive({
  lineWidth: undefined,
});

const updatePositionLine = () => {
  const tabActiveRect = tab.value.getElementsByClassName('h-tab--behavior-active')?.[0]?.getBoundingClientRect();
  if (!tabActiveRect) {
    console.warn('Not found tab.');
    return;
  }
  const tabsWrapperRect = tab.value?.getBoundingClientRect();
  $state.lineWidth = `${tabActiveRect.width}px`;
  $state.lineTranslateX = `translateX(${tabActiveRect.left - tabsWrapperRect.left}px)`;
};

const handleTabsChange = (newValue) => {
  $emits('update:modelValue', newValue);
};

watch(() => $props.modelValue, () => {
  updatePositionLine();
}, { flush: 'post' });

provide(BTabsKey, { handleTabsChange, currentTab: computed(() => $props.modelValue) });

onMounted(() => {
  updatePositionLine();
  window.addEventListener('resize', updatePositionLine, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('resize', updatePositionLine);
});
</script>

<style lang="scss">
:root {
  --h-tabs--border-radius: var(--border-radius-normal);
  --h-tabs--box-shadow: var(--shadow-e-002);
  --h-tabs__line-height: var(--size-base-micro);
}

.h-tabs {
  box-shadow: var(--h-tabs--box-shadow);
  width: 100%;
  min-height: 48px;
  display: flex;
  position: relative;
  overflow-x: auto;
  border-radius: var(--h-tabs--border-radius);

  &--behavior {
    &-rounded {
      --h-tabs--border-radius: var(--border-radius-high);
    }
  }
}

.h-tabs__line {
  position: absolute;
  bottom: 0;
  height: var(--h-tabs__line-height);
  background-color: var(--color-white);
  width: v-bind('$state.lineWidth');
  transform: v-bind('$state.lineTranslateX');
  transition: transform 0.25s ease-in;
}
</style>
