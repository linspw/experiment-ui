import MaskImp from 'mask-imp';

class Mask {
  constructor(pattern, options) {
    this.pattern = pattern;
    this.options = options;
    this.maskInstance = MaskImp(pattern, options);
  }

  masked(value) {
    if (value) return this.maskInstance.masked(value);

    return '';
  }

  unmasked(value) {
    if (value) return this.maskInstance.unmasked(value);

    return '';
  }
}

export { Mask };
