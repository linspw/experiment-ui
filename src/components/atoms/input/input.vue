<template>
  <div
    ref="input"
    :class="{
      ['h-input']: true,
      [`h-input--behavior-${behavior}`]: behavior != 'default',
      [`h-input--behavior-has-error`]: _hasError,
      [`h-input--behavior-is-disabled`]: isDisabled,
      [`h-input--behavior-block`]: block,
      [`h-input--icon-left`]: iconLeft,
      [`h-input--icon-right`]: iconRight,
      [`h-input--size-${size}`]: size,
    }"
  >
    <HIcon
      v-if="iconLeft"
      :color="iconLeftColor"
      :icon="iconLeft"
      class="h-input__icon h-input__icon--left"
      :tag="iconLeftTag"
      @click="$emit('click-icon-left')"
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
      :tag="iconRightTag"
      @click="$emit('click-icon-right')"
    />
  </div>
</template>

<script>
/* eslint-disable no-underscore-dangle */
import { shouldBeOneOf } from '@utils/validations';
import { HIcon } from '@components/atoms/icon';

export default {
  name: 'HInput',
  components: {
    HIcon,
  },
  inject: {
    hasErrorFromValidate: {
      from: 'hasErrorFromValidate',
      default: null,
    },
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
    block: {
      type: Boolean,
      default: false,
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
    iconLeftTag: {
      type: String,
      default: 'div',
    },
    iconRightTag: {
      type: String,
      default: 'div',
    },
    type: {
      type: String,
      default: 'text',
      validator: shouldBeOneOf([
        'text',
        'date',
        'number',
        'email',
        'password',
      ]),
    },
    hasError: {
      type: Boolean,
      default: null,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['input', 'update:modelValue', 'click-icon-left', 'click-icon-right'],
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

<style lang="scss">
:root {
  --h-input-border-color: var(--color-theme-primary);
  --h-input-border-radius: var(--border-radius-normal);
  --h-input-border-style:  solid;
  --h-input-border-width: var(--size-base-micro);
  --h-input-color: var(--color-theme-primary);
  --h-input-width: auto;

  --h-input__field-background-color: var(--color-theme-white);
  --h-input__field-border-radius: var(--border-radius-normal);
  --h-input__field-color--placeholder: var(--color-blue-grey-scale-400);
  --h-input__field-color: var(--color-theme-primary);
  --h-input__field-font-family: 'Red Hat Text', sans-serif;
  --h-input__field-font-size: inherit;
  --h-input__field-font-weight--placeholder: 500;
  --h-input__field-font-weight: 500;
  --h-input__field-min-height: auto;
  --h-input__field-padding-left: var(--size-base-medium);
  --h-input__field-padding-right: var(--size-base-medium);
}

.h-input {
  border-color: var(--h-input-border-color);
  border-radius: var(--h-input-border-radius);
  border-style: var(--h-input-border-style);
  border-width: var(--h-input-border-width);
  color: var(--h-input-color);
  display: inline-flex;
  height: fit-content;
  width: var(--h-input-width);
  position: relative;

  &--icon-left {
    --h-input__field-padding-left: var(--size-base-jumbo);
  }

  &--icon-right {
    --h-input__field-padding-right: var(--size-base-jumbo);
  }

  &--behavior {
    &-block {
      --h-input-width: 100%;
    }
    &-has-value {
      --h-input-border-color: var(--color-theme-primary);
      --h-input__field-background-color: var(--color-blue-grey-scale-050);
    }
    &-has-error {
      --h-input-border-color: var(--color-pink-scale-alpha-400);
    }
    &-is-disabled {
      --h-input-color: var(--color-blue-grey-scale-200);
      --h-input-border-color: var(--color-blue-grey-scale-200);
      pointer-events:none;
    }
  }

  &--size {
    &-small {
      --h-input__field-font-size: var(--size-scalable-micro);
      --h-input__field-min-height: var(--size-base-extra-large);
    }
    &-medium {
      --h-input__field-font-size: var(--size-scalable-extra-small);
      --h-input__field-min-height: var(--size-base-jumbo);
    }
  }
}

.h-input__icon {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: var(--size-base-jumbo);
  position: absolute;
  z-index: 10;

  &--left {
    left: 0;
  }
  &--right {
    right: 0;
  }
}

.h-input__field {
  background-color: var(--h-input__field-background-color);
  border-radius: var(--h-input__field-border-radius);
  color: var(--h-input__field-color);
  flex: 1;
  font-family: var(--h-input__field-font-family);
  font-size: var(--h-input__field-font-size);
  font-weight: var(--h-input__field-font-weight);
  height: 100%;
  left: 0;
  min-height: var(--h-input__field-min-height);
  padding-left: var(--h-input__field-padding-left);
  padding-right: var(--h-input__field-padding-right);
  top: 0;
  transition: background-color 250ms, color 250ms;
  width: 100%;

  &::placeholder {
    color: var(--h-input__field-color--placeholder);
    font-weight: var(--h-input__field-font-weight--placeholder);
    font-style: italic;
  }
}
</style>
@/utils/validations@/components/atoms/icon