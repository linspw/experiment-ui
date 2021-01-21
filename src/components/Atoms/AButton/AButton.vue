<template>
  <button
    :class="{
      [`a-button`]: true,
      [`a-button--behavior-${behavior}`]: behavior,
      [`a-button--variant-${variant}`]: variant,
    }"
    @click="$emit('click')"
  >
    <AIcon :icon="icon" v-if="icon" />
    <span :class="{
      'a-button__text': true,
      'a-button__text--icon': icon      
    }">
      <slot />
    </span>
  </button>
</template>

<script>
import { AIcon } from '@/components/Atoms/AIcon';

export default {
  name: 'a-button',
  components: { AIcon },
  props: {
    behavior: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: 'primary',
    },
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.a-button {
  align-items: center;
  border-radius: var(--border-radius-normal);
  display: inline-flex;
  justify-content: center;
  padding: var(--size-small) var(--size-large);
  transition: background-color 250ms, opacity 250ms;
  font-weight: 500;

  &--variant {
    &-primary {
      background-color: var(--colors-original-white);
      box-shadow: var(--shadow-elevation-02);
      color: var(--colors-normal-dark-blue);
      &:hover {
        background-color: #CFDAE3;
      }
      &:active {
        background-color: #839fb6;
      }
    }
  }

  &--behavior {
    &-block {
      width: 100%;
    }
  }

  &__text {
    &--icon {
      margin-left: var(--size-small);
    }
  }
}
</style>
