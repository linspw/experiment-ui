<template>
  <component
    :is="tag"
    :class="{
      'a-avatar': true,
      [`a-avatar--size-${size}`]: size,
      [`a-avatar--behavior-${behavior}`]: behavior,
    }"
  >
    <img
      :src="srcParsed"
      class="a-avatar__image"
    >
    <figcaption
      v-if="caption"
      class="a-avatar__figcaption"
    >
      {{ caption }}
    </figcaption>
  </component>
</template>

<script>
import { shouldBeOneOf } from 'vue-prop-validation-helper';
import { getOurImageUrl } from '@/utils';

export default {
  props: {
    gender: {
      type: String,
      default: 'male',
      validator: shouldBeOneOf([
        'male',
        'female',
      ]),
    },
    tag: {
      type: String,
      default: 'figure',
    },
    type: {
      type: String,
      default: 'svg',
      validator: shouldBeOneOf([
        'svg',
        'png',
      ]),
    },
    caption: {
      type: String,
      default: null,
    },
    behavior: {
      type: String,
      default: 'rounded',
      validator: shouldBeOneOf([
        'rounded',
        'square',
      ]),
    },
    src: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: 'colossal',
      validator: shouldBeOneOf([
        'medium',
        'large',
        'extra-large',
        'jumbo',
        'extra-jumbo',
        'giant',
        'extra-giant',
        'colossal',
        'extra-colossal',
        'mega',
        'extra-mega',
        'immense',
      ]),
    },
  },
  computed: {
    defaultImage() {
      return getOurImageUrl(`/undraw/avatar_${this.gender}.${this.type}`);
    },
    srcParsed() {
      return this.src || this.defaultImage;
    },
  },
};
</script>
