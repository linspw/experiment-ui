<template>
  <div
    :class="{
      ['a-input']: true,
      [`a-input--behavior-${behavior}`]: behavior != 'default',
      [`a-input--behavior-${shadow}`]: shadow,
      [`a-input--icon`]: icon,
      [`a-input--size-${size}`]: size,
    }"
  >
    <AIcon
      v-if="icon"
      :icon="icon"
    />
    <input
      v-bind="$attrs"
      :type="type"
      :value="value"
      class="a-input__field"
      @input="handleInput"
    >
  </div>
</template>

<script>
import { shouldBeOneOf } from 'vue-prop-validation-helper';
import { AIcon } from '@/components/atoms/a-icon';

export default {
  components: {
    AIcon,
  },
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: shouldBeOneOf(['small', 'medium', 'large']),
    },
    behavior: {
      type: String,
      default: 'default',
      validator: shouldBeOneOf(['default', 'block']),
    },
    isLoading: {
      type: Boolean,
      default: true,
    },
    value: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    shadow: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.a-input {
  border-radius: var(--border-radius-normal);
  border: var(--size-micro) solid var(--colors-scale-grey-medium);
  display: inline-block;
  height: fit-content;
  min-width: 160px;
  position: relative;

  &--icon {
    & > .a-icon {
      align-items: center;
      color: var(--colors-scale-grey-medium);
      display: flex;
      height: 100%;
      justify-content: center;
      padding-left: var(--size-medium);
      padding-right: var(--size-medium);
      position: absolute;
      z-index: 10;
    }
    & > .a-input__field {
      padding-left: var(--size-jumbo) !important;
    }
  }

  &--behavior {
    &-block {
      width: 100%;
    }
    &-shadow {
      box-shadow: var(--shadow-elevation-02);
    }
  }

  &--size {
    &-medium {
      min-height: var(--size-jumbo);

      & > .a-input__field {
        padding: var(--size-medium);
      }
    }

    &-large {
      min-height: 50px;

      & > .a-input__field {
        padding: 24px;
      }
    }
  }

  &__field {
    font-family: 'Montserrat', sans-serif;
    border-radius: var(--border-radius-normal);
    font-weight: 500;
    height: 100%;
    left: 0;
    top: 0;
    width: 100%;
    color: var(--colors-major-black);
    background-color: var(--colors-original-white);
    transition: background-color 250ms, color 250ms;

    &::placeholder {
      color: var(--colors-scale-grey-dark);
      font-weight: 500;
    }
  }
}
</style>
