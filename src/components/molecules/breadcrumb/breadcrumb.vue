<template>
  <nav class="h-breadcrumb">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="h-breadcrumb__item"
    >
      <h-text
        :href="item.url"
        :link="(index === items.length-1)"
        color="primary"
        size="extra-small"
        tag="a"
        weight="medium"
      >
        {{ item.text }}
      </h-text>

      <div v-if="!(index === items.length-1)" class="h-breadcrumb__item-divider">/</div>
    </li>
  </nav>
</template>

<script>
import { HText } from '@components/atoms/text';

export default {
  name: 'HBreadcrumb',
  components: {
    HText,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
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
      margin-left: var(--size-scalable-medium);
    }
  }
}

.h-breadcrumb__item-divider {
  margin-left: var(--size-scalable-medium);
}
</style>
