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
  name: 'HTooltip',
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

.h-tooltip-content {
  background-color: var(--color-theme-primary);
  border-radius: 4px;
  color: var(--color-theme-white);
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
