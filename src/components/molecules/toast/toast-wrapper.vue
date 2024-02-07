<template>
  <HToast
    :items="items"
    @click="handleItemClick"
  />
</template>

<script lang="ts">
import HToast from './toast.vue';

interface Item {
  id: string;
  text?: string | null;
  title?: string | null;
  icon?: string | null;
  color?: string | null;
  duration?: number | null;
}

export default {
  name: 'HToastWrapper',
  components: {
    HToast,
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
    items: [] as Item[],
    timer: [] as any[],
    counter: 0,
  }),
  methods: {
    addItem(itemOptions: Item) {
      this.items.push(itemOptions);
      if (!this.duration && !itemOptions.duration) return;

      this.timer.push(
        setTimeout(() => {
          this.removeItemById(itemOptions.id);
          // eslint-disable-next-line no-plusplus
          clearTimeout(this.timer[this.counter++]);
        }, itemOptions.duration || this.duration),
      );
    },
    removeItemById(id: Item["id"]) {
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
    handleItemClick(index: number) {
      this.$emit('click', index);
      if (this.onClickRemove) this.removeItem(index);
    },
  },
};
</script>
