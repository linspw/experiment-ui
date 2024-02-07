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

<script lang="ts">
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
