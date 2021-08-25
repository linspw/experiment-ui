/* eslint-disable no-param-reassign */
import { AToastAPI } from './a-toast-api';

class AToastPlugin {
  static install(Render, globalOptions = {}) {
    const defaultInstanceLocal = Render.prototype;
    const defaultTagId = 'a-toast';
    if (!globalOptions.InstanceLocal) Object.defineProperty(globalOptions, 'InstanceLocal', { value: defaultInstanceLocal });
    if (!globalOptions.tagId) Object.defineProperty(globalOptions, 'tagId', { value: defaultTagId });
    const API = AToastAPI(Render, globalOptions);
    Object.defineProperty(globalOptions.InstanceLocal, '$toast', { value: API });
    Object.defineProperty(Render, '$toast', { value: API });
  }
}

export { AToastPlugin };
