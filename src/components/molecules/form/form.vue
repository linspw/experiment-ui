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

<script lang="ts">
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
    const getErrors = (formFields: any) => Object
      .values(formFields)
      .filter((field: any) => field?.messages?.length)
      .flatMap((field: any) => field.messages);

    const getChildErrors = (formChilds: any) => Object
      .values(formChilds)
      .filter((form: any) => form?.messages?.length)
      .flatMap((field: any) => field.messages);

    const formName = computed(() => pascalCase(`${$props.name}_form`));
    const parentForm: any = inject(HFormKey, undefined);
    const internalState: any = reactive({
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

    const registerField = (inputState: any) => {
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
