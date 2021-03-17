<template>
  <component
    :is="tag"
    class="a-logo"
  >
    <img
      :src="src"
      class="a-logo__image"
    >
    <figcaption v-if="caption">
      {{ caption }}
    </figcaption>
  </component>
</template>

<script>
import { getOurImageUrl } from '@/utils';

export default {
  props: {
    color: {
      type: String,
      default: 'black',
    },
    enterprise: {
      type: String,
      default: 'hyone',
    },
    tag: {
      type: String,
      default: 'figure',
    },
    type: {
      type: String,
      default: 'svg',
    },
    caption: {
      type: String,
      default: '',
    },
    behavior: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    logoName() {
      return `${this.enterprise}_${this.color}`;
    },
    src() {
      return getOurImageUrl(`/logotype/${this.logoName}.${this.type}`);
    },
  },
};
</script>

<style lang="scss">
.a-logo {
  margin: 0;
  position: relative;
  height: fit-content;
  width: fit-content;
  &__image {
    height:100%;
    width:100%;
  }
}
</style>
