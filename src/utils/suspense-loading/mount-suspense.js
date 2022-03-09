import {
  defineComponent, h, resolveComponent,
} from 'vue';
import flushPromises from 'flush-promises';

const mountSuspense = async ({
  component, loadingComponent, errorComponent, transitionComponent,
}) => {
  const HSuspense = resolveComponent('h-suspense');
  const slots = {};

  const mainComponent = transitionComponent
    ? () => h(transitionComponent, null, () => h(component))
    : () => h(component);

  if (mainComponent) slots.default = mainComponent;
  if (loadingComponent) slots.loading = () => h(loadingComponent);
  if (errorComponent) slots.error = () => h(errorComponent);

  const wrapper = defineComponent({
    render() {
      return h(HSuspense, null, slots);
    },
  });

  await flushPromises();
  return wrapper;
};

export { mountSuspense };
