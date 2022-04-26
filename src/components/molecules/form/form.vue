<template>
  <component
    :is="tag"
    class="h-form"
    @submit.prevent.stop="$emit('submit', internalState)"
  >
    <slot
      :invalid="internalState.invalid"
      :messages="internalState.messages"
      :formState="internalState"
    />
    <pre><code>{{ internalState }}</code></pre>
  </component>
</template>

<script>
import {
  provide,
  inject,
  reactive,
  computed,
  watch,
} from 'vue';
import { pascalCase } from 'change-case';
import { HFormKey } from './form-key';

export default {
  name: 'HForm',
  props: {
    name: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      default: 'form',
    },
  },
  emits: ['submit'],
  setup($props) {
    const getErrors = (formFields) => Object
      .values(formFields)
      .filter((field) => field?.messages?.length)
      .flatMap((field) => field.messages);

    const getChildErrors = (formChilds) => Object
      .values(formChilds)
      .filter((form) => form?.messages?.length)
      .flatMap((field) => field.messages);

    const formName = computed(() => pascalCase(`${$props.name}_form`));
    const parentForm = inject(HFormKey, undefined);
    const internalState = reactive({
      name: formName,
      childs: {},
      fields: {},
      messages: [],
      invalid: computed(() => Boolean(internalState.messages?.length)),
    });

    const state = reactive({
      [formName.value]: internalState,
    });

    if (parentForm) {
      parentForm.internalState.childs[formName.value] = internalState;
    }

    const registerField = (inputState) => {
      internalState.fields[inputState.value.name] = inputState;
    };

    watch([internalState.fields, internalState.childs], () => {
      internalState.messages = getErrors(internalState.fields)
        .concat(getChildErrors(internalState.childs))
        .filter(Boolean);
    });

    provide(HFormKey, {
      state,
      internalState,
      formName,
      registerField,
    });

    return { state, internalState };
  },
};
</script>

<style lang="scss">

</style>
