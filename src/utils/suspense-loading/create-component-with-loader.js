import { defineAsyncComponent } from 'vue';
import { mountSuspense } from '@utils/suspense-loading/mount-suspense';

const createComponentWithLoader = ({
  component,
  loadingComponent,
  errorComponent,
  transitionComponent,
}) => {
  if (!component || !loadingComponent) throw new Error('createAsyncComponent: component-loadingComponent is missing');

  const params = {
    component,
    loadingComponent,
    errorComponent,
    transitionComponent,
  };

  return defineAsyncComponent(() => mountSuspense(params));
};

export { createComponentWithLoader };
