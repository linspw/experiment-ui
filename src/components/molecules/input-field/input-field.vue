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
    <slot
      v-bind="{hasError}"
    />
    <HText
      v-if="Boolean(hasError && errorMessage)"
      color="danger"
      class="h-input-field__error-label"
      size="small"
    >
      {{ errorMessage }}
    </HText>
  </label>
</template>

<script>
import { HText } from '@components/atoms/text';

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
    errorMessage: {
      type: String,
      default: '',
    },
  },
};
</script>
