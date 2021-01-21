<template>
  <input
    :max="max"
    :min="min"
    :value="value"
    :step="step"
    @change="handleSlider"
    class="a-slider"
    type="range"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
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
      type: Number,
      default: 0.5,
    },
  },
  methods: {
    handleSlider(event) {
      this.$emit("change", parseInt(event.target.value));
    },
  },
}
</script>

<style lang="scss">
.a-slider {
  -webkit-appearance: none;
  -webkit-transition: .2s;
  -webkit-transition: opacity .2s;
  background: var(--colors-interactive-blue);
  border-radius: 5px;
  height: 6px;
  margin-top: 10px;
  outline: none;
  transition: opacity .2s;

  &::-webkit-slider-runnable-track {
    height: 10px;
    -webkit-appearance: none;
    color: #13bba4;
    position: relative;
    margin-top: -1px;
  }

  &::-webkit-slider-thumb {
    position: absolute;
    top: -2px;
    width: 14px;
    -webkit-appearance: none;
    height: 14px;
    cursor: ew-resize;
    background: white;
    box-shadow: 0px 0 0 2px var(--colors-interactive-blue);
    border-radius: 50%;
  }
}

</style>
