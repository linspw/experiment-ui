<template>
  <transition
    name="h-menu-container__transition"
    appear
  >
    <HCard
      v-if="$props.active"
      :class="{
        [`h-menu-container`]: true,
        [`h-menu-container--position-${$props.position}`]: $props.position,
      }"
      elevation="high"
    >
      <ul
        class="h-menu-container__list"
        role="menu"
        aria-hidden="true"
        aria-orientation="vertical"
        tabindex="-1"
      >
        <slot />
      </ul>
    </HCard>
  </transition>
</template>

<script setup>
import { HCard } from '@components/atoms';
import { provide } from 'vue';

const $props = defineProps({
  position: {
    type: String,
    default: 'bottom-center',
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const $emit = defineEmits(['click']);

const handleClickFromParent = () => {
  $emit('click');
};

provide('handleClickFromParent', handleClickFromParent);
</script>

<style lang="scss">
.h-menu-container {
  position: absolute;
  --h-card--padding: 0;
  min-width: 112px;
  z-index: 200;

  &--position {
    &-none {
      position: relative;
    }
    &-bottom-left {
      top: 110%;
      left: 0;
    }
    &-bottom-right {
      top: 110%;
      right: 0;
    }
    &-bottom-center {
      top: 110%;
      left: 50%;
      transform: translateX(-50%);
    }
    &-top-center {
      bottom: 110%;
      left: 50%;
      transform: translateX(-50%);
    }
    &-left-center {
      top: 50%;
      right: 110%;
      transform: translateY(-50%);
    }
    &-right-center {
      top: 50%;
      left: 110%;
      transform: translateY(-50%);
    }
  }
}
.h-menu-container__list {
  padding: 8px 0;
}

.h-menu-container__transition-enter-active,
.h-menu-container__transition-leave-active {
  transition: opacity 0.125s ease;
}

.h-menu-container__transition-enter-from,
.h-menu-container__transition-leave-to {
  opacity: 0;
}
</style>
