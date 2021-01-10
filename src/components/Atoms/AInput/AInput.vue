<template>
  <div
    :class="{
      ['v-input']: true,
      [`v-input--${behavior}`]: behavior != 'default',
      [`v-input--${size}`]: size,
    }"
  >
    <input
      type="text"
      class="v-input__field"
      :placeholder="placeholder"
      :value="value"
      @input="handleInput"
    />
  </div>
</template>

<script>
import { shouldBeOneOf } from "vue-prop-validation-helper";

export default {
  props: {
    size: {
      type: String,
      default: "medium",
      validator: shouldBeOneOf(["small", "medium", "large"]),
    },
    behavior: {
      type: String,
      default: "default",
      validator: shouldBeOneOf(["default", "block"]),
    },
    isLoading: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="scss">
.v-input {
  border-radius: 4px;
  border: solid 2px #f1f3f4;
  position: relative;
  width: 100%;

  &--medium {
    min-height: 40px;

    & > .v-input__field {
      padding: 10px;
      font-size: 16px;
    }
  }

  &--large {
    min-height: 50px;

    & > .v-input__field {
      padding: 20px;
      font-size: 16px;
    }
  }

  &__field {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    &::placeholder {
      color: #262626;
      opacity: 0.5;
    }
  }
}
</style>
