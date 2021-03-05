<template>
  <nav class="a-breadcrumb">
    <ATitle
      v-for="(item, index) in items"
      :key="index"
      :href="item.url"
      :weight="(index === 0) ? 'medium' : 'regular'"
      class="a-breadcrumb__item"
      size="large"
      tag="a"
    >
      <template v-if="(index === (items.length -1))">
        {{ item.text }}
      </template>
      <template v-else>
        {{ item.text }} <AIcon
          icon="fas fa-chevron-right"
          class="a-breadcrumb__icon"
        />
      </template>
    </ATitle>
  </nav>
</template>

<script>
import { ATitle } from '@/components/atoms/a-title';
import { AIcon } from '@/components/atoms/a-icon';

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
};
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
