<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <input
    :max="max"
    :min="min"
    :step="step"
    :style="style"
    :value="value"
    class="h-slider"
    type="range"
    v-bind="$attrs"
    @input="handleSlider"
  />
</template>

<script lang="ts">
export default {
  name: "HSlider",
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      required: true,
    },
    step: {
      type: [String, Number],
      default: 1,
    },
  },
  emits: ["change"],
  computed: {
    style() {
      return {
        background: `linear-gradient(to right, var(--color-theme-secondary) 0%,
        var(--color-theme-secondary) ${this.value}%, 
        #fff ${this.value}%, #fff 100%)`,
      };
    },
  },
  methods: {
    handleSlider(event: Event): void {
      this.$emit("change", parseInt((event.target as any).value, 10));
    },
  },
};
</script>

<style lang="scss">
input[type="range"].h-slider {
  -webkit-appearance: none;
  -webkit-transition: 0.2s;
  -webkit-transition: opacity 0.2s;
  // background-color: blue;
  border-radius: 5px;
  border-width: var(--size-base-nano);
  border-style: solid;
  border-color: var(--color-blue-grey-scale-400);
  height: 8px;
  outline: none;
  transition: opacity 0.2s;
  width: 100%;
}

input[type="range"].h-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: var(--size-base-medium);
  width: var(--size-base-medium);
  border-radius: 50%;
  background: var(--color-theme-secondary);
  cursor: pointer;
}
</style>
