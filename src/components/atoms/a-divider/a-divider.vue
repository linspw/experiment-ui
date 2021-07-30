<template>
  <hr
    class="a-divider"
    v-bind="$attrs"
  >
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<style lang="scss">
.a-divider {
  align-self: stretch;
  height: auto;
  margin: 0;
  width: auto;
  border-width: var(--size-nano);
  border-style: solid;
  border-color: var(--colors-scale-grey-light);
}
</style>
