<template>
  <div class="h-checkbox">
    <div
      class="h-checkbox__field"
      @click="handleChange"
    >
      <input
        class="h-checkbox__input"
        type="checkbox"
        :checked="internalChecked"
        :value="internalValue"
      >

      <HIcon
        icon="fa-solid fa-check"
        class="h-checkbox__checkmark"
        :class="{
          [`h-checkbox__checkmark--behavior-is-disabled`]: isDisabled,
        }"
      />
    </div>

    <label
      class="h-checkbox__label"
      :class="{
        [`h-checkbox__label--behavior-is-disabled`]: isDisabled,
      }"
      @click="handleChange"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
import { HIcon } from '@components/atoms/icon';
import { computed } from 'vue';

export default {
  name: 'HCheckbox',
  components: {
    HIcon,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: null,
    },
    checked: {
      type: Boolean,
      defaul: null,
    },
    modelValue: {
      type: [Boolean, Array, String, Number],
      default: undefined,
    },
    isDisabled: {
      type: Boolean,
      defaul: false,
    },
  },
  emits: ['change', 'update:modelValue'],
  setup($props, { emit: $emit }) {
    const internalChecked = computed(() => $props.modelValue === $props.value || $props.checked);
    const internalValue = computed(() => $props.value);
    const handleChange = () => {
      if ($props.isDisabled) return;
      const newStatus = !internalChecked.value;
      $emit('change', !internalChecked.value);
      $emit('update:modelValue', newStatus);
    };
    return { internalChecked, internalValue, handleChange };
  },
};

</script>

<style lang="scss">
.h-checkbox {
  display: flex;
  align-items: center;

  --h-checkbox-main-color: var(--color-theme-secondary);
  --h-checkbox-background-color: transparent;
  --h-checkbox-border-color: var(--color-theme-primary);
  --h-checkbox-color: var(--color-theme-white);
  --h-checkbox__label--color: inherit;
}

.h-checkbox__label {
  cursor: pointer;
  color: var(--h-checkbox__label--color);

  &--behavior {
    &-is-disabled {
      pointer-events:none;
      --h-checkbox__label--color: var(--color-blue-grey-scale-600);
    }
  }
}

.h-checkbox__field {
  display: flex;

  &:not(:only-child) {
    margin-right: var(--size-base-small)
  }
}

.h-checkbox__input {
  display: none;
}

.h-checkbox__checkmark {
  background-color: var(--h-checkbox-background-color);
  border: 2px solid var(--h-checkbox-border-color);
  border-radius: 4px;
  color: var(--h-checkbox-color);
  cursor: pointer;
  transition: all 0.25s;

  &--behavior {
    &-is-disabled {
      pointer-events:none;
      --h-checkbox-border-color: var(--color-blue-grey-scale-200);
    }
  }

  & > i {
    opacity: 0;
  }
}

input:checked.h-checkbox__input ~ .h-checkbox__checkmark {
  --h-checkbox-background-color: var(--h-checkbox-main-color);
  --h-checkbox-border-color: var(--h-checkbox-main-color);

  &--behavior {
    &-is-disabled {
      pointer-events:none;
      --h-checkbox-background-color: var(--color-blue-grey-scale-200);
      --h-checkbox-border-color: var(--color-blue-grey-scale-200);
    }
  }

  & > i {
    opacity: 1;
  }
}
</style>
