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
