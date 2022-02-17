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
