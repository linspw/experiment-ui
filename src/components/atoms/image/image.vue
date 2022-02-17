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
  name: 'HImage',
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
