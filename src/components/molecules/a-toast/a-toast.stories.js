import { AToast } from '.';
import { AButton } from '@/components/atoms/a-button';
import { ref } from 'vue'

export default {
  title: 'Design System/Molecules/AToast',
  decorators: [
    () => ({ template: '<div style="transform: scale(1); height: 40vh;"><story/></div>' }),
  ],
};

export const withText = () => ({
  components: { AToast, AButton },
  template: `
    <div>
      <AButton @click="pushItem">Adicionar</AButton>
      <AButton @click="removeItem">Deletar</AButton>

      <a-toast :items="items" @click="removeItem" />
    </div>
    `,
  setup() {
    const variants = [
      'success',
      'info',
      'danger',
      'warn',
      'primary',
      'secondary',
      'tertiary',
      'default',
    ]
    const items = ref([{ title: 'Home', icon: 'fas fa-location-arrow' }])
    const pushItem = () => {
      items.value.push({
        title: `Home${items.value.length}`,
        text: 'Testando',
        icon: 'fas fa-location-arrow',
        id: Date.now(),
        variant: variants[Math.floor(Math.random() * variants.length)],
      });
    }

    const removeItem = (index = 0) => {
      items.value.splice(index, 1);
    }

    return { 
      items,
      pushItem,
      removeItem,
    };
  },
});

export const withVariants = () => ({
  components: { AToast },
  data: () => ({
    items: [
      {
        title: 'success', text: 'name', icon: 'fas fa-location-arrow', variant: 'success',
      },
      {
        title: 'info', text: 'name', icon: 'fas fa-location-arrow', variant: 'info',
      },
      {
        title: 'danger', text: 'name', icon: 'fas fa-location-arrow', variant: 'danger',
      },
      {
        title: 'warn', text: 'name', icon: 'fas fa-location-arrow', variant: 'warn',
      },
      {
        title: 'primary', text: 'name', icon: 'fas fa-location-arrow', variant: 'primary',
      },
      {
        title: 'secondary', text: 'name', icon: 'fas fa-location-arrow', variant: 'secondary',
      },
      {
        title: 'tertiary', text: 'name', icon: 'fas fa-location-arrow', variant: 'tertiary',
      },
    ],
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
      <a-toast :items="items" />
    </div>
    `,
});
