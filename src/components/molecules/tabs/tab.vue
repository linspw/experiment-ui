<template>
  <div
    class="h-tab"
    :class="{
      'h-tab--behavior-active': isCurrentTab,
      'h-tab--behavior-disabled': $props.disabled,
    }"
    @click="handleChange"
  >
    {{ label }}<slot />
  </div>
</template>

<script setup>
import { inject, computed } from 'vue';
import { BTabsKey } from './tabs-key';

const $props = defineProps({
  label: {
    type: String,
    default: undefined,
  },
  value: {
    type: [String, Number],
    required: true,
  },
  disabled: {
    type: Boolean,
    default: undefined,
  },
});

const { currentTab, handleTabsChange } = inject(BTabsKey);
const $emits = defineEmits(['change']);

const handleChange = () => {
  if ($props.disabled) return;
  $emits('change', $props.value);
  handleTabsChange($props.value);
};
const isCurrentTab = computed(() => currentTab.value === $props.value);
</script>

<style lang="scss">
:root {
  --h-tab--background-color: var(--color-theme-secondary-800);
  --h-tab--color: var(--color-theme-white);
  --h-tab--font-weight: 500;
}

.h-tab {
  display: flex;
  justify-content: center;
  align-items: center;
  flex:1;
  text-transform: uppercase;
  background-color: var(--h-tab--background-color);
  color: var(--h-tab--color);
  font-weight: var(--h-tab--font-weight);

  &--behavior {
    &-disabled {
      --h-tab--background-color: var(--color-grey-scale-400);
      --h-tab--color: var(--color-grey-scale-700);
    }
  }

  &:not(.h-tab--behavior-active):not(.h-tab--behavior-disabled) {
    --h-tab--color: var(--color-grey-scale-100);
  }
}
</style>
