import { AToast } from ".";
import { AButton } from "@/components/Atoms/AButton";

export default {
  title: "Design System/Molecules/AToast",
  decorators: [
    () => ({ template: '<div style="transform: scale(1); height: 40vh;"><story/></div>' }),
  ],
};

export const withText = () => ({
  components: { AToast, AButton },
  data: () => ({
    items: [{ title: "Home", icon: "fas fa-location-arrow" }],
    variants: [
      "success",
      "info",
      "danger",
      "warn",
      "primary",
      "secondary",
      "tertiary",
      "interactive",
      "",
    ],
  }),
  template: `
    <div>
      <AButton @click="pushItem">Adicionar</AButton>
      <AButton @click="removeItem">Deletar</AButton>

      <a-toast :items="items" @click="removeItem" />
    </div>
    `,
  methods: {
    pushItem() {
      this.items.push({
        title: "Home" + this.items.length,
        text: "Testando",
        icon: "fas fa-location-arrow",
        id: Date.now(),
        variant: this.variants[Math.floor(Math.random() * this.variants.length)],
      });
    },
    removeItem(index = 0) {
      console.log(index)
      this.items.splice(index, 1);
    },
  },
});

export const withVariants = () => ({
  components: { AToast },
  data: () => ({
    items: [
      { title: "success", text: "name", icon: "fas fa-location-arrow", variant: "success" },
      { title: "info", text: "name", icon: "fas fa-location-arrow", variant: "info" },
      { title: "danger", text: "name", icon: "fas fa-location-arrow", variant: "danger" },
      { title: "warn", text: "name", icon: "fas fa-location-arrow", variant: "warn" },
      { title: "primary", text: "name", icon: "fas fa-location-arrow", variant: "primary" },
      { title: "secondary", text: "name", icon: "fas fa-location-arrow", variant: "secondary" },
      { title: "tertiary", text: "name", icon: "fas fa-location-arrow", variant: "tertiary" },
      { title: "interactive", text: "name", icon: "fas fa-location-arrow", variant: "interactive" },
    ],
    variants: [
      "success",
      "info",
      "danger",
      "warn",
      "primary",
      "secondary",
      "tertiary",
      "interactive",
      "",
    ],
  }),
  template: `
    <div>
      <a-toast :items="items" />
    </div>
    `,
});
