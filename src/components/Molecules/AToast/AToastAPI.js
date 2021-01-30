/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import AToastInstance from './AToastInstance.vue';

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
    if (Vue.prototype.$toastInstance) {
      console.log(options);
      if (options && (options.duration || options.duration === 0)) {
        // eslint-disable-next-line no-param-reassign
        Vue.prototype.$toastInstance.duration = options.duration;
      }
      return;
    }

    const propsData = Vue.observable({ ...globalOptions, ...options });

    const ComponentClass = Vue.extend(AToastInstance);

    this.setupContainer();

    // eslint-disable-next-line no-param-reassign
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
