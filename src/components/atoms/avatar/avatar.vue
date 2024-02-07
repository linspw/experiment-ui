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

<script lang="ts">
import { shouldBeOneOf } from '@utils/validations';
import { avatarSizes, avatarFormats, avatarTypes } from '@assets/constants';
import { genderDictionary } from './gender-dictionary';

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
      validator: shouldBeOneOf(avatarTypes),
    },
    caption: {
      type: String,
      default: null,
    },
    behavior: {
      type: String,
      default: 'default',
      validator: shouldBeOneOf(avatarFormats),
    },
    src: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: 'colossal',
      validator: shouldBeOneOf(avatarSizes),
    },
  },
  computed: {
    defaultImage() {
      return genderDictionary[this.gender as keyof typeof genderDictionary];
    },
    srcParsed() {
      return this.src || this.defaultImage;
    },
  },
};
</script>

<style lang="scss">
:root {
  --h-avatar-width: none;
  --h-avatar-height: none;
  --h-avatar-border-radius: none;
  --h-avatar-overflow: hidden;
  --h-avatar-marging: 0;
  --h-avatar__figcaption-background-color: black;
  --h-avatar__figcaption-color: white;
  --h-avatar__figcaption-text-align: center;
}

.h-avatar {
  border-radius: var(--h-avatar-border-radius);
  height: var(--h-avatar-height);
  margin: var(--h-avatar-marging);
  overflow: var(--h-avatar-overflow);
  position: relative;
  width: var(--h-avatar-width);

  &__image {
    height:100%;
    width:100%;
    object-fit: cover;
  }

  &__figcaption {
    background-color: var(--h-avatar__figcaption-background-color);
    bottom: 0;
    color: var(--h-avatar__figcaption-color);
    left: 0;
    position: absolute;
    text-align: var(--h-avatar__figcaption-text-align);
    width: 100%;
  }

  &--behavior {
    &-rounded {
      --h-avatar-border-radius: var(--border-radius-normal);
    }
    &-circle,
    &-default {
      --h-avatar-border-radius: var(--border-radius-circle);
    }
    &-square {
      --h-avatar-border-radius: none;
    }
  }

  &--size {
    &-medium {
      --h-avatar-width: var(--size-base-medium);
      --h-avatar-height: var(--size-base-medium);
    }
    &-large {
      --h-avatar-width: var(--size-base-large);
      --h-avatar-height: var(--size-base-large);
    }
    &-extra-large {
      --h-avatar-width: var(--size-base-extra-large);
      --h-avatar-height: var(--size-base-extra-large);
    }
    &-jumbo {
      --h-avatar-width: var(--size-base-jumbo);
      --h-avatar-height: var(--size-base-jumbo);
    }
    &-extra-jumbo {
      --h-avatar-width: var(--size-base-extra-jumbo);
      --h-avatar-height: var(--size-base-extra-jumbo);
    }
    &-giant {
      --h-avatar-width: var(--size-base-giant);
      --h-avatar-height: var(--size-base-giant);
    }
    &-extra-giant {
      --h-avatar-width: var(--size-base-extra-giant);
      --h-avatar-height: var(--size-base-extra-giant);
    }
    &-colossal {
      --h-avatar-width: var(--size-base-colossal);
      --h-avatar-height: var(--size-base-colossal);
    }
    &-extra-colossal {
      --h-avatar-width: var(--size-base-extra-colossal);
      --h-avatar-height: var(--size-base-extra-colossal);
    }
    &-mega {
      --h-avatar-width: var(--size-base-mega);
      --h-avatar-height: var(--size-base-mega);
    }
    &-extra-mega {
      --h-avatar-width: var(--size-base-extra-mega);
      --h-avatar-height: var(--size-base-extra-mega);
    }
    &-immense {
      --h-avatar-width: var(--size-base-immense);
      --h-avatar-height: var(--size-base-immense);
    }
  }
}
</style>
@/utils/validations@/assets/constants