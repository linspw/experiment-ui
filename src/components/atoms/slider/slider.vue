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
  >
</template>

<script>
export default {
  name: 'HSlider',
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
  emits: ['change'],
  computed: {
    style() {
      return {
        background: `linear-gradient(to right, var(--color-theme-secondary) 0%, var(--color-theme-secondary) ${this.value}%, #fff ${this.value}%, #fff 100%)`,
      };
    },
  },
  methods: {
    handleSlider(event) {
      this.$emit('change', parseInt(event.target.value, 10));
    },
  },
};
</script>
