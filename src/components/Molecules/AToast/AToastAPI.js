/* eslint-disable no-param-reassign */
import AToastWrapper from './AToastWrapper.vue';

const AToastAPI = (Vue, globalOptions = {}) => ({
  add(itemOptions, toastOptions) {
    if (!itemOptions || (typeof itemOptions !== 'object')) return;

    const newItem = !itemOptions.id ? { ...itemOptions, id: Date.now() } : itemOptions;
    this.create(toastOptions);

    Vue.prototype.$toastInstance.pushItem(newItem);
  },
  remove(itemIndex = 0) {
    this.create();

    return Vue.prototype.$toastInstance.removeItem(itemIndex);
  },
  create(options = { duration: 0 }) {
    if (Vue.prototype.$toastInstance) return;

    const propsData = Vue.observable({ ...globalOptions, ...options });

    const ComponentClass = Vue.extend(AToastWrapper);

    this.setupContainer();

    Vue.prototype.$toastInstance = new ComponentClass({
      el: '#a-toast',
      propsData,
    });
  },
  setupContainer() {
    this.parent = document.getElementById('a-toast');

    if (!this.parent) {
      this.parent = document.createElement('div');
      this.parent.id = 'a-toast';
    }

    const container = document.body;

    container.appendChild(this.parent);
  },
});

export { AToastAPI };
