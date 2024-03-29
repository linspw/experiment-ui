<template>
  <transition-group
    name="h-toast__fade"
    mode="out-in"
    class="h-toast"
    tag="div"
  >
    <HCard
      v-for="(item, index) in items"
      :key="item.id"
      :class="{
        ['h-toast__item--inverse']:
          item.color &&
          item.color !== 'warn' &&
          item.color !== 'default' &&
          item.color,
        [`${item.color}`]: item.color,
      }"
      :color="item.color ?? ''"
      class="h-toast__item"
      tag="button"
      @click.stop="handleClick(index)"
    >
      <div v-if="item.icon" class="h-toast__icon">
        <HIcon :icon="item.icon" size="medium" />
      </div>

      <div class="h-toast__content">
        <HText v-if="item.title" weight="bold">
          {{ item.title }}
        </HText>

        <HText v-if="item.text" tag="span">
          {{ item.text }}
        </HText>
      </div>
    </HCard>
  </transition-group>
</template>

<script lang="ts">
import { HText } from "@components/atoms/text";
import { HIcon } from "@components/atoms/icon";
import { HCard } from "@components/atoms/card";
import type { PropType } from "vue";

export interface Item {
  id: string;
  text?: string | null;
  title?: string | null;
  icon?: string | null;
  color?: string | null;
}

export default {
  name: "HToast",
  components: {
    HCard,
    HIcon,
    HText,
  },
  props: {
    items: {
      type: Array as PropType<Item[]>,
      default: () => [],
    },
  },
  emits: ["click"],
  methods: {
    handleClick(index: number) {
      this.$emit("click", index);
    },
  },
};
</script>

<style lang="scss">
@import "@styles/utils/breakpoints";

.h-toast {
  overflow: hidden;
  position: fixed;
  max-height: 100vh;
  right: 0px;
  width: 100%;
  z-index: 100;
  top: var(--size-base-large);

  @include for-mobile-up {
    max-width: 380px;
    padding-right: var(--size-base-large);
  }

  &__item {
    --h-card--padding: var(--size-base-medium) !important;

    align-items: center;
    display: flex;
    position: relative;
    width: 100%;

    @include for-mobile-up {
      margin: var(--size-base-extra-small);
      margin-bottom: var(--size-base-small);
    }

    &--inverse {
      color: var(--color-theme-inverse) !important;
    }
  }

  &__icon {
    margin-right: var(--size-base-large);
    height: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
  }
}

.h-toast__fade-enter-active,
.h-toast__fade-leave-active {
  transition: all 500ms;
}

.h-toast__fade-enter-from,
.h-toast__fade-leave-to {
  transform: translateX(100%);
}
</style>
@/components/atoms/icon@/components/atoms/card
