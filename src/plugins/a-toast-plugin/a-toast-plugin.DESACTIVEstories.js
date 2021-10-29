import { AButton } from '@/components/atoms/a-button';

export default {
  title: 'Design System/Plugins/AToast',
  decorators: [
    () => ({ template: '<div style="transform: scale(1); height: 40vh;"><story/></div>' }),
  ],
};

export const withText = () => ({
  components: { AButton },
  data: () => ({
    items: [{ title: 'Home', icon: 'fas fa-location-arrow' }],
    variants: [
      'success',
      'info',
      'danger',
      'warn',
      'primary',
      'secondary',
      'tertiary',
      'default',
    ],
  }),
  template: `
    <div>
      <a-button @click="pushItem">Adicionar</a-button>
      <a-button @click="removeItem">Remover</a-button>
    </div>
    `,
  methods: {
    pushItem() {
      this.$toast.add({
        title: 'Home',
        text: 'Testando',
        icon: 'fas fa-location-arrow',
        variant: this.variants[Math.floor(Math.random() * this.variants.length)],
      });
    },
    removeItem(index = 0) {
      this.$toast.remove(index);
    },
  },
});

export const withDuration = () => ({
  components: { AButton },
  data: () => ({
    items: [{ title: 'Home', icon: 'fas fa-location-arrow' }],
    variants: [
      'success',
      'info',
      'danger',
      'warn',
      'primary',
      'secondary',
      'tertiary',
      '',
    ],
  }),
  template: `
    <div>
      <a-button @click="pushItem">Adicionar</a-button>
      <a-button @click="removeItem">Remover</a-button>
    </div>
    `,
  methods: {
    pushItem() {
      this.$toast.add({
        title: 'Home',
        text: 'Testando',
        icon: 'fas fa-location-arrow',
        variant: this.variants[Math.floor(Math.random() * this.variants.length)],
        duration: 3000,
      });
    },
    removeItem(index = 0) {
      this.$toast.remove(index);
    },
  },
});
