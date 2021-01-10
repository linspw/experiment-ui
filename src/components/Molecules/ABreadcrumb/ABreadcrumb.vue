<template>
  <nav class="v-breadcrumb">
    <VTitle
      v-for="(item, index) in items"
      :key="index"
      size="extra-small"
      tag="a"
      :weight="(index === (items.length -1)) ? 'regular' : 'light'"
      :href="item.url"
      class="v-breadcrumb__item"
    >
      {{ (index === (items.length -1)) ? item.text: `${item.text} /` }}
    </VTitle>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.v-breadcrumb {
  display: flex;

  &__item {
    white-space: nowrap;
    margin-left: 4px;
    text-transform: uppercase;
  }
}
</style>
