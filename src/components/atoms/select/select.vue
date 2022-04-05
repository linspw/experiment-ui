<template>
  <div
    :class="{
      'h-select': true,
      [`h-select--behavior-block`]: block,
      [`h-select--behavior-has-value`]: hasValue,
      [`h-select--size-${size}`]: size,
    }"
  >
    <select
      class="h-select__field"
      v-bind="$attrs"
      :value="internalValue"
      @change.stop="handlerChange($event?.target?.value)"
    >
      <option
        v-if="placeholder"
        class="h-select__field-option"
        :value="placeholder"
        disabled
        hidden
        selected
      >
        {{ placeholder }}
      </option>

      <option
        v-for="(option, index) in options"
        :key="option.value || index"
        class="h-select__field-option"
        :value="option.value || option"
      >
        {{ option.text || option }}
      </option>
    </select>
  </div>
</template>

<script>
import { shouldBeOneOf } from '@utils/validations';
import {
  selectSizes,
} from '@assets/constants';

export default {
  name: 'HSelect',
  inheritAttrs: false,
  props: {
    block: {
      type: Boolean,
      default: false,
    },
    size: {
      default: 'medium',
      type: String,
      validator: shouldBeOneOf(selectSizes),
    },
    options: {
      default() {
        return [];
      },
      type: Array,
    },
    placeholder: {
      default: null,
      type: String,
    },
    value: {
      type: [Object, String],
      default: null,
    },
    modelValue: {
      type: [Object, String],
      default: null,
    },
  },
  emits: ['input', 'change', 'select', 'update:modelValue'],
  computed: {
    internalValue() {
      return this.value || this.modelValue;
    },
    hasValue() {
      return Boolean(this.internalValue);
    },
  },
  methods: {
    handlerChange(value) {
      this.$emit('input', value);
      this.$emit('change', value);
      this.$emit('select', value);
      this.$emit('update:modelValue', value);
    },
  },
};
</script>

<style lang="scss">
:root {
  --h-select--border-color: var(--color-theme-primary);
  --h-select--border-radius: var(--border-radius-normal);
  --h-select--border-style:  solid;
  --h-select--border-width: var(--size-base-micro);
  --h-select__field--color: var(--color-theme-primary);
  --h-select__field--background-color: var(--color-theme-white);
}

.h-select {
  border-color: var(--h-select--border-color);
  border-radius: var(--h-select--border-radius);
  border-style: var(--h-select--border-style);
  border-width: var(--h-select--border-width);

  display: inline-flex;
  font-family: 'Red Hat Text', sans-serif;
  height: fit-content;
  position: relative;
  width: 303px;

  &--size {
    &-small {
      & > .h-select__field {
        min-height: var(--size-base-extra-large);
        font-size: var(--size-scalable-micro);
      }
    }
    &-medium {
      & > .h-select__field {
        min-height: var(--size-base-jumbo);
        font-size: var(--size-scalable-extra-small);
      }
    }
  }

  &--behavior {
    &-block {
      width: 100%;
    }
    &-has-value {
      --h-select__field--background-color: var(--color-blue-grey-scale-100);
    }
  }

  &__field {
    background-color: var(--h-select__field--background-color);
    border-radius: var(--border-radius-normal);
    border: none;
    color: var(--h-select__field--color);
    flex: 1;
    font-family: 'Red Hat Text', sans-serif;
    font-weight: 500;
    height: 100%;
    left: 0;
    padding-left: var(--size-base-medium);
    padding-right: var(--size-base-medium);
    top: 0;
    transition: background-color 250ms, color 250ms;
    width: 100%;
  }
}

.h-select__field--placeholder {
  color: var(--color-blue-grey-scale-300);
  font-weight: 500;
  font-style: italic;
}

</style>
