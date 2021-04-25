/* eslint-disable no-param-reassign */
import { AToastAPI } from './AToastAPI';

class AToastPlugin {
  static install(Render, globalOptions = {}) {
    const isVue = (Render.name === 'Vue' || Render.name === 'VueComponent');

    const defaultInstanceLocal = isVue ? Render.prototype : Window;
    const defaultTagId = 'a-toast';
    if (!globalOptions.InstanceLocal) Object.defineProperty(globalOptions, 'InstanceLocal', { value: defaultInstanceLocal });
    if (!globalOptions.tagId) Object.defineProperty(globalOptions, 'tagId', { value: defaultTagId });
    const API = AToastAPI(Render, globalOptions);
    Object.defineProperty(globalOptions.InstanceLocal, '$toast', { value: API });
    Object.defineProperty(Render, '$toast', { value: API });
  }
}

export { AToastPlugin };
