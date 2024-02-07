<template>
  <nav class="h-breadcrumb">
    <li v-for="(item, index) in items" :key="index" class="h-breadcrumb__item">
      <h-text
        :href="item.url"
        :link="index === items.length - 1"
        color="primary"
        size="small"
        tag="a"
        weight="medium"
      >
        {{ item.text }}
      </h-text>

      <div
        v-if="!(index === items.length - 1)"
        class="h-breadcrumb__item-divider"
      >
        /
      </div>
    </li>
  </nav>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { HText } from "@components/atoms/text";

export interface Item {
  url: string;
  text: string;
}

export default {
  name: "HBreadcrumb",
  components: {
    HText,
  },
  props: {
    items: {
      type: Array as PropType<Item[]>,
      required: true,
    },
  },
};
</script>

<style lang="scss">
:root {
  --h-breadcrumb--margin-left: var(--size-scalable-medium);
}

.h-breadcrumb {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  &__item {
    align-items: center;
    display: flex;
    white-space: nowrap;

    &:not(:first-child) {
      margin-left: var(--h-breadcrumb--margin-left);
    }
  }
}

.h-breadcrumb__item-divider {
  margin-left: var(--h-breadcrumb--margin-left);
}
</style>
