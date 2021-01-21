<template>
  <div class="a-icon">
    <i :class="icon"></i>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'inherit',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/styles/font-awesome/css/fontawesome.min.css';
@import '~@/styles/font-awesome/css/brands.min.css';
@import '~@/styles/font-awesome/css/solid.min.css';
</style>