import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

const VeeValidatePlugin = {
  install() {
    console.log('foi');
    extend('required', required);
    extend('required', email);
  },
};

export { VeeValidatePlugin };
