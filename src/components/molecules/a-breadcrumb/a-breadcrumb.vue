<template>
  <nav class="a-breadcrumb">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="a-breadcrumb__item"
    >
      <ATitle
        :color="(index === items.length-1) ? 'secondary' : 'primary'"
        :href="item.url"
        size="extra-small"
        tag="a"
        weight="medium"
      >
        {{ item.text }}
      </ATitle>

      <div v-if="!(index === items.length-1)" class="a-breadcrumb__item-divider">/</div>
    </li>
  </nav>
</template>

<script>
import { ATitle } from '@/components/atoms/a-title';

export default {
  components: {
    ATitle,
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
.a-breadcrumb {
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

.a-breadcrumb__item-divider {
  margin-left: var(--size-scalable-medium);
}
</style>
