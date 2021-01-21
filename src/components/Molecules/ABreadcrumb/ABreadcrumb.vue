<template>
  <nav class="a-breadcrumb">
    <ATitle
      :href="item.url"
      :key="index"
      :weight="(index === 0) ? 'medium' : 'regular'"
      class="a-breadcrumb__item"
      size="large"
      tag="a"
      v-for="(item, index) in items"
    >
      <template v-if="(index === (items.length -1))">
        {{ item.text }}
      </template>
      <template v-else>
        {{ item.text }} <AIcon icon="fas fa-chevron-right" class="a-breadcrumb__icon" />
      </template>
    </ATitle>
  </nav>
</template>

<script>
import { ATitle } from '@/components/Atoms/ATitle';
import { AIcon } from '@/components/Atoms/AIcon';

export default {
  components: {
    ATitle,
    AIcon,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.a-breadcrumb {
  display: flex;

  &__item {
    white-space: nowrap;
    &:not(:first-child) {
      margin-left: 24px;
    }
  }

  &__icon {
    margin-left: 24px;
  }
}
</style>
