<template>
  <component
    :is="tag"
    :class="{
      'a-image': true,
      [`a-image--behavior-${behavior}`]: behavior,
    }"
    :style="{width, height}"
  >
    <img
      :src="src"
      class="a-image__image"
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
    width: {
      type: String,
      default: 'auto',
    },
    height: {
      type: String,
      default: 'auto',
    },
  },
};
</script>

<style lang="scss">
.a-image {
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
