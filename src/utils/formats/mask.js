/* eslint-disable class-methods-use-this */
/* eslint-disable no-class-assign */
import { mask, tokens } from 'maska';
import { maskDictionary } from './mask-dictionary';

class MaskClass {
  constructor(pattern, options) {
    this.pattern = this.getPatternFromDictionary(pattern);
    this.options = options;
  }

  masked(value) {
    if (!value) return undefined;
    const result = mask(value, this.pattern?.mask, tokens, true);

    return result;
  }

  unmasked(value) {
    if (!value) return undefined;

    const result = mask(value, this.pattern?.mask, tokens, false);

    return result;
  }

  getPattern() {
    return this.pattern;
  }

  getPatternLength() {
    return this.pattern?.maskLength;
  }

  getPatternFromDictionary(value) {
    return maskDictionary[value] || { mask: value, maskLength: value.length };
  }
}

const Mask = new Proxy(MaskClass, {
  apply(Target, _thisArg, argumentsList) {
    return new Target(...argumentsList);
  },
});

export { Mask, MaskClass };
