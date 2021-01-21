<template>
  <button
    :class="{
      [`a-button`]: true,
      [`a-button--variant-${variant}`]: variant,
    }"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'a-button',
  props: {
    variant: {
      type: String,
      default: 'primary',
    },
  },
}
</script>

<style lang="scss" scoped>
.a-button {
  padding: 8px 24px;
  border-radius: 8px;
  border: 0;

  &--variant-primary {
    background-color: white;
  }
}
</style>
