<template>
  <transition
    name="a-modal--fade"
    mode="out-in"
  >
    <div
      v-if="isOpen"
      class="a-modal__mask"
    >
      <div class="a-modal__wrapper">
        <a-icon
          icon="fas fa-times"
          tag="button"
          class="a-modal__button-close"
          color="inverse"
          @click="$emit('closing')"
        />
        <a-card class="a-modal__container">
          <slot />
        </a-card>
      </div>
    </div>
  </transition>
</template>

<script>
import { ACard } from '@/components/atoms/a-card';
import { AIcon } from '@/components/atoms/a-icon';

export default {
  components: {
    ACard,
    AIcon,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
.a-modal__mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--colors-scale-grey-high);
  display: flex;
  justify-content: center;
  align-items: center;
}

.a-modal__wrapper {
  position: relative;
}

.a-modal__button-close {
  position: absolute;
  right: 0;
  top: -24px;
}

.a-modal--fade-enter-active, .a-modal--fade-leave-active {
  transition: opacity 250ms;
}

.a-modal--fade-enter, .a-modal--fade-leave-to {
  opacity: 0;
}
</style>
