<template>
  <div
    :rules="rules"
    div="a-input-field"
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
      :color="'danger'"
      class="a-input-field__error-label"
      size="small"
    >
      {{ errorMessage }}
    </AText>
  </div>
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

<style lang="scss">
.a-input-field {
  &__label {
    color: var(--colors-scale-grey-dark);
    margin-bottom: var(--size-micro);
  }
  &__error-label {
    margin-top: var(--size-micro);
  }
}
</style>
