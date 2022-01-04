<template>
  <transition-group
    name="h-toast__fade"
    mode="out-in"
    class="h-toast"
    tag="div"
  >
    <HCard
      v-for="(item, index) in items"
      :key="item.text + item.title + item.variant + item.id"
      :class="{
        ['h-toast__item--inverse']: item.variant
          && (item.variant !== 'warn')
          && (item.variant !== 'default')
          && (item.variant !== 'tertiary')
          && (item.variant ),
        [`${item.variant}`]: item.variant
      }"
      :variant="item.variant"
      class="h-toast__item"
      tag="button"
      @click.stop="handleClick(index)"
    >
      <div class="h-toast__icon">
        <HIcon
          v-if="item.icon"
          :icon="item.icon"
          size="medium"
        />
      </div>

      <div class="h-toast__content">
        <HText v-if="item.title" weight="bold">
          {{ item.title }}
        </HText>

        <HText
          v-if="item.text"
          tag="span"
        >
          {{ item.text }}
        </HText>
      </div>
    </HCard>
  </transition-group>
</template>

<script>
import { HText } from '@components/atoms/text';
import { HIcon } from '@components/atoms/icon';
import { HCard } from '@components/atoms/card';

export default {
  components: {
    HCard,
    HIcon,
    HText,
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

.h-toast {
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
    --h-card--padding: 16px !important;

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

.h-toast__fade-enter-active,
.h-toast__fade-leave-active {
  transition: all 500ms;
}

.h-toast__fade-enter-from,
.h-toast__fade-leave-to {
  transform: translateX(100%);
}
</style>
