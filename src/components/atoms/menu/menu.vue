<template>
  <div
    v-click-outside="handleClose"
    class="b-menu"
  >
    <slot
      name="trigger"
      :handleTrigger="handleTrigger"
    />

    <HMenuContainer
      :active="$state.active"
      v-bind="$attrs"
      :position="$props.position"
      @click="handleClose"
    >
      <slot />
    </HMenuContainer>
  </div>
</template>

<script setup lang="ts">
import { reactive, useAttrs } from 'vue';
import HMenuContainer from './menu-container.vue';

const $props = defineProps({
  position: {
    type: String,
    default: 'bottom-center',
  },
});

const $state = reactive({
  active: false,
});

const $attrs = useAttrs();

const handleClose = () => {
  $state.active = false;
};

const handleTrigger = () => {
  $state.active = !$state.active;
};

</script>

<style lang="scss">
.b-menu {
  position: relative;
}
</style>
