<template>
  <transition-group
    name="fade"
    mode="out-in"
    class="a-toast"
    tag="div"
  >
    <ACard
      v-for="(item, index) in items"
      :key="item.text + item.title + item.variant + item.id"
      :class="item.variant && 'a-toast__item--inverse'"
      :variant="item.variant"
      class="a-toast__item"
      tag="button"
      @click.native="handleClick(index)"
    >
      <div class="a-toast__icon">
        <AIcon
          v-if="item.icon"
          :icon="item.icon"
          size="medium"
        />
      </div>

      <div class="a-toast__content">
        <ATitle v-if="item.title">
          {{ item.title }}
        </ATitle>

        <AText
          v-if="item.text"
          tag="span"
        >
          {{ item.text }}
        </AText>
      </div>
    </ACard>
  </transition-group>
</template>

<script>
import { AText } from '@/components/atoms/a-text';
import { ATitle } from '@/components/atoms/a-title';
import { AIcon } from '@/components/atoms/a-icon';
import { ACard } from '@/components/atoms/a-card';

export default {
  components: {
    ACard,
    AIcon,
    ATitle,
    AText,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(index) {
      this.$emit('click', index);
    },
  },
};
</script>

<style lang="scss" scoped>
.a-toast {
  overflow: hidden;
  position: fixed;
  max-height: 100vh;
  max-width: 380px;
  padding-right: 24px;
  right: 0px;
  top: 24px;
  width: 100%;
  z-index: 100;

  &__item {
    --a-card--padding: 16px;
    margin: 4px;
    align-items: center;
    display: flex;
    position: relative;
    width: 100%;
    margin-bottom: 8px;

    &--inverse {
      color: var(--color-theme-inverse);
    }

    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
  }

  &__icon {
    margin-right: 24px;
    height: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all 500ms;
}
.fade-enter, .fade-leave-to {
  transform: translateX(100%);
}
</style>
