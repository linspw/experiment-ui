<template>
  <transition-group
    name="a-toast__fade"
    mode="out-in"
    class="a-toast"
    tag="div"
  >
    <ACard
      v-for="(item, index) in items"
      :key="item.text + item.title + item.variant + item.id"
      :class="{
        ['a-toast__item--inverse']: item.variant
          && (item.variant !== 'warn')
          && (item.variant !== 'default')
          && (item.variant !== 'tertiary')
          && (item.variant ),
        [`${item.variant}`]: item.variant
      }"
      :variant="item.variant"
      class="a-toast__item"
      tag="button"
      @click.stop="handleClick(index)"
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

<style lang="scss">
@import '@/styles/utils/index';

.a-toast {
  overflow: hidden;
  position: fixed;
  max-height: 100vh;
  right: 0px;
  width: 100%;
  z-index: 100;
  top: 24px;

  @include for-mobile-up{
    max-width: 380px;
    padding-right: 24px;
  }

  &__item {
    --a-card--padding: 16px !important;

    align-items: center;
    display: flex;
    position: relative;
    width: 100%;

    @include for-mobile-up {
      margin: 4px;
      margin-bottom: 8px;
    }

    &--inverse {
      color: var(--color-theme-inverse) !important;
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

.a-toast__fade-enter-active,
.a-toast__fade-leave-active {
  transition: all 500ms;
}

.a-toast__fade-enter-from,
.a-toast__fade-leave-to {
  transform: translateX(100%);
}
</style>
