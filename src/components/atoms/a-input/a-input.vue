<template>
  <div
    ref="input"
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
      :color="iconColor"
      :icon="icon"
      class="a-input-icon"
    />
    <input
      :type="type"
      :value="value"
      class="a-input__field"
      v-bind="$attrs"
      @input="handleInput"
      v-on="listeners"
    >
  </div>
</template>

<script>
import { shouldBeOneOf } from 'vue-prop-validation-helper';
import { AIcon } from '@/components/atoms/a-icon';

export default {
  name: 'AInput',
  components: {
    AIcon,
  },
  inheritAttrs: false,
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
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    iconColor: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
        'primary',
        'secondary',
        'tertiary',
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
    shadow: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      hasValue: Boolean(this.value),
    };
  },
  computed: {
    listeners() {
      const listeners = { ...this.$listeners };
      delete listeners.input;
      return listeners;
    },
  },
  mounted() {
    this.handleHasValue(this.value);
  },
  methods: {
    handleHasValue(value) {
      if (value) {
        this.$refs.input.classList.add('a-input--behavior-has-value');
      } else {
        this.$refs.input.classList.remove('a-input--behavior-has-value');
      }
    },
    handleInput(event) {
      const targetValue = event.target.value;

      this.handleHasValue(targetValue);

      this.$emit('input', this.type === 'number' ? Number(targetValue) : targetValue);
    },
  },
};
</script>
