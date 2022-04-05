<template>
  <transition
    name="h-modal--fade"
    mode="out-in"
  >
    <div
      v-if="active"
      class="h-modal"
      :class="{
        [`h-modal--size-${size}`]: size !== 'default',
      }"
    >
      <div
        class="h-modal__overlay"
        @click="handleBackgroundClick"
      />

      <div class="h-modal__wrapper">
        <HIcon
          v-if="hasCloseButton"
          icon="fas fa-times"
          tag="button"
          class="h-modal__button-close"
          color="inverse"
          @click="$emit('deactivating')"
        />
        <HCard class="h-modal__content">
          <slot />
        </HCard>
      </div>
    </div>
  </transition>
</template>

<script>
import { HCard } from '@components/atoms/card';
import { HIcon } from '@components/atoms/icon';
import { shouldBeOneOf } from '@utils/validations';
import {
  modalSizes,
} from '@assets/constants';

export default {
  name: 'HModal',
  components: {
    HCard,
    HIcon,
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    hasCloseButton: {
      type: Boolean,
      default: true,
    },
    closeWhenClickBackground: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: 'default',
      validator: shouldBeOneOf(modalSizes),
    },
  },
  emits: ['deactivating'],
  setup(props, { emit: $emit }) {
    const handleBackgroundClick = () => {
      if (props.closeWhenClickBackground) $emit('deactivating');
    };

    return { handleBackgroundClick };
  },
};
</script>

<style lang="scss">
:root {
  --h-modal__overlay-background-color: rgba(170, 185, 212, 0.4);
  --h-modal-z-index: 9998;
  --h-modal__wrapper-width: auto;
  --h-modal__wrapper-max-width: none;
}

.h-modal {
  position: fixed;
  z-index: var(--h-modal-z-index);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--size-base-large);

  &--size {
    &-large {
      --h-modal__wrapper-width: 100%;
      --h-modal__wrapper-max-width: 1200px;
    }
    &-medium {
      --h-modal__wrapper-width: 100%;
      --h-modal__wrapper-max-width: 800px;
    }
    &-small {
      --h-modal__wrapper-width: 100%;
      --h-modal__wrapper-max-width: 400px;
    }
  }
}

.h-modal__overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  background: var(--h-modal__overlay-background-color);
}

.h-modal__wrapper {
  position: relative;
  width: var(--h-modal__wrapper-width);
  max-width: var(--h-modal__wrapper-max-width);
}

.h-modal__button-close {
  position: absolute;
  right: 0;
  top: -24px;
}

.h-modal--fade-enter-active,
.h-modal--fade-leave-active {
  transition: opacity 250ms;
}

.h-modal--fade-enter-from,
.h-modal--fade-leave-to {
  opacity: 0;
}
</style>
