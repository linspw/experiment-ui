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

<style>
.a-divider {
  align-self: stretch;
  height: auto;
  margin: 0;
  width: auto;
  border-width: 1px;
  border-style: solid;
  border-color: var(--colors-scale-grey-light);
}
</style>
