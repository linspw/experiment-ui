<template>
  <div
    ref="textFieldWrapper"
    class="h-text-field"
    :class="{
      [`h-text-field--behavior-invalid`]: invalid,
      [`h-text-field--behavior-disabled`]: disabled,
      [`h-text-field--behavior-acessible`]: acessible,
      [`h-text-field--with-icon-left`]: iconLeft,
      [`h-text-field--with-icon-right`]: iconRight,
    }"
  >
    <label
      v-if="label"
      class="h-text-field__label"
    >
      {{ label }}
    </label>

    <div class="h-text-field__wrapper">
      <HIcon
        v-if="iconLeft"
        :color="iconLeftColor"
        :icon="iconLeft"
        :tag="iconLeftTag"
        class="h-text__icon h-text__icon--left"
        @click="$emit('click-icon-left')"
      />

      <component
        :is="tag"
        :type="type"
        :value="state.internalValue"
        v-bind="$attrs"
        class="h-text-field__input"
        @input="handleInput"
      />

      <HIcon
        v-if="iconRight"
        :color="iconRightColor"
        :icon="iconRight"
        class="h-text__icon h-text__icon--right"
        :tag="iconRightTag"
        @click="$emit('click-icon-right')"
      />
    </div>

    <h-text
      v-if="helperText"
      class="h-text-field__helper-text"
      size="extra-small"
      weight="medium"
      emphasis="high"
    >
      {{ helperText }}
    </h-text>
  </div>
</template>

<script>
import { shouldBeOneOf } from '@utils/validations';
import { HIcon } from '@components/atoms/icon';
import {
  computed, reactive, ref, onMounted,
} from 'vue';
import { Mask } from '@utils/formats/mask';
import { iconColors, textFieldTypes } from '@assets/constants';

export default {
  name: 'HTextField',
  components: {
    HIcon,
  },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: null,
    },
    tag: {
      type: String,
      default: 'input',
    },
    mask: {
      type: [String, Array],
      default: null,
    },
    unmasked: {
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
      validator: shouldBeOneOf(iconColors),
    },
    iconRightColor: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf(iconColors),
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
      validator: shouldBeOneOf(textFieldTypes),
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    acessible: {
      type: Boolean,
      default: true,
    },
    helperText: {
      type: String,
      default: null,
    },
  },
  emits: [
    'input',
    'update:modelValue',
    'click-icon-left',
    'click-icon-right',
  ],
  setup($props, { emit: $emit }) {
    const textFieldWrapper = ref();
    const state = reactive({
      returnMasked: computed(() => Boolean($props.mask && $props.unmasked)),
      maskInstance: computed(() => $props.mask && new Mask($props.mask)),
      internalValue: computed(() => {
        const value = $props.modelValue || $props.value;
        const newValue = $props.mask
          ? value && state.maskInstance.masked(state.maskInstance.unmasked(value))
          : value;

        return newValue;
      }),
    });

    const handleHasValue = (value) => {
      if (!textFieldWrapper.value) return;
      if (value) {
        textFieldWrapper.value.classList.add('h-text-field--behavior-has-value');
      } else {
        textFieldWrapper.value.classList.remove('h-text-field--behavior-has-value');
      }
    };

    const handleInput = ($event) => {
      const targetValue = $event.target.value;
      const newValue = (state.returnMasked)
        ? state.maskInstance.unmasked(targetValue)
        : targetValue;

      $emit('input', newValue);
      $emit('update:modelValue', newValue);
      handleHasValue(targetValue);
    };

    onMounted(() => {
      handleHasValue($props.value || $props.modelValue);
    });

    return {
      state,
      handleInput,
      textFieldWrapper,
    };
  },
};
</script>

<style lang="scss">
:root {
  --h-text-field-border-color: var(--color-theme-primary);
  --h-text-field-border-radius: var(--border-radius-normal);
  --h-text-field-border-style:  solid;
  --h-text-field-border-width: var(--size-base-micro);
  --h-text-field-height: 44px;
  --h-text-field-width: 400px;

  --h-text-field__helper-text-color: var(--color-theme-grey);
  --h-text-field__helper-text-color--invalid: var(--color-theme-danger);

  --h-text-field__label-font-weight: 500;
  --h-text-field__label-margin-bottom: var(--size-base-small);

  --h-text-field__field-background-color: var(--color-theme-white);
  --h-text-field__field-border-radius: var(--border-radius-normal);
  --h-text-field__field-color--placeholder: var(--color-blue-grey-scale-400);
  --h-text-field__field-color: var(--color-theme-primary);
  --h-text-field__field-font-family: 'Red Hat Text', sans-serif;
  --h-text-field__field-font-size: inherit;
  --h-text-field__field-font-weight--placeholder: 500;
  --h-text-field__field-font-weight: 500;
  --h-text-field__field-min-height: auto;
  --h-text-field__field-padding-left: var(--size-base-medium);
  --h-text-field__field-padding-right: var(--size-base-medium);
}

.h-text-field {
  position: relative;
  width: var(--h-text-field-width);

  &--with-icon-left {
    --h-text-field__field-padding-left: var(--size-base-jumbo);
  }

  &--with-icon-right {
    --h-text-field__field-padding-right: var(--size-base-jumbo);
  }

  &--behavior {
    &-disabled {
      --h-text-field-color: var(--color-blue-grey-scale-200);
      --h-text-field__field-color: var(--color-blue-grey-scale-300);
      --h-text-field-border-color: var(--color-blue-grey-scale-800);
      --h-text-field__field-background-color: var(--color-blue-grey-scale-050);
      pointer-events: none;
    }
    &-invalid {
      --h-text-field-border-color: var(--color-pink-scale-alpha-400);
      --h-text-field__helper-text-color: var(--h-text-field__helper-text-color--invalid);
    }
    &-acessible {
      margin-top: 4px;
      margin-bottom: 4px;
    }
    &-has-value {
      --h-text-field__field-background-color: var(--color-blue-grey-scale-050);
    }
  }
}

.h-text-field__label {
  font-weight: var(--h-text-field__label-font-weight);
  margin-bottom: var(--h-text-field__label-margin-bottom);
  display: inline-block;
}

.h-text-field__wrapper {
  position: relative;
  border-color: var(--h-text-field-border-color);
  border-radius: var(--h-text-field-border-radius);
  border-style: var(--h-text-field-border-style);
  border-width: var(--h-text-field-border-width);
  color: var(--h-text-field-color);
  height: var(--h-text-field-height);
}

.h-text-field__input {
  width: 100%;
  height: 100%;

  background-color: var(--h-text-field__field-background-color);
  border-radius: var(--h-text-field__field-border-radius);
  color: var(--h-text-field__field-color);
  font-family: var(--h-text-field__field-font-family);
  font-size: var(--h-text-field__field-font-size);
  font-weight: var(--h-text-field__field-font-weight);
  height: 100%;
  min-height: var(--h-text-field__field-min-height);
  padding-left: var(--h-text-field__field-padding-left);
  padding-right: var(--h-text-field__field-padding-right);
  transition: background-color 250ms, color 250ms;

  &::placeholder {
    color: var(--h-text-field__field-color--placeholder);
    font-weight: var(--h-text-field__field-font-weight--placeholder);
    font-style: italic;
  }
}

.h-text__icon {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: var(--size-base-jumbo);
  position: absolute;
  z-index: 10;
  top: 0;

  &--left {
    left: 0;
  }
  &--right {
    right: 0;
  }
}

.h-text-field__helper-text {
  margin-top: var(--size-base-extra-small);
  color: var(--h-text-field__helper-text-color);
  padding-left: var(--size-base-small);
  padding-right: var(--size-base-small);
}
</style>
