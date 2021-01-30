/* eslint-disable no-param-reassign */
import { AToastInstance, AToastAPI } from '@/components/Molecules/AToast';

const API = (Vue, options = {}) => {
  const methods = AToastAPI(Vue, options);
  Vue.prototype.$toast = methods;
  Vue.$toast = methods;
};

AToastInstance.install = API;

export { AToastInstance as AToastPlugin };
