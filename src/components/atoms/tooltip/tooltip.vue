<template>
  <component
    :is="tag"
    class="h-tooltip"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <slot />

    <ATooltipContent
      v-if="isOpen"
      :position="position"
      class="a-tooltip__content"
    >
      {{ content }}
      <slot
        v-if="!content"
        name="content"
      />
    </ATooltipContent>
  </component>
</template>

<script>
import ATooltipContent from './tooltip-content.vue';

export default {
  components: {
    ATooltipContent,
  },
  props: {
    content: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      default: 'bottom-center',
    },
    tag: {
      type: String,
      default: 'span',
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleMouseEnter() {
      this.isOpen = true;
    },
    handleMouseLeave() {
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss">
.h-tooltip {
  position: relative;
}
</style>
