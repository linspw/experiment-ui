<template>
  <figure class="a-logo">
    <img :src="src">
    <figcaption>An elephant at sunset</figcaption>
  </figure>
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
      default: 'hyone_investiments',
    },
  },
  computed: {
    logoName() {
      return `${this.enterprise}_${this.color}`;
    },
    src() {
      return getOurImageUrl(`/images/logos/${this.logoName}.svg`);
    },
  },
};
</script>

<style>

</style>
