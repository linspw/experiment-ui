<template>
  <nav class="a-breadcrumb">
    <ATitle
      v-for="(item, index) in items"
      :key="index"
      :color="(index === 0) ? 'primary' : 'tertiary'"
      :href="item.url"
      class="a-breadcrumb__item"
      :size="(index === 0) ? 'small' : 'extra-small'"
      tag="a"
      :weight="(index === 0) ? 'bold' : 'medium'"
    >
      {{ item.text }}
    </ATitle>
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

  &__item {
    align-items: center;
    display: flex;
    white-space: nowrap;

    &:not(:first-child) {
      margin-left: var(--size-scalable-jumbo);
    }
  }
}
</style>
