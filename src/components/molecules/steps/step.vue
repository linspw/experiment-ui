<script>
/* eslint-disable import/first, no-param-reassign */
export default {
  name: 'HStep',
};
</script>

<template>
  <li
    class="h-step"
    :class="{
      [`h-step--behavior-filled`]: isFilled && !isSelected,
      [`h-step--behavior-selected`]: isSelected,
      [`h-step--behavior-clickable`]: $config.clickable || $props.clickable,
      [`h-step--direction-${$config.direction}`]: $config.direction,
      [`h-step--text-direction-${$config.textDirection}`]: $config.textDirection,
    }"
  >
    <div
      class="h-step__content"
    >
      <div
        class="h-step__badge"
        @click="click"
      >
        <h-icon
          v-if="$props.icon"
          :icon="$props.icon"
          :color="$props.iconColor"
          :size="$props.iconSize"
        />

        <template v-else>
          {{ $props.position }}
        </template>
      </div>

      <div class="h-step__text">
        <h-text
          class="h-step__text-title"
          weight="semi-bold"
          @click="click"
        >
          <slot />{{ $props.title }}
        </h-text>

        <transition
          name="h-step__transition"
        >
          <h-text
            v-if="showDescription"
            class="h-step__text-description"
            dynamic
          >
            <slot
              name="description"
              :on="{click}"
            />{{ $props.description }}
          </h-text>
        </transition>
      </div>
    </div>

    <div class="h-step__line" />
  </li>
</template>

<script setup>
import { inject, computed, useSlots } from 'vue';
import { HStepKey } from './step-key';

const $props = defineProps({
  clickable: {
    type: Boolean,
    default: undefined,
  },
  position: {
    type: Number,
    default: undefined,
  },
  title: {
    type: String,
    default: undefined,
  },
  description: {
    type: String,
    default: undefined,
  },
  icon: {
    type: String,
    default: undefined,
  },
  iconColor: {
    type: String,
    default: 'inverse',
  },
  iconSize: {
    type: String,
    default: 'inherit',
  },
});

const $slots = useSlots();

const $config = inject(HStepKey);

const isSelected = computed(() => $config.modelValue === $props.position);
const isFilled = computed(() => $config.modelValue >= $props.position);

const showDescription = computed(() => {
  if (!$slots?.description) return false;
  return ($config.showDescriptionOnlyIfSelected ? isSelected.value : true);
});

const $emit = defineEmits(['update:modelValue']);

const click = () => {
  if ($config.clickable || $props.clickable) $emit('update:modelValue', $props.position);
};
</script>

<style lang="scss">
:root {
  --h-step--margin: 0;
  --h-step--flex: 1;
  --h-step--flex-direction: column;
  --h-step__content--flex-direction: column;
  --h-step__badge-size: 28px;
  --h-step__line--spacing: 0rem;
  --h-step__line--thickness: 1px;
  --h-step__line: var(--color-blue-grey-scale-300);
  --h-step__line--width: 0;
  --h-step__line--height: 0;
  --h-step__line--space: var(--h-step__badge-size);
  --h-step__line--top: auto;
  --h-step__line--left: auto;
  --h-step__line--position: absolute;
  --h-step__line--flex: 0 1 auto;
  --h-step__line--margin: 0;
  --h-step__line--color: var(--color-grey-scale-500);
  --h-step__line--color--selected: var(--color-grey-scale-500);
  --h-step__line--color--filled: var(--color-grey-scale-500);
  --h-step__badge--background-color: var(--color-grey-scale-500);
  --h-step__badge--background-color--selected: var(--color-blue-scale-800);
  --h-step__badge--background-color--filled: var(--color-blue-scale-800);
  --h-step__badge-color: var(--color-white);
  --h-step__text--margin: 0;
  --h-step__text--color: var(--color-grey-scale-500);
  --h-step__text--color--filled: inherit;
  --h-step__text--color--selected: inherit;
  --h-step--align-items: stretch;
  --h-step__content--align-items: stretch;
}

.h-step {
  position: relative;
  display: flex;
  flex: var(--h-step--flex);
  margin: var(--h-step--margin);
  align-items: var(--h-step--align-items);
  flex-direction: var(--h-step--flex-direction);
}

.h-step__content {
  display: flex;
  position: relative;
  flex-direction: var(--h-step__content--flex-direction);
  align-items: var(--h-step__content--align-items);
}

.h-step--behavior-selected {
  --h-step__badge--background-color: var(--h-step__badge--background-color--selected);
  --h-step__line--color: var(--h-step__line--color--selected);
  --h-step__text--color: var(--h-step__text--color--selected);
}

.h-step--behavior-filled {
  --h-step__text--color: var(--h-step__text--color--filled);
  --h-step__line--color: var(--h-step__line--color--filled);
  --h-step__badge--background-color: var(--h-step__badge--background-color--filled);
}

.h-step--behavior-clickable .h-step__badge,
.h-step--behavior-clickable .h-step__text-title {
  cursor: pointer;
  // &:hover {
  //   opacity: 0.5;
  // }
  &:active {
    opacity: 0.7;
  }
}

.h-step--direction-horizontal.h-step--text-direction-horizontal {
  --h-step--flex-direction: row;
  --h-step__content--flex-direction: row;
  --h-step--flex: 1 1 fit-content;
  --h-step__text--margin: 0 0 0 8px;
  --h-step__line--position: relative;
  --h-step__line--width: 0;
  --h-step__line--flex: 1;
  --h-step__line--margin: 0 8px;
  --h-step__line--height: var(--h-step__line--thickness);
  --h-step--align-items: center;

  &:last-child {
    --h-step--flex: 0 1 auto;
  }
}

.h-step--direction-horizontal.h-step--text-direction-vertical {
  --h-step--flex-direction: column;
  --h-step__content--flex-direction: column;
  --h-step__content--align-items: center;
  --h-step__text--margin: 8px 0 0 0;
  --h-step__line--width: calc(100% - var(--h-step__line--space) * 2);
  --h-step__line--top: calc(var(--h-step__line--space) / 2);
  --h-step__line--left: calc(50% + var(--h-step__line--space));
  --h-step__line--position: absolute;
  --h-step__line--height: var(--h-step__line--thickness);
  --h-step--align-items: center;
}

.h-step--direction-vertical.h-step--text-direction-horizontal {
  --h-step--flex-direction: row;
  --h-step__content--flex-direction: row;
  --h-step__text--margin: 0 0 0 8px;
  --h-step__line--height: calc(100% - (var(--h-step__line--space) / 4) * 2);
  --h-step__line--width: var(--h-step__line--thickness);
  --h-step__line--position: absolute;
  --h-step__line--top: calc(var(--h-step__line--space) + var(--h-step__line--space) / 4);
  --h-step__line--left: calc(var(--h-step__line--space) / 2);
  --h-step--margin: 0 0 var(--h-step__line--space) 0;
}

.h-step--direction-vertical.h-step--text-direction-vertical {
  --h-step__content--flex-direction: column;
  --h-step--align-items: center;
  --h-step__line--position: relative;
  --h-step__content--align-items: center;
  --h-step__line--height: calc(var(--h-step__line--space) - (var(--h-step__line--space) / 4) * 2);
  --h-step__line--width: var(--h-step__line--thickness);
  --h-step__line--margin: 8px 0;
  --h-step__text--margin: 8px 0 0 0;
}

.h-step__line {
  position: var(--h-step__line--position);
  border-radius: 4px;
  width: var(--h-step__line--width);
  top: var(--h-step__line--top);
  left: var(--h-step__line--left);
  flex: var(--h-step__line--flex);
  margin: var(--h-step__line--margin);
  height: var(--h-step__line--height);
  background-color: var(--h-step__line--color);
  z-index: 1000;
}

.h-step:last-child {
  --h-step--margin: 0;

  & .h-step__line {
    display: none;
  }
}

.h-step__badge {
  min-width: var(--h-step__badge-size);
  min-height: var(--h-step__badge-size);
  width: var(--h-step__badge-size);
  height: var(--h-step__badge-size);
  background-color: var(--h-step__badge--background-color);
  border-radius: var(--border-radius-circle);
  color: var(--h-step__badge-color);
  transition: background-color 0.125s ease-in;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
};

.h-step__text {
  margin: var(--h-step__text--margin);
  color: var(--h-step__text--color);
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.h-step__text-description {
  max-height: 500px;
  overflow: visible;
}

.h-step__transition-enter-active,
.h-step__transition-leave-active {
  transition: opacity 0.25s ease-in-out, max-height 0.25s ease-in-out;
}

.h-step__transition-enter-from,
.h-step__transition-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
