<template>
  <transition
    name="h-modal--fade"
    mode="out-in"
  >
    <div
      v-if="isOpen"
      class="h-modal__mask"
    >
      <div class="h-modal__wrapper">
        <HIcon
          icon="fas fa-times"
          tag="button"
          class="h-modal__button-close"
          color="inverse"
          @click="$emit('closing')"
        />
        <HCard class="h-modal__container">
          <slot />
        </HCard>
      </div>
    </div>
  </transition>
</template>

<script>
import { HCard } from '@components/atoms/card';
import { HIcon } from '@components/atoms/icon';

export default {
  name: 'HModal',
  components: {
    HCard,
    HIcon,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss">
.h-modal__mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(170, 185, 212, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.h-modal__wrapper {
  position: relative;
}

.h-modal__button-close {
  position: absolute;
  right: 0;
  top: -24px;
}

.h-modal--fade-enter-active, .h-modal--fade-leave-active {
  transition: opacity 250ms;
}

.h-modal--fade-enter-from, .h-modal--fade-leave-to {
  opacity: 0;
}
</style>