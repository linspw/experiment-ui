import { extend } from 'vee-validate';
import { email } from 'vee-validate/dist/rules';

const VeeValidatePlugin = {
  install() {
    extend('required', {
      validate(value) {
        console.log(value);
        return {
          required: true,
          valid: ['', null, undefined].indexOf(value) === -1,
        };
      },
      message: 'This field is required',
      computesRequired: true,
    });
    extend('required', email);
  },
};

export { VeeValidatePlugin };
