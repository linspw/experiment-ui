<template>
  <div
    :class="{
      'h-select': true,
      [`h-select--behavior-${behavior}`]: behavior != 'default',
      [`h-select--behavior-has-value`]: hasValue,
      [`h-select--size-${size}`]: size,
    }"
  >
    <select
      class="h-select__field"
      v-bind="$attrs"
      @change.stop="handlerChange"
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

export default {
  name: 'HSelect',
  inheritAttrs: false,
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
  computed: {
    hasValue() {
      return Boolean(this.$attrs.value || this.$attrs.modelValue);
    },
  },
  methods: {
    handlerChange($event) {
      if (this.$attrs.onInput) return this.$emit('input', $event.target.value);
      if (this.$attrs.onChange) return this.$emit('change', $event.target.value);
      if (this.$attrs.onSelect) return this.$emit('select', $event.target.value);
      if (this.$attrs['onUpdate:modelValue']) return this.$emit('update:modelValue', $event.target.value);

      return null;
    },
  },
};
</script>

<style lang="scss">
.h-select {
  --h-select--border-color: var(--color-theme-primary);
  --h-select--border-radius: var(--border-radius-normal);
  --h-select--border-style:  solid;
  --h-select--border-width: var(--size-base-micro);
  --h-select__field--color: var(--color-theme-primary);

  --h-select__field--background-color: var(--colors-original-white);

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
      --h-select__field--background-color: var(--colors-scale-grey-light);
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
  color: var(--colors-scale-grey-medium);
  font-weight: 500;
  font-style: italic;
}
</style>
