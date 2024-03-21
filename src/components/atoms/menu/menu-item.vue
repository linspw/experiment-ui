<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <li
    ref="menuItem"
    class="h-menu-item"
    :class="{
      [`h-menu-item--behavior-clickable`]: $props.clickable,
      [`h-menu-item--behavior-active`]: $props.active,
    }"
    role="menuitem"
    tabindex="0"
    @click="$props.clickable && handleClick"
  >
    <slot />
  </li>
</template>

<script setup lang="ts">
/* eslint-disable no-new */
import { ref, inject } from "vue";

defineOptions({
  name: "HMenuItem",
});

const menuItem = ref();

const $props = defineProps({
  clickable: {
    type: Boolean,
    default: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const $emit = defineEmits(["click"]);

const handleClickFromParent: Function = inject("handleClickFromParent")!;

const handleClick = () => {
  if ($props.clickable) {
    $emit("click");
    handleClickFromParent();
  }
};
</script>

<style lang="scss">
:root {
  --h-menu-item-background-color: var(--color-theme-white);
  --h-menu-item-background-color--hover: var(--color-blue-grey-scale-100);
  --h-menu-item-background-color--active: var(--color-blue-grey-scale-200);
}

.h-menu-item {
  padding: 0 var(--size-base-medium);
  min-height: var(--size-base-extra-jumbo);
  overflow: hidden;
  display: flex;
  align-items: center;
  transition: background-color 0.25s;
  background-color: var(--h-menu-item-background-color);
  white-space: nowrap;

  &:hover {
    --h-menu-item-background-color: var(--h-menu-item-background-color--hover);
  }

  &--behavior {
    &-clickable {
      cursor: pointer;
    }
    &-active {
      --h-menu-item-background-color: var(
        --h-menu-item-background-color--active
      );
    }
  }
}
</style>
