<template>
  <div
    :class="{
      ['a-input']: true,
      [`a-input--behavior-${behavior}`]: behavior != 'default',
      [`a-input--size-${size}`]: size,
      [`a-input--icon`]: icon,
    }"
  >
    <AIcon
      v-if="icon"
      :icon="icon"
    />
    <input
      :placeholder="placeholder"
      :type="type"
      :value="value"
      class="a-input__field"
      required
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
    placeholder: {
      type: String,
      default: '',
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
  box-shadow: var(--shadow-elevation-02);
  display: inline-block;
  height: fit-content;
  min-width: 160px;
  position: relative;

  &--icon {
    & > .a-icon {
      align-items: center;
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
    color: var(--colors-scale-grey-normal);
    background-color: var(--colors-original-white);
    transition: background-color 250ms, color 250ms;

    &:valid {
      color: var(--colors-major-black);
      background-color: var(--colors-scale-grey-normal);
    }

    &::placeholder {
      color: var(--colors-scale-grey-dark);
      font-weight: 500;
    }
  }
}
</style>
