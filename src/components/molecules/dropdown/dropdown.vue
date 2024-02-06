<template>
  <div
    class="h-dropdown"
  >
    <HButton
      :tabindex="tabindex"
      :size="size"
      :variant="variant"
      aria-haspopup="listbox"
      aria-dropdowned="true"
      class="h-dropdown--button"
      :icon="!open ? icon : `${icon} fa-rotate-180`"
      :icon-color="iconColor"
      icon-position="right"
      @click="open = !open"
    >
      {{ value || label }}
    </HButton>

    <ul
      v-if="options && options.length"
      class="a-dropdown__list-items"
      :class="{
        'a-dropdown__list-items--hide': !open,
        [`a-dropdown__list-items--position-${position}`]: position
      }"
    >
      <li
        v-for="(option, index) of options"
        :key="index"
        role="option"
        class="a-dropdown__item"
        @click="handleClick(option)"
      >
        {{ option }}
      </li>
      <slot name="list-items" />
    </ul>
  </div>
</template>

<script lang="ts">
import { shouldBeOneOf } from '@utils/validations';
import { HButton } from '@components/atoms/button';
import {PropType} from 'vue'

export default {
  components: {
    HButton,
  },
  props: {
    position: {
      type: String,
      default: 'default',
      validator: shouldBeOneOf([
        'default',
        'centered',

      ]),
    },
    variant: {
      type: String,
      default: 'secondary',
    },
    label: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: 'fas fa-chevron-down',
    },
    iconColor: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
        'primary',
        'secondary',
        'interactive',
        'grey',
        'success',
        'danger',
        'warn',
        'info',
        'inverse',
      ]),
    },
    behavior: {
      type: String,
      default: 'default',
      validator: shouldBeOneOf(['default', 'block']),
    },
    options: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    value: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    size: {
      type: String,
      default: 'small',
    },
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    handleClick($event: Event) {
      this.open = false;
      if (this.$attrs.input) return this.$emit('input', $event);
      if (this.$attrs.change) return this.$emit('change', $event);

      return this.$emit('select', $event);
    },
    handleClickOutside() {
      this.open = false;
    },
  },
};
</script>

<style lang="scss">
.h-dropdown {
  --h-dropdown-width: fit-content;
  --h-button-width: var(--h-dropdown-width);

  position: relative;
  width: var(--h-dropdown-width);
}

.h-dropdown--button {
  & .fas {
    transition: all 250ms;
  }
}

.a-dropdown__list-items {
  border-radius: var(--border-radius-normal);
  border: var(--size-base-micro) solid var(--color-theme-primary);
  color: var(--color-theme-secondary);
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 120%;
  z-index: 1;
  min-width: fit-content;

  &--position {
    &-centered {
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

.a-dropdown__list-items--hide {
  display: none;
}

.a-dropdown__item {
  color: var(--color-theme-secondary);
  padding: var(--size-base-small) var(--size-base-medium);
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  background-color: var(--color-theme-white);
  white-space: nowrap;

  &:not(:last-child) {
    border-bottom: var(--size-base-micro) solid var(--color-blue-grey-scale-300);
  }

  &:hover {
    background-color: var(--color-blue-grey-scale-100);
  }
}

</style>
