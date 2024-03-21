<template>
  <slot v-if="errorMsg" name="error" :error-msg="errorMsg" v-bind="attrs" />

  <Suspense v-else>
    <template #default>
      <slot v-bind="attrs" />
    </template>

    <template #fallback>
      <slot name="loading" v-bind="attrs" />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { ref, onErrorCaptured } from "vue";

export default {
  name: "HSuspense",
  inheritAttrs: false,
  setup(_props, { slots, attrs }) {
    const errorMsg = ref<Error | null>(null);

    onErrorCaptured((error) => {
      const hasErrorSlot = Boolean(slots.error);
      if (hasErrorSlot) errorMsg.value = error;
      return !hasErrorSlot;
    });
    return { errorMsg, attrs };
  },
};
</script>
