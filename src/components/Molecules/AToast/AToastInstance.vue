<template>
  <AToast
    :items="items"
    @click="handleItemClick"
  />
</template>

<script>
import TimerQueue from 'timer-queue';
import AToast from './AToast.vue';

export default {
  components: {
    AToast,
  },
  props: {
    onClickRemove: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    items: [],
  }),
  beforeDestroy() {
    this.$off('click');
  },
  mounted() {
    this.timer = new TimerQueue({
      timeout: this.duration,
      autoStart: true,
    });
  },
  methods: {
    pushItem(itemOptions) {
      this.items.push(itemOptions);
      if (this.duration) {
        this.timer.push(() => {
          setTimeout(() => {
            this.removeItemById(itemOptions.id);
          }, this.duration);
        });
      }
    },
    removeItemById(id) {
      if (!this.items.length) return undefined;
      const index = this.items.findIndex((element) => element.id === id);
      if (index >= 0) return this.removeItem(index);
      return undefined;
    },
    removeItem(index = 0) {
      if (!this.items.length) return undefined;
      this.items.splice(index, 1);
      return index;
    },
    handleItemClick(index) {
      this.$emit('click', index);
      if (this.onClickRemove) this.removeItem(index);
    },
  },
};
</script>

<style>

</style>
