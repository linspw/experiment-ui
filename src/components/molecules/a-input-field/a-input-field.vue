<template>
  <ValidationProvider
    #default="validation"
    :rules="rules"
  >
    <slot v-bind="validation" />
    <AText v-if="Boolean(validation.errors.length)">
      foi
      {{ validation.errors[0] }}
    </AText>
  </ValidationProvider>
</template>

<script>
import { AText } from '@/components/atoms/a-text';
import { ValidationProvider } from 'vee-validate';

export default {
  components: {
    AText,
    ValidationProvider,
  },
  props: {
    rules: {
      type: [Object, String],
      default: null,
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style>

</style>
