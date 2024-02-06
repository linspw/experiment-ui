import {
  defineComponent, h, resolveComponent,
} from 'vue';
import flushPromises from 'flush-promises';

const mountSuspense = async ({
  component, loadingComponent, errorComponent, transitionComponent,
}: any) => {
  const HSuspense = resolveComponent('h-suspense');
  const slots: any = {};

  const mainComponent = transitionComponent
    ? (props: any) => h(transitionComponent, null, () => h(component, props))
    : (props: any) => h(component, props);

  if (mainComponent) slots.default = mainComponent;
  if (loadingComponent) slots.loading = (props: any) => h(loadingComponent, props);
  if (errorComponent) slots.error = (props: any) => h(errorComponent, props);

  const wrapper = defineComponent({
    setup(props, { attrs }) {
      const toBind = { ...attrs, ...props };
      return () => h(HSuspense, toBind, slots);
    },
  });

  await flushPromises();
  return wrapper;
};

export { mountSuspense };
