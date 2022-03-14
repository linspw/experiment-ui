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
    ? (props) => h(transitionComponent, null, () => h(component, props))
    : (props) => h(component, props);

  if (mainComponent) slots.default = mainComponent;
  if (loadingComponent) slots.loading = (props) => h(loadingComponent, props);
  if (errorComponent) slots.error = (props) => h(errorComponent, props);

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
