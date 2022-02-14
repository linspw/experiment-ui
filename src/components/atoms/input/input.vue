<template>
  <div
    ref="input"
    :class="{
      ['h-input']: true,
      [`h-input--behavior-${behavior}`]: behavior != 'default',
      [`h-input--behavior-${shadow}`]: shadow,
      [`h-input--icon`]: icon,
      [`h-input--size-${size}`]: size,
    }"
  >
    <HIcon
      v-if="icon"
      :color="iconColor"
      :icon="icon"
      class="h-input__icon"
    />
    <input
      :type="type"
      :value="value"
      class="h-input__field"
      v-bind="$attrs"
      @input="handleInput"
    >
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
  mounted() {
    this.handleHasValue(this.value);
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

      this.$emit('input', this.type === 'number' ? Number(targetValue) : targetValue);
    },
  },
};
</script>

<style lang="scss">
.h-input {
  --h-input-border-color: var(--color-theme-primary);
  --h-input-border-radius: var(--border-radius-normal);
  --h-input-border-style:  solid;
  --h-input-border-width: var(--size-base-micro);
  --h-input-color: var(--color-theme-primary);
  --h-input-width: auto;

  --h-input__field-background-color: var(--colors-original-white);
  --h-input__field-border-radius: var(--border-radius-normal);
  --h-input__field-color--placeholder: var(--colors-scale-grey-dark);
  --h-input__field-color: var(--color-theme-primary);
  --h-input__field-font-family: 'Red Hat Text', sans-serif;
  --h-input__field-font-size: inherit;
  --h-input__field-font-weight--placeholder: 500;
  --h-input__field-font-weight: 500;
  --h-input__field-min-height: auto;
  --h-input__field-padding-left: var(--size-base-medium);
  --h-input__field-padding-right: var(--size-base-medium);

  border-color: var(--h-input-border-color);
  border-radius: var(--h-input-border-radius);
  border-style: var(--h-input-border-style);
  border-width: var(--h-input-border-width);
  color: var(--h-input-color);
  display: inline-flex;
  height: fit-content;
  width: var(--h-input-width);
  position: relative;

  &--icon {
    --h-input__field-padding-left: var(--size-base-jumbo);
  }

  &--behavior {
    &-block {
      --h-input-width: 100%;
    }
    &-has-value {
      --h-input-border-color: var(--color-theme-primary);
      --h-input__field-background-color: var(--colors-scale-grey-light);
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
  padding-left: var(--size-base-medium);
  padding-right: var(--size-base-medium);
  position: absolute;
  z-index: 10;
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
