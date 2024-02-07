<template>
  <div class="h-radio">
    <div>
      <input type="radio">

      <HIcon icon="fa-solid fa-circle" />
    </div>
  </div>
</template>

<script lang="ts">
import { HIcon } from '@components/atoms/icon';

export default {
  name: 'HRadio',
  components: {
    HIcon,
  },
};

</script>

<style lang="scss">
.h-radio {
  display: flex;
  align-items: center;

  --h-radio-main-color: var(--color-theme-secondary);
  --h-radio-background-color: transparent;
  --h-radio-border-color: var(--color-theme-primary);
  --h-radio-color: var(--color-theme-white);
  --h-radio__label--color: inherit;
}
</style>
@/components/atoms/icon