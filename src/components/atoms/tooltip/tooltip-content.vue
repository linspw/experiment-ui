<template>
  <transition
    name="h-tooltip-content--fade"
    mode="out-in"
    appear
  >
    <span
      class="h-tooltip-content"
      :class="{ [`h-tooltip-content--position-${position}`] :position }"
    >
      {{ content }}
      <slot />
    </span>
  </transition>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: 'bottom-center',
    },
    content: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.h-tooltip-content {
  background-color: var(--color-theme-primary);
  border-radius: 4px;
  color: var(--colors-original-white);
  display: inline-block;
  font-weight: 400;
  padding: 16px;
  position: absolute;
  text-align: center;
  z-index: 100;

  &--position-{
    &top-center {
      bottom: 110%;
      left: 50%;
      transform: translateX(-50%);
    }
    &bottom-center {
      top: 110%;
      left: 50%;
      transform: translateX(-50%);
    }
    &left-center {
      top: 50%;
      right: 110%;
      transform: translateY(-50%);
    }
    &right-center {
      top: 50%;
      left: 110%;
      transform: translateY(-50%);
    }
  }
}

.h-tooltip-content--fade-enter-active, .h-tooltip-content--fade-leave-active {
  transition: opacity 250ms;
}

.h-tooltip-content--fade-enter-from,
.h-tooltip-content--fade-leave-to {
  opacity: 0;
}
</style>
