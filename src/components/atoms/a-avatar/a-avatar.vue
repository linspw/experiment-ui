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
    <figcaption v-if="caption">
      {{ caption }}
    </figcaption>
  </component>
</template>

<script>
import { getOurImageUrl } from '@/utils';

export default {
  props: {
    gender: {
      type: String,
      default: 'male',
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
      default: 'rounded',
    },
    src: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'colossal',
    },
  },
  computed: {
    image() {
      return `avatar_${this.gender}`;
    },
    srcParsed() {
      return this.src || getOurImageUrl(`/undraw/${this.image}.${this.type}`);
    },
  },
};
</script>

<style lang="scss">
.a-avatar {
  margin: 0;
  position: relative;
  height: fit-content;
  width: fit-content;
  &__image {
    height:100%;
    width:100%;
  }
  &--behavior {
    &-rounded {
      border-radius: 50%;
      overflow: hidden;
    }
  }
  &--size {
    &-medium {
      width: var(--size-medium);
      height: var(--size-medium);
    }
    &-large {
      width: var(--size-large);
      height: var(--size-large);
    }
    &-extra-large {
      width: var(--size-extra-large);
      height: var(--size-extra-large);
    }
    &-jumbo {
      width: var(--size-jumbo);
      height: var(--size-jumbo);
    }
    &-extra-jumbo {
      width: var(--size-extra-jumbo);
      height: var(--size-extra-jumbo);
    }
    &-giant {
      width: var(--size-giant);
      height: var(--size-giant);
    }
    &-extra-giant {
      width: var(--size-extra-giant);
      height: var(--size-extra-giant);
    }
    &-colossal {
      width: var(--size-colossal);
      height: var(--size-colossal);
    }
    &-extra-colossal {
      width: var(--size-extra-colossal);
      height: var(--size-extra-colossal);
    }
    &-mega {
      width: var(--size-mega);
      height: var(--size-mega);
    }
    &-extra-mega {
      width: var(--size-extra-mega);
      height: var(--size-extra-mega);
    }
    &-immense {
      width: var(--size-immense);
      height: var(--size-immense);
    }
  }
}
</style>
