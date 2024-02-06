<template>
  <ul class="h-stepper">
    <li
      v-for="(element, index) in items"
      :key="index"
      class="h-stepper__item"
      :class="{ 'h-stepper__item--current-active': currentActive > index + 1 }"
    >
      <HBadge
        class="h-stepper__item-badge"
        :class="{
          'h-stepper__item-badge--active': currentActive >= index + 1,
          'h-stepper__item-badge--clickable': clickable,
        }"
        :value="index + 1"
        size="jumbo"
        @click="handleClick(index)"
      />

      <HText
        class="h-stepper__item-text"
        :class="{
          'h-stepper__item-text--clickable': clickable,
        }"
        tag="span"
        weight="medium"
        @click="handleClick(index)"
      >
        {{ element }}
      </HText>
    </li>
  </ul>
</template>

<script lang="ts">
import { HBadge } from '@components/atoms/badge';
import { HText } from '@components/atoms/text';

export default {
  name: 'HStepper',
  components: {
    HBadge,
    HText,
  },
  props: {
    clickable: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      required: true,
    },
    currentActive: {
      type: Number,
      required: true,
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (index: number) => {
      if (props.clickable) return emit('click', index + 1);
      return null;
    };

    return {
      handleClick,
    };
  },
};
</script>

<style lang="scss">
.h-stepper {
  --h-stepper__item-spacing: 0rem;

  position: relative;
  display: flex;
  flex-wrap: wrap;
}

.h-stepper__item {
  --h-stepper__item-line: var(--color-blue-grey-scale-300);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &--current-active {
    --h-stepper__item-line: var(--color-theme-secondary);
  }

  &:not(:last-child):after {
    content: "";
    position: relative;
    top: 1.25rem;
    width: calc(100% - 4rem - calc(var(--h-stepper__item-spacing) * 2));
    left: 50%;
    height: 3px;
    border-radius: var(--border-radius-normal);
    background-color: var(--h-stepper__item-line);
    order: -1;
  }
}
.h-stepper__item-badge {
  --h-badge--background-color: var(--color-blue-grey-scale-500);

  margin-bottom: var(--size-base-small);
  z-index: 10;

  &--active {
    --h-badge--background-color: var(--color-theme-secondary);
  }
  &--is-clickable {
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
    &:active {
      opacity: 0.7;
    }
  }
};

.h-stepper__item-text--clickable {
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.7;
  }
}
</style>
