<template>
  <div
    :class="{
      'a-select': true,
      [`a-select--behavior-${behavior}`]: behavior != 'default',
      [`a-select--size-${size}`]: size,
    }"
  >
    <select
      class="a-select__field"
      v-bind="$attrs"
      v-on="listeners"
      @select="handlerInput"
    >
      <option
        v-if="placeholder"
        class="a-select__field-option a-select__field-option--placeholder"
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
        class="a-select__field-option"
        :value="option.value || option"
      >
        {{ option.text || option }}
      </option>
    </select>
  </div>
</template>

<script>
import { shouldBeOneOf } from 'vue-prop-validation-helper';

export default {
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
    listeners() {
      return {
        ...this.$listeners,
        input: this.handlerInput,
        select: this.handlerInput,
        change: this.handlerInput,
      };
    },
  },
  methods: {
    handlerInput($event) {
      if (this.$listeners.input) return this.$emit('input', $event.target.value);
      if (this.$listeners.change) return this.$emit('change', $event.target.value);

      return this.$emit('select', $event.target.value);
    },
  },
};
</script>

<style lang="scss">
.a-select {
  --a-select--border-color: var(--color-theme-primary);
  --a-select--border-radius: var(--border-radius-normal);
  --a-select--border-style:  solid;
  --a-select--border-width: var(--size-micro);
  --a-select__field--color: var(--color-theme-primary);

  --a-select__field--background-color: var(--colors-original-white);

  border-color: var(--a-select--border-color);
  border-radius: var(--a-select--border-radius);
  border-style: var(--a-select--border-style);
  border-width: var(--a-select--border-width);

  display: inline-flex;
  font-family: 'Red Hat Text', sans-serif;
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
    background-color: var(--a-select__field--background-color);
    border-radius: var(--border-radius-normal);
    border: none;
    color: var(--a-select__field--color);
    flex: 1;
    font-family: 'Red Hat Text', sans-serif;
    font-weight: 500;
    height: 100%;
    left: 0;
    padding-left: var(--size-medium);
    padding-right: var(--size-medium);
    top: 0;
    transition: background-color 250ms, color 250ms;
    width: 100%;
  }
}

.a-select__field-option--placeholder {
  color: var(--colors-scale-grey-medium);
  font-weight: 500;
}

</style>
