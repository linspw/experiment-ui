<template>
  <slot
    v-if="errorMsg"
    name="error"
    :error-msg="errorMsg"
  />

  <Suspense v-else>
    <template #default>
      <slot />
    </template>

    <template #fallback>
      <slot name="loading" />
    </template>
  </Suspense>
</template>

<script>
import { ref, onErrorCaptured } from 'vue';

export default {
  name: 'HSuspense',
  inheritAttrs: false,
  setup(_, { slots }) {
    const errorMsg = ref(null);

    onErrorCaptured((_error) => {
      const hasErrorSlot = Boolean(slots.error);
      if (hasErrorSlot) errorMsg.value = 'Uh oh. Something went wrong!';
      return !hasErrorSlot;
    });

    return { errorMsg };
  },
};
</script>
