import { phoneNumberMask } from './phone-number';
import { cnpjMask } from './cnpj';
import { cepMask } from './cep';

const maskDictionary = {
  phone: {
    mask: phoneNumberMask,
    maskLength: 16,
  },
  cnpj: {
    mask: cnpjMask,
    maskLength: 18,
  },
  cep: {
    mask: cepMask,
    length: 9,
  },
};

export { maskDictionary };
