<template>
  <component
    :is="tag"
    :class="{
      'h-image': true,
      [`h-image--behavior-${behavior}`]: behavior,
    }"
  >
    <img
      :src="src"
      class="h-image__image"
    >
    <figcaption v-if="caption">
      {{ caption }}
    </figcaption>
  </component>
</template>

<script>

export default {
  props: {
    tag: {
      type: String,
      default: 'figure',
    },
    caption: {
      type: String,
      default: '',
    },
    behavior: {
      type: String,
      default: 'default',
    },
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.h-image {
  margin: 0;
  position: relative;
  display: inline-block;

  &__image {
    width: 100%;
    height: 100%;
    display: inline-block;
  }
  &--behavior {
    &-rounded {
      border-radius: 50%;
      overflow: hidden;
    }
  }
}
</style>
