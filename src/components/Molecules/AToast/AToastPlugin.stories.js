import { AToast } from ".";
import { AButton } from "@/components/Atoms/AButton";

export default {
  title: "Design System/Molecules/AToast/Plugin",
  decorators: [
    () => ({ template: '<div style="transform: scale(1); height: 40vh;"><story/></div>' }),
  ],
};

export const withText = () => ({
  components: { AToast, AButton },
  data: () => ({
    items: [{ title: "Home", icon: "fas fa-location-arrow" }],
    variants: [
      'success',
      'info',
      'danger',
      'warn',
      'primary',
      'secondary',
      'tertiary',
      'interactive',
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
      });
      this.$toastInstance.$on('click', (msg) => console.log(msg));
    },
    removeItem(index = 0) {
      this.$toast.remove(index);
    },
  },
});
