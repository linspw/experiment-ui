<template>
  <div
    class="h-select"
    :class="{
      [`h-select--size-${size}`]: size,
      [`h-select--behavior-${behavior}`]: behavior != 'default',
    }"
    :tabindex="tabindex"
    @blur="open = false"
  >
    <div
      class="h-select__field"
      :class="{ 'h-select__field--open': open }"
      aria-haspopup="listbox"
      arih-selected="true"
      @click="open = !open"
    >
      {{ selected }}
    </div>

    <HIcon
      v-if="icon"
      :icon="icon"
      :color="iconColor"
      class="h-select__icon"
      @click="open = !open"
    />

    <ul
      v-if="options && options.length"
      class="h-select__list-items"
      :class="{ 'h-select__list-items--hide': !open }"
      :aria-expanded="open"
    >
      <li
        v-for="(option, index) of options"
        :key="index"
        role="option"
        class="h-select__item"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
import { shouldBeOneOf } from 'vue-prop-validation-helper';
import { HIcon } from '@components/atoms/icon';

export default {
  components: {
    HIcon,
  },
  props: {
    placeholder: {
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
        'tertiary',
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
      type: Array,
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
      default: 'medium',
    },
  },
  data() {
    return {
      selected: null,
      open: false,
    };
  },
  mounted() {
    this.selected = this.value || this.placeholder;

    this.$emit('input', this.selected);
  },
};
</script>

<style scoped lang="scss">
.h-select {
  border-radius: var(--border-radius-normal);
  border: var(--size-base-micro) solid var(--colors-scale-grey-medium);
  color: var(--colors-scale-grey-medium);
  display: inline-flex;
  font-family: 'Red Hat Text', sans-serif;
  height: fit-content;
  position: relative;
  width: 303px;

  &--size {
    &-small {
      & > .h-select__field {
        min-height: var(--size-base-extra-large);
        font-size: var(--size-scalable-micro);
      }
    }
    &-medium {
      & > .h-select__field {
        min-height: var(--size-base-jumbo);
        font-size: var(--size-scalable-extra-small);
      }
    }
  }

  &--behavior {
    &-block {
      width: 100%;
    }
  }
}

.h-select__field {
  align-items: center;
  background-color: var(--colors-original-white);
  border-radius: var(--border-radius-normal);
  border: none;
  color: var(--colors-scale-grey-dark);
  cursor: pointer;
  display: flex;
  flex: 1;
  font-family: 'Red Hat Text', sans-serif;
  font-weight: 500;
  height: 100%;
  left: 0;
  padding-left: var(--size-base-medium);
  padding-right: var(--size-base-medium);
  position: relative;
  top: 0;
  transition: background-color 250ms, color 250ms;
  user-select: none;
  width: 100%;
}

.h-select__icon {
  color: var(--colors-scale-grey-dark);
  position: absolute;
  right: var(--size-base-extra-small);
  display: flex;
  align-items: center;
  height: 100%;
}

.h-select__list-items {
  background-color: var(--colors-original-white);
  border-radius: var(--border-radius-normal);
  border: var(--size-base-micro) solid var(--color-theme-primary);
  color: var(--color-theme-secondary);
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 120%;
  z-index: 1;
}

.h-select__list-items--hide {
  display: none;
}

.h-select__item {
  color: var(--color-theme-secondary);
  padding: var(--size-base-small) var(--size-base-medium);
  font-family: 'Red Hat Text', sans-serif;
  font-weight: 500;
  cursor: pointer;
  user-select: none;

  &:not(:last-child) {
    border-bottom: var(--size-base-micro) solid var(--colors-scale-grey-medium);
  }

  &:hover {
    background-color: var(--colors-scale-grey-light);
  }
}

</style>
