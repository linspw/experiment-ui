<template>
  <div
    :class="{
      'a-select': true,
      [`a-select--behavior-${behavior}`]: behavior != 'default',
      [`a-select--size-${size}`]: size,
    }"
  >
    <select
      :class="{
        'a-select__field': true,
      }"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <option
        v-if="placeholder"
        :value="placeholder"
        disabled
        hidden
        selected
      >
        {{ placeholder }}
      </option>

      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
import { shouldBeOneOf } from 'vue-prop-validation-helper';

export default {
  props: {
    behavior: {
      type: String,
      default: 'default',
      validator: shouldBeOneOf(['default', 'block']),
    },
    size: {
      default: 'medium',
      type: String,
      validator: shouldBeOneOf(['small', 'medium']),
    },
    options: {
      default() {
        return [];
      },
      type: Array,
    },
    placeholder: {
      default: '',
      type: String,
    },
  },
};
</script>

<style lang="scss">
.a-select {
  border-radius: var(--border-radius-normal);
  border: var(--size-micro) solid var(--colors-scale-grey-medium);
  color: var(--colors-scale-grey-medium);
  display: inline-flex;
  font-family: 'Poppins', sans-serif;
  height: fit-content;
  position: relative;
  width: 303px;

  &--size {
    &-small {
      & > .a-select__field {
        min-height: var(--size-extra-large);
        font-size: var(--size-scalable-micro);
      }
    }
    &-medium {
      & > .a-select__field {
        min-height: var(--size-jumbo);
        font-size: var(--size-scalable-extra-small);
      }
    }
  }

  &--behavior {
    &-block {
      width: 100%;
    }
  }

  &__field {
    background-color: var(--colors-original-white);
    border-radius: var(--border-radius-normal);
    border: none;
    color: var(--colors-scale-grey-dark);
    flex: 1;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    height: 100%;
    left: 0;
    padding-left: var(--size-medium);
    padding-right: var(--size-medium);
    top: 0;
    transition: background-color 250ms, color 250ms;
    width: 100%;
    &::placeholder {
      color: var(--colors-scale-grey-medium);
      font-weight: 500;
    }
  }
}
</style>
