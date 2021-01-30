/* eslint-disable no-console */
import AToastInstance from './AToastInstance.vue';

const AToastAPI = (Vue, globalOptions = {}) => ({
  add(options) {
    if (!options || (typeof options !== 'object')) return;

    const itemOptions = !options.id ? { ...options, id: Date.now() } : options;
    this.create();

    Vue.prototype.$toastInstance.pushItem(itemOptions);
  },
  remove(itemIndex = 0) {
    this.create();

    return Vue.prototype.$toastInstance.removeItem(itemIndex);
  },
  create(options) {
    if (Vue.prototype.$toastInstance) return;

    const propsData = { ...globalOptions, ...options };

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
