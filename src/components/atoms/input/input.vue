<template>
  <div
    ref="input"
    :class="{
      ['h-input']: true,
      [`h-input--behavior-${behavior}`]: behavior != 'default',
      [`h-input--behavior-has-error`]: _hasError,
      [`h-input--icon`]: icon,
      [`h-input--size-${size}`]: size,
    }"
  >
    <HIcon
      v-if="iconLeft"
      :color="iconLeftColor"
      :icon="iconLeft"
      class="h-input__icon h-input__icon--left"
    />
    <input
      :type="type"
      :value="modelValue || value"
      class="h-input__field"
      v-bind="$attrs"
      @input="handleInput"
    >
    <HIcon
      v-if="iconRight"
      :color="iconRightColor"
      :icon="iconRight"
      class="h-input__icon h-input__icon--right"
    />
  </div>
</template>

<script>
import { shouldBeOneOf } from '@utils/validations';
import { HIcon } from '@components/atoms/icon';

export default {
  name: 'HInput',
  components: {
    HIcon,
  },
  inheritAttrs: false,
  emits: ['input', 'update:modelValue'],
  inject: {
    hasErrorFromValidate: {
      from: 'hasErrorFromValidate',
      default: null,
    },
  },
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: shouldBeOneOf([
        'small',
        'medium',
      ]),
    },
    variants: {
      type: String,
      default: 'primary',
      validator: shouldBeOneOf(['primary']),
    },
    behavior: {
      type: String,
      default: 'default',
      validator: shouldBeOneOf([
        'default',
        'block',
      ]),
    },
    isLoading: {
      type: Boolean,
      default: true,
    },
    value: {
      type: [String, Number],
      default: null,
    },
    modelValue: {
      type: [String, Number],
      default: null,
    },
    iconLeft: {
      type: String,
      default: null,
    },
    iconRight: {
      type: String,
      default: null,
    },
    iconLeftColor: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
        'primary',
        'secondary',
        'interactive',
        'grey',
        'success',
        'danger',
        'warn',
        'info',
        'inverse',
      ]),
    },
    iconRightColor: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
        'primary',
        'secondary',
        'interactive',
        'grey',
        'success',
        'danger',
        'warn',
        'info',
        'inverse',
      ]),
    },
    type: {
      type: String,
      default: 'text',
    },
    hasError: {
      type: Boolean,
      default: null,
    }
  },
  data() {
    return {
      hasValue: Boolean(this.value || this.modelValue),
    };
  },
  computed: {
    _hasError() {
      return this.hasError || this.hasErrorFromValidate;
    },
  },
  mounted() {
    this.handleHasValue(this.value || this.modelValue);
  },
  methods: {
    handleHasValue(value) {
      if (!this.$refs.input) return;
      if (value) {
        this.$refs.input.classList.add('h-input--behavior-has-value');
      } else {
        this.$refs.input.classList.remove('h-input--behavior-has-value');
      }
    },
    handleInput(event) {
      const targetValue = event.target.value;

      this.handleHasValue(targetValue);

      const newValue = this.type === 'number' ? Number(targetValue) : targetValue;

      this.$emit('input', newValue);
      this.$emit('update:modelValue', newValue);
    },
  },
};
</script>
