<template>
  <label
    :rules="rules"
    class="h-input-field"
  >
    <HText
      v-if="label"
      weight="medium"
      class="h-input-field__label"
      size="medium"
    >
      {{ label }}
    </HText>

    <slot />

    <HText
      v-if="helperTextActive"
      :color="finalHasError ? 'danger' : 'grey'"
      class="h-input-field__helper-text"
      size="micro"
    >
      {{ helperText }}
    </HText>
  </label>
</template>

<script>
import { HText } from '@components/atoms/text';
import { provide, reactive, computed } from 'vue';

export default {
  name: 'HInputField',
  components: {
    HText,
  },
  props: {
    rules: {
      type: [Object, String],
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    helperText: {
      type: String,
      default: null,
    },
    helperTextActive: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const $state = reactive({ hasError: false });
    const finalHasError = computed(() => props.hasError || $state.hasError);
    provide('hasErrorFromValidate', finalHasError.value);

    return { finalHasError };
  },
};
</script>
