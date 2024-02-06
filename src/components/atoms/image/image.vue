<template>
  <component
    :is="tag"
    :class="{
      'h-image': true,
      [`h-image--bounds-${bounds}`]: bounds,
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

<script lang="ts">
import { shouldBeOneOf } from '@utils/validations';
import { imageTypes, imageFormats } from '@assets/constants';

export default {
  name: 'HImage',
  props: {
    tag: {
      type: String,
      default: 'figure',
      validator: shouldBeOneOf(imageTypes),
    },
    caption: {
      type: String,
      default: null,
    },
    bounds: {
      type: String,
      default: 'default',
      validator: shouldBeOneOf(imageFormats),
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

  &--bounds {
    &-rounded {
      border-radius: 50%;
      overflow: hidden;
    }
  }
}
</style>
@/utils/validations@/assets/constants