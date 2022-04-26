<template>
  <div
    :class="{
      'h-select': true,
      [`h-select--behavior-invalid`]: state.internalInvalid,
      [`h-select--behavior-block`]: block,
      [`h-select--behavior-has-value`]: state.hasValue,
    }"
  >
    <label
      v-if="label"
      class="h-select__label"
    >
      {{ label }}
    </label>

    <select
      class="h-select__field"
      v-bind="$attrs"
      :value="state.internalValue"
      :name="state.name"
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
        :value="getOption(option, 'value')"
      >
        {{ getOption(option, 'text') }}
      </option>
    </select>

    <h-text
      v-if="helperTextActive"
      class="h-select__helper-text"
      size="extra-small"
      weight="medium"
      emphasis="high"
    >
      <template v-if="state.helperTextVisible">
        {{ state.internalTextValue }}
      </template>
    </h-text>
  </div>
</template>

<script>
import { shouldBeOneOf } from '@utils/validations';
import {
  selectSizes,
} from '@assets/constants';
import { HFormKey } from '@components/molecules/form';
import {
  computed,
  reactive,
  ref,
  onMounted,
  watch,
  inject,
  toRef,
} from 'vue';
import { Validate } from '@utils/validations/validate';

export default {
  name: 'HSelect',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
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
    invalid: {
      type: Boolean,
      default: false,
    },
    helperTextActive: {
      type: Boolean,
      default: true,
    },
    helperText: {
      type: String,
      default: null,
    },
    rules: {
      type: Object,
      default: null,
    },
  },
  emits: ['input', 'change', 'select', 'update:modelValue'],
  setup($props, { emit: $emit }) {
    const HForm = inject(HFormKey, undefined);

    const state = reactive({
      internalValue: computed(() => $props.value || $props.modelValue),
      hasValue: computed(() => Boolean(state.internalValue)),
      validationMessages: null,
      validationActive: true,
      helperTextVisible: computed(() => $props.helperText || state.invalid),
      invalid: computed(() => Boolean(state.validationActive && state.validationMessages?.length)),
      internalTextValue: computed(() => state.validationMessages?.[0]?.message || $props.helperText),
      internalInvalid: computed(() => $props.invalid || state.invalid),
      name: computed(() => $props.name || $props.label || 'Campo'),
      currentValidation: computed(() => ({
        name: state.name,
        value: state.internalValue,
        tag: 'select',
        type: 'simple',
        messages: state.validationMessages,
      })),
    });

    const checkValidation = (validationActive) => {
      if (!$props.rules) return;
      state.validationActive = Boolean(validationActive);
      state.validationMessages = Validate(state.internalValue, $props.rules);
    };

    const getOption = (option, key) => (Object.prototype.hasOwnProperty.call(option, key)
      ? option[key]
      : option);

    const handlerChange = ($event) => {
      const value = $event?.target?.value;
      console.log(value);
      $emit('input', value);
      $emit('change', value);
      $emit('select', value);
      $emit('update:modelValue', value);
    };

    const currentValidation = toRef(state, 'currentValidation');

    watch(() => state.internalValue, () => checkValidation(true));

    onMounted(() => {
      if ($props.rules) checkValidation($props?.rules?.startValidating);
      if (HForm) HForm.registerField(currentValidation);
    });

    return {
      state,
      handlerChange,
      getOption,
    };
  },
};
</script>

<style lang="scss">
:root {
  --h-select__field--border-color: var(--color-theme-primary);
  --h-select__field--border-radius: var(--border-radius-normal);
  --h-select__field--border-style:  solid;
  --h-select__field--border-width: var(--size-base-micro);
  --h-select__field--color: var(--color-theme-primary);
  --h-select__field--background-color: var(--color-theme-white);

  --h-select-width: 250px;

  --h-select__label-font-weight: 500;
  --h-select__label-margin-bottom: var(--size-base-small);
  --h-select__field--height: 44px;

  --h-select__helper-text-color: var(--color-theme-grey);
  --h-select__helper-text-color--invalid: var(--color-theme-danger);
  --h-select__helper-text-height: var(--size-base-medium);
}

.h-select {
  display: inline-block;
  font-family: 'Red Hat Text', sans-serif;
  height: fit-content;
  position: relative;
  width: var(--h-select-width);

  &--behavior {
    &-block {
      width: 100%;
    }
    &-has-value {
      --h-select__field--background-color: var(--color-blue-grey-scale-050);
    }
    &-invalid {
      --h-select__field--border-color: var(--color-pink-scale-alpha-400);
      --h-select__helper-text-color: var(--h-select__helper-text-color--invalid);
    }
  }

  &__field {
    border-color: var(--h-select__field--border-color);
    border-radius: var(--h-select__field--border-radius);
    border-style: var(--h-select__field--border-style);
    border-width: var(--h-select__field--border-width);
    background-color: var(--h-select__field--background-color);
    color: var(--h-select__field--color);
    font-family: 'Red Hat Text', sans-serif;
    font-weight: 500;
    height: var(--h-select__field--height);
    left: 0;
    padding-left: var(--size-base-medium);
    padding-right: var(--size-base-medium);
    top: 0;
    transition: background-color 250ms, color 250ms;
    width: 100%;
  }
}

.h-select__label {
  font-weight: var(--h-select__label-font-weight);
  margin-bottom: var(--h-select__label-margin-bottom);
  display: inline-block;
}

.h-select__field--placeholder {
  color: var(--color-blue-grey-scale-300);
  font-weight: 500;
  font-style: italic;
}

.h-select__helper-text {
  --h-text--color: var(--h-select__helper-text-color);
  margin-top: var(--size-base-extra-small);
  padding-left: var(--size-base-small);
  padding-right: var(--size-base-small);
  min-height: var(--h-select__helper-text-height);
}
</style>
