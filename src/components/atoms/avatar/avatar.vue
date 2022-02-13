<template>
  <component
    :is="tag"
    :class="{
      'h-avatar': true,
      [`h-avatar--size-${size}`]: size,
      [`h-avatar--behavior-${behavior}`]: behavior,
    }"
  >
    <img
      :src="srcParsed"
      class="h-avatar__image"
    >
    <figcaption
      v-if="caption"
      class="h-avatar__figcaption"
    >
      {{ caption }}
    </figcaption>
  </component>
</template>

<script>
import { shouldBeOneOf } from '@utils/validations';
import MaleSVG from '@assets/images/avatar_male.svg';
import FemaleSVG from '@assets/images/avatar_female.svg';

export default {
  name: 'HAvatar',
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
      const genderDictionary = {
        male: MaleSVG,
        female: FemaleSVG,
      }
      console.log(genderDictionary);
      return genderDictionary[this.gender];
    },
    srcParsed() {
      return this.src || this.defaultImage;
    },
  },
};
</script>
