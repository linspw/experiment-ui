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

<style lang="scss">
.h-input-field {
  --h-input-field__label-color: var(--colors-scale-grey-dark);
  --h-input-field__label-margin-bottom: var(--size-base-micro);
  --h-input-field__error-label-margin-top: var(--size-base-micro);

  display: block;

  &__label {
    color: var(--h-input-field__label-color);
    margin-bottom: var(--h-input-field__label-margin-bottom);
  }
  &__error-label {
    margin-top: var(--h-input-field__error-label-margin-top);
  }
}
</style>
