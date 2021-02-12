/* eslint-disable no-param-reassign */
import { AToastWrapper, AToastAPI } from '@/components/Molecules/AToast';

const API = (Vue, options = {}) => {
  const methods = AToastAPI(Vue, options);
  Vue.prototype.$toast = methods;
  Vue.$toast = methods;
};

AToastWrapper.install = API;

export { AToastWrapper as AToastPlugin };
