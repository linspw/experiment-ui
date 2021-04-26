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
  components: {
    AIcon,
  },
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: shouldBeOneOf(['small', 'medium']),
    },
    variants: {
      type: String,
      default: 'primary',
      validator: shouldBeOneOf(['primary']),
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
      hasValue: !!this.value,
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

<style lang="scss">
.a-input {
  border-radius: var(--border-radius-normal);
  border: var(--size-micro) solid var(--colors-scale-grey-medium);
  color: var(--colors-scale-grey-medium);
  display: inline-flex;
  height: fit-content;
  position: relative;

  &--icon {
    & > .a-input-icon {
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
    &-has-value {
      border-color: var(--colors-scale-grey-dark);
      color: var(--colors-scale-grey-dark);
      & > .a-input__field {
        background-color: var(--colors-scale-grey-lightest);
      }
    }
  }

  &--size {
    &-small {
      & > .a-input__field {
        min-height: var(--size-extra-large);
        font-size: var(--size-scalable-micro);
      }
    }
    &-medium {
      & > .a-input__field {
        min-height: var(--size-jumbo);
        font-size: var(--size-scalable-extra-small);
      }
    }
  }

  &__field {
    background-color: var(--colors-original-white);
    border-radius: var(--border-radius-normal);
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
