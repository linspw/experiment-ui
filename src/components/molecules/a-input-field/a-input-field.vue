<template>
  <label
    :rules="rules"
    class="a-input-field"
  >
    <AText
      v-if="label"
      weight="medium"
      class="a-input-field__label"
      size="medium"
    >
      {{ label }}
    </AText>
    <slot
      v-bind="{hasError}"
    />
    <AText
      v-if="Boolean(hasError && errorMessage)"
      color="danger"
      class="a-input-field__error-label"
      size="small"
    >
      {{ errorMessage }}
    </AText>
  </label>
</template>

<script>
import { AText } from '@/components/atoms/a-text';

export default {
  components: {
    AText,
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
