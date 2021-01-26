<template>
  <div
    :class="{
      'a-select': true,
      [`a-select--${size}`]: size,
    }"
  >
    <select
      :class="{
        'a-select__field': true,
      }"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <option v-if="placeholder" value="" selected>
        {{ placeholder }}
      </option>

      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      default: 'medium',
      type: String,
    },
    options: {
      default() {
        return [];
      },
      type: Array,
    },
    placeholder: {
      default: '',
      type: String,
    },
    name: {
      default: null,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.a-select {
  border-radius: 8px;
  border: solid 2px #f1f3f4;
  box-shadow: 0px 3px 6px rgba(111, 107, 107, 0.32);
  font-family: 'Lato', sans-serif;
  position: relative;
  width: 100%;

  &--medium {
    height: 40px;

    & > .a-select__field {
      padding: 8px;
    }
  }

  &--large {
    height: 50px;

    & > .a-select__field {
      padding: 10px;
      padding-left: 16px;
    }
  }

  &__field {
    height: 100%;
    width: 100%;
    border: 0;
    background-color: white;
    font-family: "proxima-nova";
    font-size: 16px;
  }
}
</style>
