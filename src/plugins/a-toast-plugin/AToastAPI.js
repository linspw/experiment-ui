/* eslint-disable consistent-return */
const AToastAPI = (Render, globalOptions) => {
  const { InstanceLocal, tagId } = globalOptions;
  return {
    async add(itemOptions, toastOptions) {
      if (!itemOptions || (typeof itemOptions !== 'object')) return;

      await this.create(toastOptions);

      const newItem = !itemOptions.id ? { ...itemOptions, id: Date.now() } : itemOptions;
      InstanceLocal.$toastInstance.addItem(newItem);
    },
    async remove(itemIndex = 0) {
      await this.create();

      return InstanceLocal.$toastInstance.removeItem(itemIndex);
    },
    async removeById(id) {
      if (!id) return;
      await this.create();

      return InstanceLocal.$toastInstance.removeItemById(id);
    },
    async create(options) {
      if (InstanceLocal.$toastInstance) return;
      this.setupContainer(tagId);

      if ((Render.name === 'Vue' || Render.name === 'VueComponent') && !globalOptions.create) {
        const propsData = Render.observable({ ...globalOptions, ...options });
        const { AToastWrapper: Component } = await import('@/components/molecules/a-toast');
        const ComponentClass = Render.extend(Component);
        InstanceLocal.$toastInstance = new ComponentClass({
          el: `#${tagId}`,
          propsData,
        });
        return true;
      }

      if (globalOptions.create) {
        globalOptions.create(tagId);
        return true;
      }

      return false;
    },
    async setupContainer(elementId) {
      this.parent = document.getElementById(elementId);

      if (!this.parent) {
        this.parent = document.createElement('div');
        this.parent.id = elementId;
      }

      await document.body.appendChild(this.parent);
    },
  };
};

export { AToastAPI };
