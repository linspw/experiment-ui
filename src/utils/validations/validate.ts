/* eslint-disable no-param-reassign */
import Schema from 'validate';
import { phoneRegex } from './phone';
import { emailRegex } from './email';

const typeDictionary = {
  Number: 'número',
  String: 'texto',
  Array: 'lista',
  Object: 'objeto',
  Function: 'function',
};

const defaultMessages = {
  required: (value: string) => `O ${value} é obrigatório.`,
  match: function match(prop: string, _ctx: any, _regexp: string) {
    return `O ${prop} não é válido.`;
  },
  type(prop: string, _ctx: any, type: any) {

    if (typeof type === 'function') type = type.name;

    return `O ${prop} precisa ser do tipo: ${(typeDictionary as any)[type] || type}.`;
  },
  length(prop: string, _ctx: any, len: number | {min: number|undefined, max: number|undefined}){
    if (typeof len === 'number') return `O ${prop} precisa ter o tamanho de ${len}.`;

    const { min } = len;
    const { max } = len;

    if (min && max) return `O ${prop} precisa ter o tamanho entre ${min} e ${max}.`;

    if (max) return `O ${prop} precisa ter o tamanho máximo de ${max}.`;

    if (min) return `O ${prop} precisa ter o tamanho mínimo de ${min}.`;

    return `O ${prop} não tem o tamanho certo.`;
  },
  size(prop: string, _ctx: any, size: number | {min: number|undefined, max: number|undefined}) {
    if (typeof size === 'number') {
      return `O ${prop} must have a size of ${size}.`;
    }

    const { min } = size;
    const { max } = size;

    if (min !== undefined && max !== undefined) return `O ${prop} must be between ${min} and ${max}.`;

    if (max !== undefined) return `O ${prop} must be less than ${max}.`;

    if (min !== undefined) return `O ${prop} must be greater than ${min}.`;

    return `O ${prop} não tem o valor correto.`;
  },
};

const validationsDictionary = {
  phone: phoneRegex,
  email: emailRegex,
};

const createRules = (rules: any) => ({
  ...rules,
  message: {
    ...defaultMessages,
    ...rules.message,
  },
});

const Validate = (value: string, rules: any, name = 'campo') => {
  rules = JSON.parse(JSON.stringify(rules));
  if (Object.prototype.hasOwnProperty.call(rules, 'startValidating')) delete rules.startValidating;
  if (rules.match) rules.match = ((validationsDictionary as any)[rules.match] || rules.match);

  const Validator = new Schema({
    [name]: createRules(rules),
  });

  const errors = Validator.validate({ [name]: value });
  return errors;
};

export { Validate };
