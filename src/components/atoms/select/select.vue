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
