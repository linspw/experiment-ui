<template>
  <button
    class="h-tab"
    :class="{
      'h-tab--behavior-active': isCurrentTab,
      'h-tab--behavior-disabled': $props.disabled,
    }"
    :disabled="$props.disabled"
    @click="handleChange"
  >
    {{ label }}<slot />
  </button>
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
  --h-tab--background-color: var(--color-theme-primary-900);
  --h-tab--background-color--active: var(--color-theme-primary-900);
  --h-tab--color: var(--color-theme-white);
  --h-tab--color--active: var(--color-theme-white);
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
  transition: background-color 0.125s;

  &--behavior {
    &-active {
      --h-tab--background-color: var(--h-tab--background-color--active);
      --h-tab--color: var(--h-tab--color--active);
    }
    &-disabled {
      --h-tab--background-color: var(--color-grey-scale-400);
      --h-tab--color: var(--color-grey-scale-700);
      cursor: not-allowed;
      pointer-events: all !important;
    }
  }

  &:not(.h-tab--behavior-active):not(.h-tab--behavior-disabled) {
    --h-tab--color: var(--color-grey-scale-100);
  }
}
</style>
