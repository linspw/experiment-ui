/* eslint-disable no-param-reassign */
import { AToastWrapper, AToastAPI } from '@/components/molecules/a-toast';

const API = (Vue, options = {}) => {
  const methods = AToastAPI(Vue, options);
  Vue.prototype.$toast = methods;
  Vue.$toast = methods;
};

AToastWrapper.install = API;

export { AToastWrapper as AToastPlugin };
