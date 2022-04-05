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
      @click="handleClose"
    >
      <slot />
    </HMenuContainer>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import HMenuContainer from './menu-container.vue';

const $state = reactive({
  active: false,
});

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
