<template>
  <ul class="h-stepper">
    <li
      class="h-stepper__item"
      :class="{ 'h-stepper__item--current-active': currentActive > index + 1 }"
      v-for="(element, index) in items"
    >
      <HBadge
        class="h-stepper__item-badge"
        :class="{
          'h-stepper__item-badge--active': currentActive >= index + 1,
          'h-stepper__item-badge--is-clickable': isClickable,
        }"
        :value="index + 1"
        size="jumbo"
        @click="handleClick(index)"
      />
      <HText
        class="h-stepper__item-text"
        :class="{
          'h-stepper__item-text--is-clickable': isClickable,
        }"
        tag="span"
        weight="medium"
        @click="handleClick(index)"
        >{{ element }}</HText
      >
    </li>
  </ul>
</template>

<script>
import { HBadge } from "@components/atoms/badge";
import { HText } from "@components/atoms/text";

export default {
  components: {
    HBadge,
    HText,
  },
  emits: ["click"],
  props: {
    isClickable: {
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
  setup(props, { emit }) {
    const handleClick = (index) => {
      if (props.isClickable) return emit("click", index + 1);
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
  --h-stepper__item-line: var(--colors-scale-grey-medium);
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
  --h-badge--background-color: var(--color-theme-tertiary);

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

.h-stepper__item-text--is-clickable {
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.7;
  }
}
</style>
